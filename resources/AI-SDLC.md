# The AI-First SDLC

The same six phases from [SDLC.md](SDLC.md) — **Plan → Design → Build → Test → Ship → Maintain** — rebuilt around an AI collaborator (specifically [Claude Code](Claude/ClaudeCode.md)) sitting alongside you in every phase. This is the workflow you'll actually use after this conference.

> **Heads up for teams of one:** AI levels the playing field for solo devs more than any tool in the last 20 years. A single person can credibly ship what used to take a small team — *if* they treat Claude as a disciplined collaborator instead of a magic 8-ball.

---

## What changes when AI joins the loop?

The phases don't change. What changes is the **density of iteration inside each phase** and **how much context you carry between them**.

A solo dev with Claude Code can:

- Plan, prototype, and abandon three approaches in the time it used to take to start one
- Have a reviewer, tester, and rubber-duck on call 24/7
- Move work between phases without losing the thread — Claude remembers what you were doing

The cost: **bad context in = bad code out.** Most AI-augmented failures are not "the model is wrong" — they're "the model didn't have what it needed." That's why this conference is called **Context Engineering**.

---

## Cross-Cutting Principles

Five habits that run through every phase. Master these and the rest follows.

### 1. Context engineering

The model only knows what you give it. Curate context deliberately: a `CLAUDE.md` for project conventions, the right files in scope, and the right scope of task. (See the [architecture starters](architecture/README.md) for ready-to-paste `CLAUDE.md` templates.)

### 2. Plan before you generate

Always ask Claude to *plan* before it *writes code*. The plan is cheap; the code is expensive — in tokens, in context, and in your time reviewing it. Approve the plan, then build.

### 3. Verify, don't trust

Claude will produce code that *looks right* and *runs* but is subtly wrong. Run it. Read the diff. Test it. Verification is your job — it cannot be delegated to the thing that wrote the code.

### 4. Atomic prompts → atomic commits

One change per prompt. One change per commit. When the prompt sprawls (*"…also fix the header and update the deps"*), the diff sprawls, and you can't review or revert cleanly.

### 5. Use the right tool for the right scope

