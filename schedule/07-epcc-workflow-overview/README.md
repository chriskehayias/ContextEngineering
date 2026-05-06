# 07 · The Context Engineering Loop — Overview

**Day 1 · 3:50 – 4:20 PM · 30 min** · Speaker: **Chris Kehayias**

> **Explore · Plan · Code · Commit** — the loop Anthropic teaches, the loop you'll practice tomorrow, and the antidote to one-shotting.

---

## Session Goal

Attendees leave able to name the four phases, say what each one produces, and point to the Claude Code commands that support it — so tomorrow's Build Blocks feel like *practicing a loop they already understand* rather than improvising.

The deeper goal: **stop one-shotting.** Everything in this session serves that.

This is also where the Ten Commandments stop being a poster and become a workflow. Five commandments map directly onto phases of the loop — call them out by number as you walk the table.

## Why This Loop

This is the loop documented in Anthropic's Claude Code best practices. We're using it because:

- It's what your attendees will see in the docs the moment they go home and search.
- It's only four words, all verbs, all pronounceable.
- Half the phases (Explore, Plan) are the ones people skip — naming them out loud makes skipping harder.

A note on stretch: Anthropic uses **Commit** narrowly to mean *git commit*. We're stretching it to cover deploy and stakeholder comms — everything that turns working code into shipped value. Call this stretch out in the session so the devs in the room don't catch it as a gotcha.

## Outline

1. **Why a loop at all?** — 3 min
   - Without one, every feature feels like starting from scratch.
   - One-shotting is the default failure mode. The loop is the cure.
2. **Walk each phase** — 16 min
   - The question it answers · what it produces · the command that helps
   - Pin commandments to the relevant phases as we go (I, IV, VI, VII, IX)
3. **Which phases for which change?** — 5 min
   - Not every change needs the full loop. A typo fix is mostly Code + Commit. A new feature needs all four.
4. **Preview Day 2** — 5 min
   - Build Block 1 = Explore + Plan (the 105 minutes that feel slow on purpose)
   - Build Block 2 = Code (the inner loop: write, review, test, debug)
   - Deploy block = Commit
5. **Q&A** — 1 min

## The Four Phases

| Phase | The question it answers | What it produces | Commands that help | Commandments in play |
|---|---|---|---|---|
| **Explore** | *What already exists?* | A grounded sense of the codebase, conventions, and constraints — and an updated `CLAUDE.md` if anything was missing | [`/project:project-overview`](../../resources/Claude/commands/project-overview.md), reading `CLAUDE.md` | **IV** — dispatch subagents for context-polluting search |
| **Plan** | *What am I building and why?* | Requirements, architecture notes, data model, acceptance criteria | [`/project:init-claude-md`](../../resources/Claude/commands/init-claude-md.md) | **I** — Plan Mode before edits; `Shift+Tab` is thy staff |
| **Code** | *Does it work — really?* | Working code that's been reviewed, tested, and debugged against real failure modes | [`/project:review`](../../resources/Claude/commands/review.md), [`/project:gen-tests`](../../resources/Claude/commands/gen-tests.md), [`/project:explain-error`](../../resources/Claude/commands/explain-error.md) | **VII** — ritual = slash command · **IX** — read the diff |
| **Commit** | *Can I ship it and explain it?* | A live URL, a clean git history, and a plain-language changelog non-technical stakeholders can read | [`/project:summarize-changes`](../../resources/Claude/commands/summarize-changes.md), deploy (covered in [Session 13](../13-deploying-to-vercel/README.md)) | **VI** — `/clear` before the next loop |

## Talking Points

