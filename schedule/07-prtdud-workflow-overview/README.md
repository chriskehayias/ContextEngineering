# 07 · The PRTDUD Workflow — Overview

**Day 1 · 3:50 – 4:20 PM · 30 min** · Speaker: **Chris Kehayias**

> **P**lan · **R**eview · **T**est · **D**ebug · **U**pdate · **D**eploy — the core loop you'll practice tomorrow.

---

## Session Goal

Attendees can name each phase of PRTDUD, what it produces, and which Claude Code command supports it — so tomorrow's Build Blocks don't feel improvised.

## Outline

1. **Why a workflow at all?** — 3 min
   - Without one, every feature feels like starting from scratch
2. **Walk each phase** — 18 min
   - What it produces · When to use it · The command that helps
3. **When to use which phase** — 5 min
   - Not every change needs all six — picking the right subset
4. **Preview Day 2** — 3 min
   - Build Block 1 = P + R; Build Block 2 = T + D + U; deploy block = Dep
5. **Q&A** — 1 min

## The Six Phases

| Phase | What it produces | Command |
|---|---|---|
| **Plan** | Requirements doc, architecture notes, data model | [`/project:init-claude-md`](../../resources/Claude/commands/init-claude-md.md), [`/project:project-overview`](../../resources/Claude/commands/project-overview.md) |
| **Review** | Structured critique: strengths, issues (CRITICAL/WARNING/SUGGESTION), security, suggestions | [`/project:review`](../../resources/Claude/commands/review.md) |
| **Test** | Unit + edge case + error-path tests that match project conventions | [`/project:gen-tests`](../../resources/Claude/commands/gen-tests.md) |
| **Debug** | Plain-English error analysis + fix steps | [`/project:explain-error`](../../resources/Claude/commands/explain-error.md) |
| **Update** | Plain-language changelog for non-technical stakeholders | [`/project:summarize-changes`](../../resources/Claude/commands/summarize-changes.md) |
| **Deploy** | Live URL on Vercel | Covered in [Session 13](../13-deploying-to-vercel/README.md) |

## Talking Points

- PRTDUD isn't a waterfall. It's a **loop** — you return to Plan every time a Review surfaces something the plan missed.
- The glue across all six phases is **shared context**. The `CLAUDE.md` you wrote this afternoon is what makes every one of these commands smarter.
- **Plan is the phase people skip and regret.** Day 2's first 105 minutes are literally just planning on purpose.
- The command column isn't a rule — it's a starting point. You'll develop your own moves.

## Resources

- [`resources/Claude/commands/README.md`](../../resources/Claude/commands/README.md) — the full command table
- All individual command docs linked in the table above

## Notes for the Speaker (Chris)

- 30 minutes is tight. **Do not** live-demo every command — name them, link them, move on.
- Print or project the phase table. People will want to photograph it.
- End with a tee-up to the Innovation Panel: "tomorrow you'll actually run this loop end-to-end."
- Starter deck: [`starter.pptx`](./starter.pptx)
