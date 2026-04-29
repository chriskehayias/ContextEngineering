# 10 · Next.js with Claude Code

**Day 2 · 10:00 – 10:30 AM · 30 min** · Speaker: **Chris Kehayias**

> Scaffold the project. Teach Claude about it. Then — and only then — start building.

---

## Session Goal

Every attendee has a fresh Next.js app on their machine with a **seeded `CLAUDE.md`** and their first two prompts run — ready for Build Block 1.

## Outline

1. **Why Next.js for today** — 3 min
   - One-command scaffold, deploys free to Vercel, batteries included
2. **Live scaffold** — 8 min
   - `npx create-next-app@latest` — walk the options together
   - TypeScript: yes. App Router: yes. Tailwind: yes. ESLint: yes.
3. **Seed `CLAUDE.md` immediately** — 6 min
   - Run [`/project:init-claude-md`](../../resources/Claude/commands/init-claude-md.md) on the fresh scaffold
   - Pause, read the generated draft, edit for your project
4. **First prompt: "describe this scaffold back to me"** — 4 min
   - A diagnostic that surfaces whether the context took
5. **Second prompt: set conventions** — 6 min
   - Tell Claude your naming, folder, and commit conventions *before* any feature work
6. **Hand-off to Build Block 1** — 3 min

## Talking Points

- The **temptation** is to start coding immediately. Resist it. Every minute you spend on context now is three minutes saved in Build Block 2.
- `create-next-app` is the fastest path from zero to deployable. Use it.
- The first prompt after scaffolding should never be "build feature X." It should be **"tell me what you see."** If Claude's summary is wrong, your context is wrong.
- Open the [Vercel logo](../../resources/images/vercel.svg) tab in your browser now — it's where we're going at 3:35.

## Hands-On / Exercises

Do this *in order* with the room:

```bash
npx create-next-app@latest my-app
cd my-app
git init && git add -A && git commit -m "initial scaffold"
code .
# In Claude Code:
/project:init-claude-md
# Then:
Describe this codebase to me in 5 bullets.
```

If the 5-bullet summary is generic ("this is a Next.js app with the App Router"), your `CLAUDE.md` doesn't have enough yet.

## Resources

- [`resources/Claude/commands/init-claude-md.md`](../../resources/Claude/commands/init-claude-md.md) — the seeding command
- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — orientation scan
- [`resources/Components.md`](../../resources/Components.md) — shadcn/ui for UI; 21st.dev for patterns
- [`resources/CloudProviders.md`](../../resources/CloudProviders.md) — services you'll likely wire in later (Neon for DB, Auth0 for login, Resend for email)

## Prerequisites Referenced

- Node 18+ (prereqs §3)
- Claude Code CLI authenticated (prereqs §6)
- Git configured (prereqs §2)

## Notes for the Speaker (Chris)

- **Type every command on the big screen.** Half the room is still shaky on the terminal.
- Resist covering Tailwind, shadcn/ui, or data-fetching patterns. That's Build Block 2's problem.
- If someone's `create-next-app` stalls, have them pull down a pre-scaffolded starter repo instead. Don't hold up the room.
- Starter deck: [`starter.pptx`](./starter.pptx)
