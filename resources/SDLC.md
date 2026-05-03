# The Software Development Lifecycle (SDLC)

A practical, no-jargon walkthrough of how software actually gets built — framed for **solo developers** and **small teams**. We'll keep this version "AI-free" on purpose so the next document, [AI-SDLC.md](AI-SDLC.md), can show what changes when you add an AI collaborator to every phase.

> **Heads up for teams of one:** every phase below still applies when it's just you. The difference is that you wear all the hats. The discipline of *naming the phase you're in* matters more, not less, when there's no PM, QA, or release manager around to remind you.

---

## What is the SDLC?

The SDLC is the sequence of phases a piece of software moves through from "I have an idea" to "people are using it" — and the long tail after.

The classic textbook framing has 6–7 phases. For solo and small-team work we collapse it to 6:

```
   Plan  →  Design  →  Build  →  Test  →  Ship  →  Maintain  →  (loop)
```

It's a **loop, not a line**. You will pass through these phases dozens of times for the same product — once for each feature, bug fix, or experiment. Maintain feeds back into Plan; that's the whole job.

---

## Phase 1: Plan

What you're building, who it's for, and what "done" looks like.

### What happens here

- Capture the problem in plain language — *"users can't reset their password without emailing support"*
- Define a small acceptance criterion: what would prove this is solved?
- Sketch the smallest version that works (the **M** in MVP)
- Note constraints: deadlines, budgets, dependencies, things you can't break
- Write a **non-goals** list — what you're explicitly *not* doing this round

### Common artifacts

- A README, a GitHub issue, or a single-page Notion doc
- A rough sketch or wireframe (paper is fine)
- A short list of acceptance criteria you can later test against

### Solo vs. Small Team

- **Solo:** The biggest planning failure is skipping it. *"I'll figure it out as I code"* is how a 2-day feature becomes a 2-week swamp. Even a 4-line GitHub issue counts as a plan.
- **Small Team:** One short doc that everyone has read beats five meetings. Be ruthless about scope before anyone touches an editor.

### Watch out for

- **Planning to perfection.** Plans are guesses. Start building before the plan feels finished.
- **Skipping the non-goals list.** Without it, scope creeps silently and you never feel done.

---

## Phase 2: Design

How you're going to build it.

### What happens here

- Pick the technical approach: which framework, library, or pattern fits this problem
- Sketch the **data model** — tables, fields, relationships, document shapes
- Define the **interfaces**: API endpoints, function signatures, component boundaries
- Sketch the UI if there is one (paper, Figma, or just a reference to a component library)
- Identify **integration points**: third-party APIs, services, files this work touches

### Common artifacts

- A short design doc, ADR (Architecture Decision Record), or RFC — even a paragraph counts
- A data model diagram or schema file
- API or route stubs, even if empty
- A wireframe or low-fi UI sketch

### Solo vs. Small Team

- **Solo:** A 5-minute "back-of-the-napkin" design saves hours of mid-build pivoting. You don't need a polished doc — you need to have *thought it through* before opening your editor.
- **Small Team:** Get alignment on the design *before* anyone writes code. A 20-minute design conversation prevents two people from building incompatible halves of the same feature.

### Watch out for

- **Designing past the first version.** The shape of v1 will change once you start building. Don't pre-build for v3.
- **Skipping design because "the framework decides for you."** Frameworks decide *some* things; you still own data shape, error handling, and the user experience.

---

## Phase 3: Build

Translate the plan into running code.

### What happens here

