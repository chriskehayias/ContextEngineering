# 06 · Claude Code for the Non-Developer

**Day 1 · 2:45 – 3:30 PM · 45 min** · Speaker: **Trace Jackson**

> You don't have to write the code to own the project.

---

## Session Goal

Non-developers (IT directors, ministry leads, admins) walk away with **four commands they can run tomorrow** on their own church's codebase or a vendor's repo, without writing a line of code.

## Outline

1. **Who this is for** — 3 min
   - The church IT director who inherited a developer's project
   - The ministry lead evaluating a vendor build
   - The "I can read code but not write it" person
2. **Quick installer recap** — 5 min
3. **Four commands every non-dev should know** — 25 min
   - [`/project:project-overview`](../../resources/Claude/commands/project-overview.md) — "what is this thing?"
   - [`/project:explain`](../../resources/Claude/commands/explain.md) — "what does this file/function do?"
   - [`/project:explain-error`](../../resources/Claude/commands/explain-error.md) — "what does this red text mean?"
   - [`/project:summarize-changes`](../../resources/Claude/commands/summarize-changes.md) — "what did the dev actually ship last sprint?"
4. **Real ministry use cases** — 7 min
   - Reviewing a vendor handoff before you sign off
   - Writing board-ready updates in plain English
   - Onboarding yourself to a project you didn't build
5. **Q&A** — 5 min

## Talking Points

- Claude Code for a non-dev is not "AI that writes code for me." It's **"AI that makes code legible to me."**
- Read-only commands are safe. You can't break anything with `/project:explain`.
- `summarize-changes` is the killer app for this audience — "the dev shipped 47 commits last month, what did they actually do?" in human English.
- Encourage curiosity: if you don't understand an answer, follow up with "explain that like I'm not technical."
- This session dovetails with the [Inspire Leaders panel](../08-inspire-leaders-panel/README.md) at 4:20.

## Hands-On / Exercises

- **Live demo**: take a repo the room isn't familiar with (your own, or a small OSS project). Run `/project:project-overview`, then `/project:explain` on a file.
- **Encourage follow-up**: pick one person who brought a real church repo; live-run `/project:summarize-changes --days 30` on it.

## Resources

- [`resources/Claude/commands/README.md`](../../resources/Claude/commands/README.md) — the full 8-command table
- [`resources/Claude/commands/explain.md`](../../resources/Claude/commands/explain.md) — beginner-friendly plain-language output
- [`resources/Claude/commands/explain-error.md`](../../resources/Claude/commands/explain-error.md) — turns terror into a to-do list
- [`resources/Claude/commands/summarize-changes.md`](../../resources/Claude/commands/summarize-changes.md) — plain-English git history
- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — orientation to any codebase
- [`resources/images/claude-code-cheat-sheet.png`](../../resources/images/claude-code-cheat-sheet.png) — print-ready reference

## Notes for the Speaker (Trace)

- Tone matters more here than in any other session. Several attendees will be testing whether AI is "for them" at all.
- Use a church-world example, not a SaaS example. Volunteer signups, event check-ins, giving dashboards.
- If the room goes quiet, ask: "raise your hand if you've been handed a repo by a vendor and weren't sure what to do with it." That hand-raise is the whole session.
- Starter deck: [`starter.pptx`](./starter.pptx)
