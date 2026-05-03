# Auth Starters

Drop-in references for adding authentication and authorization to a Next.js app. These pair with the [web starter](../web-nextjs.md) — same App Router, same Drizzle/Neon database, same conventions.

Each doc is **copy/paste-ready context for a PRD or for Claude Code**. The goal: paste the relevant section into a project's planning doc or `CLAUDE.md`, and Claude can implement the feature without guessing at provider docs that may have shifted under it.

---

## Files in this folder

| File | What it covers | When to use it |
|---|---|---|
| [**better-auth.md**](better-auth.md) | Better Auth standalone (email/password) + Google SSO + Microsoft SSO sections | The default for almost every Next.js app in this workshop. Self-hosted, owns your `users` table in Neon, no per-MAU bill. |
| [**google-sso.md**](google-sso.md) | Google Cloud Console setup, OAuth 2.0 / OIDC concepts, Workspace vs personal accounts, Next.js implementation paths | Adding "Sign in with Google" to an app — whether via Better Auth (recommended), NextAuth, or hand-rolled OAuth. |
| [**microsoft-sso.md**](microsoft-sso.md) | Microsoft Entra ID app registration, single-tenant vs multi-tenant, Graph API scopes, Next.js implementation paths | Adding "Sign in with Microsoft" — Office 365 customers, internal staff on Entra ID, or any org running on Microsoft. |
| [**rbac.md**](rbac.md) | Three approaches to roles & permissions: Better Auth `admin` plugin, Better Auth `access-control` plugin, and roll-your-own — each shown with and without SSO | Once you have auth, you need to decide who can do what. Pick an approach based on how granular your permissions need to get. |

---

## How to use these

1. **In a PRD:** copy the relevant "Implementation context" block straight into the auth section of your PRD. It already has the architecture decisions, env vars, file layout, and library calls pinned down.
2. **In a fresh app:** copy the relevant section into the project's `CLAUDE.md`. Claude will use Context7 to fetch current docs for any library mentioned and follow the conventions you laid down.
3. **For workshops:** these are meant to be read sequentially when auth comes up. Start with `better-auth.md`, then layer on the SSO doc(s) you need, then pick an `rbac.md` approach.

---

## Conventions assumed

These docs assume the [web starter](../web-nextjs.md) shape:

- Next.js 16 App Router on Vercel
- Drizzle ORM against Neon Postgres
- Better Auth as the default auth library (mounted at `app/api/auth/[...all]/route.ts`, server config in `lib/auth.ts`)
- Server Components by default; Server Actions for the write path

Where SSO docs offer non-Better-Auth alternatives (Auth.js, hand-rolled OAuth), they're called out explicitly so you can pick.