- **The hallway questions are "Did you Explore? Did you Plan?"** — and they're two different questions. Explore-skipping means "I didn't read the existing code before asking Claude to add to it." Plan-skipping means "I didn't write down what I was building before I started building it." Both produce one-shot disasters, but for different reasons.
- **This is a loop, not a waterfall.** You return to Plan every time Code surfaces something the plan missed. You return to Explore every time Plan reveals you don't actually understand what's there. Between loops: **Commandment VI — `/clear` is a sacrament.** A fresh window is a righteous window.
- **Code is the inner loop.** Write → review → test → debug → repeat until it actually works. The commands inside Code are designed to be run repeatedly, not once. **Commandment IX** lives here: *trust the plan, verify the patch.*
- **The glue across all four phases is shared context.** The `CLAUDE.md` you wrote this afternoon is what makes every command in every phase smarter.
- **Plan is the phase people skip and regret.** Day 2's first 105 minutes are literally Explore and Plan on purpose — the two phases that feel like "not building yet" and are actually where the building happens. **Commandment I** — `Shift+Tab` into Plan Mode before you edit.
- **The command column is a starting point, not a rule.** You'll develop your own moves — and when you do, **Commandment VII** says enshrine them in `.claude/commands/`.

## When to Use Which Phases

Not every change needs all four. A rough guide:

- **Typo, copy tweak, one-line fix** → Code + Commit
- **Bug fix in code you wrote yesterday** → Plan (briefly) + Code + Commit
- **Bug fix in code you didn't write** → Explore + Plan + Code + Commit
- **New feature** → All four, in full
- **Anything you'd describe as "just quickly..."** → Probably needs Explore. That's usually where "just quickly" goes wrong.

## Proposed Slides

Target: ~10 slides for 30 min. The four-phase table is the centerpiece — print/photograph slide.

1. **Title** — *The Context Engineering Loop · Explore · Plan · Code · Commit*
2. **Why a loop at all?** — one slide: *"One-shotting is the default failure mode. The loop is the cure."*
3. **The loop diagram** — four phases in a circle, arrows between, `CLAUDE.md` in the middle as the glue
4. **Phase 1 · Explore** — question / produces / commands · **Commandment IV** in the corner
5. **Phase 2 · Plan** — question / produces / commands · **Commandment I** in the corner (`Shift+Tab`)
6. **Phase 3 · Code (the inner loop)** — write → review → test → debug · **Commandments VII and IX** in the corner
7. **Phase 4 · Commit** — question / produces / commands · note the stretch (deploy + comms) · **Commandment VI** in the corner (`/clear` before the next loop)
8. **The four-phase reference table** — full table from this README, photographable. Build as a two-step: first show [`resources/images/TenCommandments.png`](../../resources/images/TenCommandments.png) with commandments **I, IV, VI, VII, IX** highlighted (the five that map onto EPCC); then dissolve to the four-phase table with those commandments pinned to their phases.
9. **Which phases for which change?** — the rough guide, with the *"just quickly..."* punchline
10. **Tomorrow you run this loop end-to-end** — Build Block 1 (Explore + Plan) · Build Block 2 (Code) · Deploy (Commit)

## Resources

- [`resources/Claude/commands/README.md`](../../resources/Claude/commands/README.md) — the full command table
- All individual command docs linked in the table above
- Anthropic's [Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) — the source for Explore → Plan → Code → Commit

## Notes for the Speaker (Chris)

- 30 minutes is tight. **Do not** live-demo every command — name them, link them, move on.
- Print or project the phase table. People will want to photograph it.
- **Acknowledge the Commit stretch** out loud, briefly. One sentence: "Anthropic uses Commit to mean git commit; we're using it to cover deploy and comms too." The devs in the room will respect the honesty more than they'll mind the stretch.
- **Lean on the two hallway questions.** "Did you Explore? Did you Plan?" should be the line people remember when they're stuck tomorrow.
- Pin commandments to phases verbally as you walk the table — don't lecture all ten; just the five that matter for the loop (I, IV, VI, VII, IX).
- End with a tee-up to the Innovation Panel: "tomorrow you'll actually run this loop end-to-end."
- Starter deck: [`starter.pptx`](./starter.pptx)