- Cut a feature branch (see [Git & GitHub primer](Git/git.md#branching))
- Implement the smallest end-to-end slice that demonstrates the feature working
- Commit **atomically** as you go — one logical change per commit ([why](Git/git.md#atomic-commits))
- Refactor *as part of* the work, not in a separate "cleanup phase" later

### Tools

- An editor — VS Code with the [recommended extensions](VSCode.md)
- Git for version control
- Whatever framework or runtime your project uses

### Solo vs. Small Team

- **Solo:** Push to a branch and open a PR even if no one is reviewing it. The PR view forces you to read your own diff before shipping. (See [PRs](Git/git.md#pull-requests-prs) for why solo PRs are still worth it.)
- **Small Team:** PRs aren't optional — they're the primary collaboration surface. Keep them small enough that a teammate can review in 15 minutes.

### Watch out for

- **"Just one more refactor"** before shipping the first version. Ship the slice, then refactor.
- **Building things you have no test for.** If you can't say *how you'd verify it works*, you're not done planning.

---

## Phase 4: Test

Prove the thing works — and prove it didn't break anything else.

### What happens here

- Run the feature manually against the acceptance criterion from the Plan phase
- Run the existing test suite — nothing broken?
- Add tests for the new behavior (especially the edge cases you almost forgot)
- Test in something close to the real environment: preview deploy, staging, or local with prod-like data

### Levels of testing

- **Manual** — click through it yourself, like a user would
- **Unit tests** — verify individual functions in isolation
- **Integration tests** — verify components work together
- **End-to-end** — verify the full user journey from the outside

### Solo vs. Small Team

- **Solo:** You don't need 100% coverage, but you do need a test for **every bug you find**. Every bug is a hole in your test net — patch it once, never fall through again.
- **Small Team:** Agree on a minimum bar (e.g., *"new logic ships with at least one test"*) and enforce it in PR review.

### Watch out for

- **Testing only the happy path.** Real bugs live in empty inputs, network failures, and the boundary between two systems.
- **Skipping the manual click-through because the unit tests pass.** Tests verify *code*; you verify the *feature*.

---

## Phase 5: Ship

Get it in front of real users.

### What happens here

- Merge to `main` — squash-merge keeps history clean (see [merging](Git/git.md#merging))
- Deploy: manually, or — ideally — via CI/CD
- Announce it lightly: changelog, release notes, a one-line message
- **Watch the deploy land.** Don't merge and walk away.

### Tools

- A host with preview deploys (Vercel, Netlify, Render, Fly.io — see [Cloud Providers](CloudProviders.md))
- A simple CI pipeline that runs tests on every PR
- An error tracker (Sentry, Logtail, etc.) — you need to know when prod breaks before users tell you

### Solo vs. Small Team

- **Solo:** Automate the deploy from day one. *"I'll set up CI later"* almost never happens, and manual deploys at 11pm are how prod incidents start.
- **Small Team:** Pick a deploy cadence (continuous, daily, weekly) and make it boring. Surprise deploys are the dangerous ones.

### Watch out for

- **Shipping on a Friday afternoon.** If something breaks, you're debugging instead of weekending.
- **No rollback plan.** Know how you'd undo this deploy *before* you press go.

---

## Phase 6: Maintain

The phase that's longer than all the others combined.

### What happens here

- Watch the error tracker, logs, and analytics — what's actually happening in prod?
- Triage incoming bugs and feature requests as GitHub issues (see [Issues](Git/git.md#github-issues))
- Patch security vulnerabilities and dependency updates
- Decide what's next — which feeds straight back into **Plan**

### What "good" maintenance looks like

- Bugs get **reproduced** before they're "fixed"
- Every fix has a test that would have caught it
- Dependencies are updated regularly, not in panicked batches every 18 months
- Logs and metrics are *read*, not just *collected*

### Solo vs. Small Team

- **Solo:** This phase quietly eats most projects. Set a recurring time — one afternoon a week — for maintenance, or it slips until prod is on fire.
- **Small Team:** Have someone "on call" — even informally — so a single person owns prod health each week. Rotate it so no one burns out.

### Watch out for

- **Treating maintenance as lower-status than feature work.** The next user you lose is more likely lost to a bug than to a missing feature.
- **Letting the issue tracker grow unbounded.** If a bug isn't worth fixing, close it; if it is, prioritize it.

---

## The Loop

The six phases aren't a one-shot. Every feature, every bug fix, every refactor is its own pass through:

```
       ┌─────────────────────────────────────────────┐
       ↓                                             │
     Plan  →  Design  →  Build  →  Test  →  Ship  →  Maintain
```

Most of your career is spent in **Maintain feeding back into Plan** — and that's *the work*, not a distraction from it.

---

## Further Reading

- [AI-SDLC.md](AI-SDLC.md) — the same five phases, rebuilt for AI-augmented work
- [Git & GitHub for Beginners](Git/git.md) — version control underpins every phase from Build onward
- [VSCode Suggested Extensions](VSCode.md) — your build environment
- [Cloud Providers & Services](CloudProviders.md) — the infrastructure for Ship and Maintain
