# RBAC — three approaches

Once you have authentication, you need to decide **who can do what**. This doc covers three approaches, in order of escalating complexity:

1. **[Better Auth `admin` plugin](#approach-1-better-auth-admin-plugin)** — coarse `admin` / `user` roles plus user-management APIs (ban, impersonate, list). Right when "admin" and "everyone else" is the only distinction you need.
2. **[Better Auth `access-control` plugin](#approach-2-better-auth-access-control-plugin)** — statement-based fine-grained permissions (e.g., `event:create`, `event:delete`, `member:ban`) layered on top of named roles. Right when you need more than two roles or per-resource permissions.
3. **[Roll your own roles](#approach-3-roll-your-own-roles)** — a `roles` column (or join table) on your `user` table, checked manually in Server Actions / Route Handlers. Right when you've outgrown the plugins, want full control, or don't use Better Auth.

Each section shows the same example so you can compare apples to apples: a church staff app with **members** (read-only access to their own profile), **leaders** (can create/edit events), and **admins** (everything plus user management).

Each approach is shown **with and without SSO**. Roles are independent of how the user signed in — a Google-SSO user gets a role the same way an email/password user does.

---

## How to choose

| Approach | Use when | Avoid when |
|---|---|---|
| **`admin` plugin** | You need admin tooling (ban, impersonate, user list) and a single privilege boundary | You need 3+ distinct roles or per-resource permissions |
| **`access-control` plugin** | You need 3+ roles, fine-grained permissions, or want roles + statements without writing the checks yourself | You're not using Better Auth |
| **Roll your own** | You want full control, you've outgrown plugin assumptions, or you're not on Better Auth | A plugin would do exactly what you need (don't reinvent) |

You can also **combine**: use `admin` plugin for the user-management dashboard *and* `access-control` for in-app feature gates. They're not mutually exclusive.

---

## Approach 1: Better Auth `admin` plugin

A flexible, prebuilt admin layer with a default `admin` / `user` role split. It also gives you user-management APIs (ban, impersonate, list users) gated by the admin role — useful for an internal admin dashboard.

### What it gives you

| Capability | API |
|---|---|
| Default roles `admin` and `user` (configurable) | `admin({ defaultRole: "user", adminRole: "admin" })` |
| Ban a user (with optional expiry + reason) | `authClient.admin.banUser({ userId, banReason, banExpiresIn })` |
| Unban | `authClient.admin.unbanUser({ userId })` |
| Impersonate a user (for debugging / support) | `authClient.admin.impersonateUser({ userId })` |
| List users (paginated) | `authClient.admin.listUsers({ limit, offset, sortBy, sortDirection })` |
| Set a user's role | `authClient.admin.setRole({ userId, role })` |
| Hard-delete a user | `authClient.admin.removeUser({ userId })` |

A user can have **multiple roles** (stored as a comma-separated string).

### Implementation context (drop into PRD or CLAUDE.md)

````markdown
**RBAC: Better Auth admin plugin.**

**Server config (`lib/auth.ts`) — additions:**
```ts
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  // ...existing config (database, emailAndPassword, socialProviders, etc.)
  plugins: [
    admin({
      defaultRole: "user",
      adminRole: "admin",
      // Optional: limit which roles a non-admin can self-set, etc.
    }),
  ],
});
```

**Client (`lib/auth-client.ts`) — additions:**
```ts
import { adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [adminClient()],
});
```

**Schema regen + migrate** (the plugin adds `role` and ban-related columns to `user`):
```bash
npx @better-auth/cli generate
npx drizzle-kit generate && npx drizzle-kit migrate
```

**Promoting a user to admin (one-off, from a script or a SQL console):**
```sql
UPDATE "user" SET role = 'admin' WHERE email = 'tripp@yourchurch.org';
```
For ongoing role management, use `authClient.admin.setRole({ userId, role: "admin" })` from your admin dashboard.

**Gating a Server Action by role:**
```ts
"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function deleteEvent(id: string) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthorized");
  if (session.user.role !== "admin") throw new Error("Forbidden");
  await db.delete(events).where(eq(events.id, id));
}
```

**Admin dashboard page (Server Component):**
```tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.role !== "admin") redirect("/");

  const { data: users } = await auth.api.listUsers({
    headers: await headers(),
    query: { limit: 50, sortBy: "createdAt", sortDirection: "desc" },
  });

  return <UsersTable users={users ?? []} />;
}
```

**Limitation:** the default plugin only distinguishes `admin` from `user`. If you need `member`/`leader`/`admin` (three+ levels), either layer the access-control plugin on top, or combine it with `access-control` (next section).
````

### With SSO

Identical to without — the plugin reads `session.user.role`, which is on the `user` row, regardless of whether the user signed up with email or Google or Microsoft. **One thing to add for SSO + roles:** decide whether new SSO users should default to `member` or get auto-promoted by email domain. Use a `databaseHooks.user.create.before` hook:

```ts
// lib/auth.ts (excerpt)
databaseHooks: {
  user: {
    create: {
      before: async (user) => {
        const role = user.email?.endsWith("@yourchurch.org") ? "admin" : "user";
        return { data: { ...user, role } };
      },
    },
  },
},
```

---

## Approach 2: Better Auth `access-control` plugin

Statement-based permissions on top of named roles. Define resources and actions once, define which roles can do what, and check permissions explicitly anywhere on the server.

### Concepts

- **Statement** — a TypeScript object mapping resources to allowed actions. The source of truth for what permissions exist in your app.
- **Role** — a named bundle of permissions, built from the statement.
- **`hasPermission`** — server-side check: does the current user (via their role) have permission `X` on resource `Y`?

### Implementation context (drop into PRD or CLAUDE.md)

````markdown
**RBAC: Better Auth admin plugin + access-control statements.**

The `admin` plugin provides admin tooling (ban, impersonate, list). The `access-control` system layered on it gives us fine-grained per-resource permissions for every other check.

**Define the access control model (`lib/permissions.ts`):**
```ts
import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

// Resources + actions for our app.
// Merge with the admin plugin's default statements (user, session) so
// admin-tool permissions still work alongside our app permissions.
export const statement = {
  ...defaultStatements,
  event: ["create", "read", "update", "delete"],
  member: ["read", "update"],
} as const;

export const ac = createAccessControl(statement);

// Roles
export const memberRole = ac.newRole({
  event: ["read"],
  member: ["read"],   // can only read their own profile (enforce ownership in code)
});

export const leaderRole = ac.newRole({
  event: ["create", "read", "update"],
  member: ["read"],
});

export const adminRole = ac.newRole({
  ...adminAc.statements,         // ban / impersonate / list users
  event: ["create", "read", "update", "delete"],
  member: ["read", "update"],
});
```

**Wire it into `lib/auth.ts`:**
```ts
import { admin } from "better-auth/plugins";
import { ac, memberRole, leaderRole, adminRole } from "./permissions";

export const auth = betterAuth({
  // ...existing config
  plugins: [
    admin({
      ac,
      roles: {
        member: memberRole,
        leader: leaderRole,
        admin: adminRole,
      },
      defaultRole: "member",
      adminRoles: ["admin"],   // which role(s) get admin-tooling permissions
    }),
  ],
});
```

**Schema regen + migrate:**
```bash
npx @better-auth/cli generate
npx drizzle-kit generate && npx drizzle-kit migrate
```

**Server-side permission check:**
```ts
"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function createEvent(input: NewEventInput) {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });
  if (!session) throw new Error("Unauthorized");

  const { success } = await auth.api.userHasPermission({
    headers: h,
    body: { permissions: { event: ["create"] } },
  });
  if (!success) throw new Error("Forbidden");

  await db.insert(events).values({ ...input, createdById: session.user.id });
}
```

You can check multiple resources at once:
```ts
await auth.api.userHasPermission({
  headers: h,
  body: { permissions: { event: ["update"], member: ["read"] } },
});
```

**Reusable guard helper (`lib/guards.ts`):**
```ts
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type Permissions = Parameters<typeof auth.api.userHasPermission>[0]["body"]["permissions"];

export async function require(permissions: Permissions) {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });
  if (!session) throw new Error("Unauthorized");
  const { success } = await auth.api.userHasPermission({
    headers: h, body: { permissions },
  });
  if (!success) throw new Error("Forbidden");
  return session;
}

// usage:
const session = await require({ event: ["delete"] });
```

**Client-side check** (for showing/hiding UI):
```tsx
"use client";
import { authClient } from "@/lib/auth-client";

export function DeleteEventButton({ id }: { id: string }) {
  const { data: canDelete } = authClient.admin.checkPermission({
    permissions: { event: ["delete"] },
  });
  if (!canDelete) return null;
  return <Button variant="destructive">Delete</Button>;
}
```

> **Don't trust client-side checks.** They're for UI ergonomics only. Every Server Action / Route Handler must re-check on the server.

**Adding a new permission later:**
1. Add the action to the statement in `lib/permissions.ts`.
2. Add it to whichever roles should have it.
3. No migration needed — permissions live in code, not the DB.
````

### With SSO

Same as approach 1 — roles are stored on the `user` row regardless of how the user signed up. The role-on-create hook works the same way:

```ts
databaseHooks: {
  user: {
    create: {
      before: async (user) => {
        const role =
          user.email?.endsWith("@yourchurch.org") ? "leader" :
          user.email ? "member" : "member";
        return { data: { ...user, role } };
      },
    },
  },
},
```

For multi-tenant SSO (Microsoft `tenantId: "organizations"`), pair this with a domain-scoped tenant model — see the next section's roll-your-own pattern.

---

## Approach 3: Roll your own roles

When you want full control or you're not on Better Auth. Two flavors: **simple** (a `role` column) and **flexible** (a roles + permissions schema). Most apps want the simple version.

### Flavor A — `role` column on `user`

The 80% case. Add a column, default new users to `"member"`, branch on it.

````markdown
**RBAC: hand-rolled, single role per user.**

**Schema (`db/schema.ts`) — add a column to `user`:**
```ts
import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["member", "leader", "admin"]);

// If you're using Better Auth, extend its generated user table:
export const user = pgTable("user", {
  // ...the columns Better Auth generated
  role: userRole("role").notNull().default("member"),
});

// If you're NOT using Better Auth, do the same on whatever your user table is.
```

Run a migration: `npx drizzle-kit generate && npx drizzle-kit migrate`.

**Helper (`lib/auth-helpers.ts`):**
```ts
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ranks = { member: 0, leader: 1, admin: 2 } as const;
type Role = keyof typeof ranks;

export async function requireRole(min: Role) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthorized");
  if (ranks[session.user.role as Role] < ranks[min]) {
    throw new Error("Forbidden");
  }
  return session;
}
```

**Use it in a Server Action:**
```ts
"use server";
import { requireRole } from "@/lib/auth-helpers";

export async function deleteEvent(id: string) {
  await requireRole("admin");
  await db.delete(events).where(eq(events.id, id));
}

export async function createEvent(input: NewEventInput) {
  const session = await requireRole("leader");
  await db.insert(events).values({ ...input, createdById: session.user.id });
}
```

**Promoting a user (admin tool):**
```ts
"use server";
import { requireRole } from "@/lib/auth-helpers";

export async function setUserRole(userId: string, role: "member" | "leader" | "admin") {
  await requireRole("admin");
  await db.update(user).set({ role }).where(eq(user.id, userId));
}
```

**Trade-offs:**
- ✅ Trivial to reason about. Hierarchical (admin can do everything leader can).
- ✅ One column, one helper, no plugins.
- ❌ No fine-grained per-resource permissions (admin always > leader). If a leader needs to edit events but not members, this falls apart.
- ❌ No built-in admin tooling (ban, impersonate). Build those endpoints yourself if you need them.
````

### Flavor B — roles + permissions tables

When you've outgrown a single `role` column. Standard relational RBAC: users have many roles, roles have many permissions, permissions are `(resource, action)` pairs.

````markdown
**RBAC: hand-rolled, normalized roles + permissions schema.**

**Schema (`db/schema.ts`):**
```ts
import { pgTable, text, primaryKey, uuid } from "drizzle-orm/pg-core";

export const role = pgTable("role", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),       // "admin", "leader", "member"
  description: text("description"),
});

export const permission = pgTable("permission", {
  id: uuid("id").defaultRandom().primaryKey(),
  resource: text("resource").notNull(),         // "event", "member"
  action: text("action").notNull(),             // "create", "read", "update", "delete"
});

export const rolePermission = pgTable("role_permission", {
  roleId: uuid("role_id").notNull().references(() => role.id, { onDelete: "cascade" }),
  permissionId: uuid("permission_id").notNull().references(() => permission.id, { onDelete: "cascade" }),
}, (t) => ({ pk: primaryKey({ columns: [t.roleId, t.permissionId] }) }));

export const userRole = pgTable("user_role", {
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  roleId: uuid("role_id").notNull().references(() => role.id, { onDelete: "cascade" }),
}, (t) => ({ pk: primaryKey({ columns: [t.userId, t.roleId] }) }));
```

**Seed (`db/seed-rbac.ts`)** — define roles and their permissions in code:
```ts
const seedData = {
  admin:  [["event","create"],["event","read"],["event","update"],["event","delete"],["member","read"],["member","update"]],
  leader: [["event","create"],["event","read"],["event","update"],["member","read"]],
  member: [["event","read"],["member","read"]],
} as const;
// ...insert role + permission rows, link via role_permission
```

**Permission check (`lib/auth-helpers.ts`):**
```ts
export async function userHasPermission(userId: string, resource: string, action: string) {
  const row = await db.execute(sql`
    SELECT 1 FROM user_role ur
    JOIN role_permission rp ON rp.role_id = ur.role_id
    JOIN permission p ON p.id = rp.permission_id
    WHERE ur.user_id = ${userId} AND p.resource = ${resource} AND p.action = ${action}
    LIMIT 1
  `);
  return row.rows.length > 0;
}

export async function require(resource: string, action: string) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthorized");
  const ok = await userHasPermission(session.user.id, resource, action);
  if (!ok) throw new Error("Forbidden");
  return session;
}
```

**Cache the permission set per request** (or per session, with bust on role change) — joining three tables on every Server Action will hurt at scale. Better Auth's plugin handles this for you; if you DIY, use Upstash Redis (see `lib/cache.ts` in the [web starter](../web-nextjs.md)) keyed on `user:{id}:permissions`.

**When to pick this over the Better Auth access-control plugin:**
- You're not on Better Auth.
- You need permissions that are dynamic (assigned per record at runtime, e.g. "this user can edit *this specific* event") — that's a separate concept (resource-level ACLs / row-level security) and neither plugin handles it natively.
- You need to expose role/permission management as a feature inside your app (not just hardcoded in TypeScript).
````

### With SSO

For both flavors, SSO doesn't change the picture — the user gets a row in your `user` table the same way regardless of provider. Where SSO **does** change things:

**Auto-role-by-domain on first sign-in:**
```ts
// lib/auth.ts (Better Auth example)
databaseHooks: {
  user: {
    create: {
      before: async (user) => {
        const email = user.email ?? "";
        const role =
          email.endsWith("@yourchurch.org") ? "leader" :
          /* default */                      "member";
        return { data: { ...user, role } };
      },
    },
  },
},
```

**Multi-tenant SSO (B2B):** when you set Microsoft's `tenantId: "organizations"` (any work tenant can sign in), you typically also want a `tenant` / `organization` table in your domain. Pattern:
- On first sign-in, look up the user's `tid` (tenant ID claim).
- If a `tenant` row exists for that `tid`, link the user to it.
- If not, either auto-create the tenant row or reject with "your org isn't onboarded yet."
- The user's role is **per tenant** — store it on `tenant_user (tenant_id, user_id, role)`, not on `user.role`.

That's a heavier model than this doc covers — at that point you're closer to a proper multi-tenant B2B app, and Better Auth's `organization` plugin is worth a look (see the [Better Auth org plugin docs](https://better-auth.com/docs/plugins/organization)).

---

## Cross-cutting: where to enforce permissions

Regardless of approach, **enforce on the server, every time, at the data layer**. Specifically:

1. **Every Server Action** starts with a session + permission check. No exceptions.
2. **Every Route Handler** does the same — webhooks excluded (they have their own signature verification).
3. **Server Components** that render protected pages also check, and `redirect()` if not allowed. (Middleware can short-circuit unauthenticated requests but shouldn't be your only check — middleware doesn't run for direct API calls.)
4. **Client-side checks are UI-only.** They decide whether to show a "Delete" button. They never decide what the server lets you do.

A useful mental model: **the permission check belongs next to the data access, not next to the UI.** If you check in three places (component, action, query), the action is the load-bearing one.

---

## Use Context7 for current docs

Before writing non-trivial RBAC code, fetch the latest via Context7. The Better Auth admin and access-control APIs have been actively iterating.

Libraries to consult via Context7 when relevant:
- `better-auth` — `admin` plugin (`defaultRole`, `adminRoles`, `userHasPermission`), `accessControl` integration, `databaseHooks.user.create.before`
- `better-auth/client/plugins` — `adminClient`, `checkPermission`
- `drizzle-orm` — schema for normalized RBAC tables, `relations()`, `with` for join queries

---

## Related

- [better-auth.md](better-auth.md) — auth foundation; the plugins live on top of this
- [google-sso.md](google-sso.md) — Google sign-in (orthogonal to RBAC)
- [microsoft-sso.md](microsoft-sso.md) — Microsoft sign-in, including multi-tenant notes that pair with multi-org RBAC
- [../web-nextjs.md](../web-nextjs.md) — the Next.js starter that grounds these patterns
