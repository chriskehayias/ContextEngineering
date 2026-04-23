# 04 · Building the Context for Context Engineering — Part 1

**Day 1 · 11:30 AM – 12:30 PM · 60 min** · Speaker: **Chris Kehayias**

> The concepts, the files, and what they look like when they're done right.

---

## Session Goal

Attendees can explain the role of **`CLAUDE.md`, requirements docs, and conventions files**, and recognize the difference between LLM-friendly and LLM-hostile writing.

## Outline

1. **Why context lives in files, not chat** — 8 min
   - Session amnesia; reproducibility; team-sharing; review-ability
2. **`CLAUDE.md` — the anatomy** — 15 min
   - Overview · Tech stack · Structure · Conventions · Build/test · Important notes
   - Walk the template in [`init-claude-md.md`](../../resources/Claude/commands/init-claude-md.md)
3. **Requirements docs for an LLM audience** — 12 min
   - Explicit > implicit; lists > prose; examples > adjectives
   - Name the constraints the model can't infer
4. **Conventions that stick** — 10 min
   - Naming, file layout, commit style, testing norms
   - Where to write them once so they're always in context
5. **Live demo: `/project:init-claude-md` on a sample project** — 10 min
6. **Preview Part 2 (hands-on)** — 5 min

## Talking Points

- Without context files, every session starts from zero. You are re-paying the explanation tax every morning.
- A great `CLAUDE.md` is **boring** — just facts the model needs, no flourish.
- Requirements docs aren't product specs. They're **model instructions with a business rationale**.
- Conventions are where junior-dev mistakes happen; write them once, save yourself from the 10th re-explaining.
- Start small — a half-good `CLAUDE.md` beats no `CLAUDE.md` by a mile.

## Resources

- [`resources/Claude/commands/init-claude-md.md`](../../resources/Claude/commands/init-claude-md.md) — the template and workflow
- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — the precursor: gather context before writing it down
- [`resources/Claude/commands/explain.md`](../../resources/Claude/commands/explain.md) — how a well-contexted project responds to "what does this do?"
- [`resources/Claude/ClaudeCode.md`](../../resources/Claude/ClaudeCode.md) — where custom commands live

## Notes for the Speaker (Chris)

- Resist the urge to go deep on any one file type. This is breadth. Part 2 is where they actually write one.
- The sample project for the demo should be **small and familiar** (a church directory, a volunteer signup). Avoid anything that sparks a side conversation about business logic.
- End 2 minutes early so the lunch break doesn't get squeezed.
- Starter deck: [`starter.pptx`](./starter.pptx)
