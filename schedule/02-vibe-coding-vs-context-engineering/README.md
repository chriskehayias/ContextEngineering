# 02 · Vibe Coding vs. Context Engineering

**Day 1 · 9:30 – 10:15 AM · 45 min** · Speaker: **Chris Kehayias**

> Name the difference in words, then show it in pixels.

---

## Session Goal

Attendees can articulate in one sentence why **context engineering beats vibe coding** — and they've seen the difference demonstrated live on the same task.

## Outline

1. **Define both terms** — 8 min
   - *Vibe coding*: typing what comes to mind and riding the model's first guess
   - *Context engineering*: designing what the model sees before you ask
2. **Side-by-side live demo** — 15 min
   - Same ambiguous feature request, run twice on a clean repo
   - Once with no context, once with a `CLAUDE.md` + a requirements doc
3. **The 7 criteria of a well-engineered prompt** — 12 min
   - Walk the framework from [`improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md):
     specificity, goal/purpose, constraints, success criteria, examples, audience, scope
4. **What "good" looks like** — 8 min
   - Characteristics: reproducible, auditable, teachable, improvable
5. **Transition to SDLC** — 2 min

## Talking Points

- Vibe coding isn't *wrong* — it's where most people start. The point is to graduate from it deliberately.
- The model's quality ceiling is almost always set by **what it was given**, not by how hard it tried.
- Good context is writable, readable, and **reviewable like code** — you can diff it, version it, critique it.
- Preview the custom [status line](../../resources/Claude/statusline/README.md): showing live context-window usage makes the abstract idea concrete.
- Plant the seed: every command they'll meet later (`/project:init-claude-md`, `/project:explain`, `/project:review`) is just context engineering wearing different hats.

## Hands-On / Exercises

- *Optional 2-minute poll:* ask the room to shout out a time AI gave them something useless. Then ask: **what was missing from the ask?** Nearly every answer maps to one of the 7 criteria.

## Resources

- [`resources/Claude/commands/improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md) — the 7-criteria framework, in command form
- [`resources/Claude/ClaudeCode.md`](../../resources/Claude/ClaudeCode.md) — cheat sheet + custom status line overview
- [`resources/Claude/statusline/README.md`](../../resources/Claude/statusline/README.md) — live context-usage display

## Notes for the Speaker (Chris)

- The **live demo** is the whole session. Rehearse it cold on a clean machine the night before.
- If the contrast between "no context" and "with context" isn't visually obvious, the session fails. Pick a task where ambiguity actually bites (e.g., "add a login page" — whose auth? which DB? what styling?).
- Resist drifting into Claude Code features. That's sessions 06 and 07. Today is the *why*, not the *how*.
- Starter deck: [`starter.pptx`](./starter.pptx)