- **Inline edits** for tiny tweaks
- **Chat** for explanation and exploration
- **Agents** for parallel, isolated work — often in a [worktree](Git/git.md#worktrees)
- **Slash commands** for repeated rituals: [`/project:review`](Claude/commands/review.md), [`/project:explain-error`](Claude/commands/explain-error.md), [`/project:gen-tests`](Claude/commands/gen-tests.md)

---

## Phase 1: Plan (AI-augmented)

Plan *with* the AI, not just *for* it.

### What changes

- You stop staring at a blank page. Claude is your rubber duck, your prior-art search, your devil's advocate.
- You can have **2–3 plans drafted** in the time it used to take to write one — then pick the best.
- The plan becomes a real artifact — saved as a markdown doc the model can re-read every time it picks up the thread.

### How to do it

1. Describe the problem to Claude in plain language. Include constraints, non-goals, and the smallest acceptable win.
2. Ask for **2–3 approaches** with trade-offs and the riskiest unknown for each.
3. Pick one. Ask Claude to write it as a plan you can both refer back to (a `PLAN.md`, a GitHub issue, or a comment in the codebase).
4. Use **Plan Mode** (`Shift+Tab` in Claude Code) when you want the model to *think* without editing files.

### Ask Claude Code

- *"I want to add password reset. Constraints: [...]. Propose 2–3 approaches with trade-offs and pick the simplest one that meets the requirements."*
- *"Read the existing auth code and tell me which approach fits best with what's already here."*
- *"Turn our discussion into a `PLAN.md` I can reopen tomorrow without losing the thread."*

### Watch out for

- **Skipping the plan because Claude can "just code it."** You're trading 5 minutes of planning for 30 minutes of unwinding the wrong direction.
- **Letting Claude plan in a vacuum.** Always feed it the relevant existing files first — otherwise it will invent a structure that doesn't match your codebase.

---

## Phase 2: Design (AI-augmented)

Sketch the technical shape *with* the model — and shop multiple options before committing.

### What changes

- You can have Claude propose a data model, an API surface, or a component hierarchy in seconds — and **compare 2–3 alternatives side by side**.
- Architecture Decision Records (ADRs) write themselves from the conversation that produced the decision.
- The model can read your existing codebase and propose a design that *fits what's already there*, not an idealized greenfield design.

### How to do it

1. After approving the plan, ask Claude to propose **2–3 designs** for *how* to build it. Each one should include data model, interfaces, and where the new code fits in the existing structure.
2. Push back. Ask *"what breaks if we get 10× the load?"* or *"what's the migration path if we change our mind in 3 months?"*
3. Pick a design. Capture it in a `DESIGN.md`, an ADR, or a comment in the relevant file.
4. Have Claude generate **stubs** from the design — empty route handlers, type definitions, schema files — before any logic.

### Ask Claude Code

- *"Read the existing auth code. Propose 3 ways to add password reset, each with a data model and an API surface. Rank them by how well they fit the current codebase."*
- *"Write an ADR for the design we just settled on, including the alternatives we rejected and why."*
- *"Generate type definitions and route stubs for this design — no logic yet, just the shape."*

### Watch out for

- **Letting Claude design in a vacuum.** It will invent abstractions that don't match your codebase if you don't show it the codebase first.
- **Accepting the first design.** The whole point of using AI here is that *more options are now cheap*. Always ask for alternatives.
- **Over-architecting.** Claude can produce enterprise-grade designs for trivial problems. Push back toward the simplest thing that meets the plan.

---

## Phase 3: Build (AI-augmented)

Generate, review, edit, commit — tightly.

### What changes

- The "blank screen" cost is gone. You're editing and steering, not typing from zero.
- You can build in **parallel** — one Claude session in a worktree on `feature-a`, another on `feature-b`, with no context pollution between them. (See [worktrees](Git/git.md#worktrees).)
- Atomic commits become *easier*, not harder, because the AI can split a tangled diff into clean commits on demand.

### How to do it

1. Approve the plan from Phase 1, then ask Claude to implement **one slice** of it.
2. Read the diff before accepting. Every line.
3. Commit atomically. Ask Claude to draft commit messages, or run a `/commit` command if you've installed one.
4. For independent slices, spin up an isolated agent in a worktree so the contexts don't pollute each other.

### Tools

- Claude Code in VS Code (see [VSCode.md](VSCode.md))
- [`/project:explain`](Claude/commands/explain.md) — understand unfamiliar code in your own project
- [`/project:explain-error`](Claude/commands/explain-error.md) — when the terminal yells at you
- Subagents for parallel research/implementation
- Worktrees + agents for true parallelism

### Ask Claude Code

- *"Implement the first slice of the plan: just the route handler and a stub for the email send. No UI yet."*
- *"Stage only the changes related to the route handler and commit them with a clear message. Leave the UI changes unstaged."*
- *"Spin up two worktrees — one on `feature-pw-reset` and one on `feature-email-templates` — and start a separate agent in each."*

### Watch out for

- **Accepting code you haven't read.** The diff is the *real* output, not the chat message.
- **Mega-prompts** that ask for "the whole feature." Slice it.
- **Context drift.** A 3-hour Claude session may have lost track of the original plan — start fresh and re-feed context if the model seems lost.

---

## Phase 4: Test (AI-augmented)

Generate the tests *and* the adversarial cases you wouldn't have thought of.

### What changes

- Writing test scaffolding is no longer the friction it used to be. Boilerplate is free.
- Claude is **much better than humans at brainstorming edge cases.** Ask for them explicitly *before* writing tests.
- "Run the test suite, fix the failures, re-run" is one prompt — but **you still verify** the fix is real, not a test rewritten to pass.

### How to do it

1. Implement the feature (Phase 2).
2. Ask Claude to brainstorm edge cases *before* writing tests: empty inputs, max length, concurrency, network failure, malformed data, the user clicking the button twice.
3. Generate tests for both the happy path and those edge cases.
4. Run them. If they fail, **read the failure before asking Claude to fix it.**

### Ask Claude Code

- *"Brainstorm 10 edge cases for the password reset flow before writing any tests. Group them by category."*
- *"Generate unit tests for the route handler covering the happy path plus the edge cases we just listed."*
- *"The test on line 34 fails. Show me actual vs. expected and explain the failure before proposing a fix."*

Built-in slash command:

- [`/project:gen-tests <file>`](Claude/commands/gen-tests.md) — convention-aware test generation for a specific file.

### Watch out for

- **Letting Claude "fix" a failing test by softening the assertion.** Always read what it changed.
- **100% coverage of the happy path and 0% of the edge cases.** Coverage is not correctness.
- **Testing the AI's interpretation of the spec instead of the spec.** Re-read the plan; do the tests prove *that*?

---

## Phase 5: Ship (AI-augmented)

The deploy itself is unchanged. The pre-flight check is dramatically faster.

### What changes

- Code review happens in seconds, not days. Use it on yourself before merging.
- Security review is no longer a "we'll do it later" item — it's a slash command.
- Release notes write themselves from the diff.

### How to do it

1. Open the PR — even solo. (See [PRs](Git/git.md#pull-requests-prs) for why.)
2. Run [`/project:review`](Claude/commands/review.md) for a structured code review.
3. Run `/security-review` (built-in skill) for a focused vulnerability scan.
4. Ask Claude to draft release notes from the PR diff.
5. Merge, deploy, and **watch the deploy land.**

### Ask Claude Code

- *"Review the diff on this PR. Flag bugs, edge cases, security issues, and anything that contradicts the plan."*
- *"Generate release notes from the commits on this branch — user-facing language, not engineering jargon."*
- *"After this merges and deploys, what should I be watching in the error tracker for the first hour?"*

Built-in commands:

- [`/project:review`](Claude/commands/review.md) — structured code review
- `/security-review` — focused security scan of pending changes
- [`/project:summarize-changes`](Claude/commands/summarize-changes.md) — stakeholder-friendly changelog from git history

### Watch out for

- **Skipping the human review because the AI review passed.** The AI catches different things than you do — both are needed.
- **Auto-merging on AI approval alone.** AI review is a *layer*, not the final gate.

---

## Phase 6: Maintain (AI-augmented)

The phase where AI quietly transforms the most thankless work.

### What changes

- A stack trace pasted into Claude is a 30-second triage instead of a 30-minute investigation.
- Dependency updates can be batched and reviewed in one pass.
- Old code becomes legible: paste a file, ask *"what does this do and why,"* and you have a starting point.
- Bug reports become reproducible quickly — Claude can write a failing test from a user description.

### How to do it

- **User reports a bug:** feed Claude the report + relevant files; ask it to propose a **reproduction** before a fix.
- **Error tracker fires:** paste the trace; ask for hypotheses ranked by likelihood + the smallest diagnostic step.
- **Dependency updates:** ask Claude to summarize changelogs and flag breaking changes specific to *your* usage.
- **"Why does this exist":** [`/project:explain`](Claude/commands/explain.md) on the file or function.

### Ask Claude Code

- *"User reports: 'reset password email never arrives.' Read the auth code, propose 3 hypotheses ranked by likelihood, and tell me what to check first."*
- *"Here's the stack trace from production. Find the file, explain the failure, and propose the smallest fix."*
- *"Summarize the breaking changes in the React 19 → 20 upgrade as they apply to *our* codebase."*

Built-in command:

- [`/project:explain-error`](Claude/commands/explain-error.md) — the friend you want when a terminal yells at you.

### Watch out for

- **"Claude said it's fixed"** without verifying in prod. Maintenance bugs hide in environment-specific behavior the model can't see.
- **Auto-applying dependency updates** without reading the changelogs. AI summary helps; it doesn't substitute.

---

## The Loop, Compressed

Same loop. Faster wheels.

```
   Plan      ←  AI as rubber duck, prior-art search, plan drafter
    ↓
   Design    ←  AI as alternatives generator, ADR writer, stub scaffolder
    ↓
   Build     ←  AI as pair programmer, parallel agents in worktrees
    ↓
   Test      ←  AI as edge-case generator, scaffolding writer
    ↓
   Ship      ←  AI as code reviewer, security scanner, release-notes writer
    ↓
   Maintain  ←  AI as triager, log reader, legibility tool
    │
    └──────────────────────→  back to Plan
```

The phases didn't change. The **cycle time** did — by 5–10×. Which means the discipline of moving cleanly between phases matters *more*, not less.

---

## A Note on the Name

We call this skill **Context Engineering** — not "AI coding" or "vibe coding" — deliberately. The thing that separates a productive AI-augmented developer from a frustrated one is the ability to engineer the right context into every prompt: the right files in scope, the right plan in front of the model, the right constraints in the system prompt, the right scope per session.

The 5 phases above are mostly about **when** to give Claude **what** context. That's the whole game.

---

## Further Reading

- [SDLC.md](SDLC.md) — the AI-free version of this doc, for comparison
- [Claude Code reference](Claude/ClaudeCode.md) — the cheat sheet for daily use
- [Slash commands](Claude/commands/README.md) — `/project:review`, `/project:explain-error`, `/project:gen-tests`, and friends
- [Architecture starters](architecture/README.md) — `CLAUDE.md` templates so context engineering starts on day one
- [Git & GitHub for Beginners](Git/git.md) — version control underpins every phase, with or without AI
