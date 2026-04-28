# <img src="../images/git.svg" width="28" alt="Git"> Git & <img src="../images/github.svg" width="28" alt="GitHub"> GitHub for Beginners

A take-home reference for the core Git and GitHub concepts we touched on during the conference. This is not a deep dive — it's the *working mental model* plus the commands (both raw Git and Claude Code prompts) you'll reach for most often.

> **Heads up for teams of one:** most Git tutorials assume a team of collaborators. If you're the only person on your project, some of the ceremony below is optional — but the habits still matter. We'll call out **Solo** vs. **Team** recommendations throughout.

---

## What is Git?

Git is a **version control system** — it tracks every change you make to your code over time. Think of it as an unlimited undo history for your entire project, with the ability to branch off in different directions and merge those directions back together.

**GitHub** is a hosting service for Git repositories. It adds collaboration features on top of Git: pull requests, issues, code review, CI/CD, and a web UI for browsing your code.

- **Git** = the tool (runs on your machine)
- **GitHub** = the place your code lives online

---

## Atomic Commits

A **commit** is a snapshot of your project at a point in time. An **atomic commit** is a snapshot that represents *one* logical change — nothing more, nothing less.

**A good atomic commit:**
- Does one thing and does it well (e.g., "Fix login validation bug")
- Can be described in a single sentence without using the word "and"
- Can be reverted on its own without breaking unrelated features
- Has a clear, descriptive message

**A bad commit:**
- "Updated stuff" (what stuff?)
- "Fix login bug AND refactor header AND update dependencies" (three commits in a trench coat)
- "WIP" as a permanent message

### Why it matters

- **Debugging:** `git blame` and `git bisect` pinpoint *which* commit broke something. If that commit touched 14 unrelated files, good luck.
- **Review:** Small commits are easier to read and review than a 2,000-line mega-commit.
- **Revert:** Need to undo just the login fix without losing your header refactor? Atomic commits make that trivial.

### Solo vs. Team

- **Solo:** Still worth doing — *future you* reading your own git history in six months is essentially a teammate who has forgotten everything.
- **Team:** Non-negotiable. Your teammates are relying on a clean history to understand the project.

### Commands

```bash
# See what's changed
git status

# Stage specific files for commit (preferred over `git add .`)
git add src/auth/login.ts

# Commit with a message
git commit -m "Fix login validation to trim whitespace from email"

# See recent commits
git log --oneline -10
```

### Ask Claude Code

Natural-language prompts — Claude Code will run the commands for you:

- *"Show me what's changed and group the changes into logical atomic commits. Propose commit messages for each group."*
- *"Stage only the files related to the login fix and commit them with a clear message."*
- *"Review my last 5 commits and tell me if any should have been split into smaller commits."*

Built-in slash command:

- `/commit` (if configured) — Claude will analyze staged/unstaged changes, draft a message, and create the commit.

---

## Branching

A **branch** is an independent line of development. It lets you work on a new feature or experiment without touching the stable version of your code.

The default branch is usually called `main` (or `master` in older repos). New work typically happens on a **feature branch** that you create off of `main`.

```
main      ●─────●─────●─────●─────●
                 \           /
feature-login     ●───●───●─/
```

### Why it matters

- **Isolation:** Experiments and half-finished work don't break `main`.
- **Parallel work:** Multiple features can be in flight at once without collisions.
- **Preview deployments:** Hosts like Vercel deploy every branch to its own URL — you can test a feature branch live before merging it into production.

### Solo vs. Team

- **Solo:** Still branch. The Vercel preview URL alone is worth it — you can point a friend or a stakeholder at `feature-login.vercel.app` while `main` stays on your production domain.
- **Team:** Absolutely branch. Committing directly to `main` is a fast way to lose friends.

### Commands

```bash
# Create and switch to a new branch
git checkout -b feature-login

# List branches (current one has a *)
git branch

# Switch to an existing branch
git checkout main

# Push your branch to GitHub (the `-u` sets upstream so future pushes are just `git push`)
git push -u origin feature-login

# Delete a local branch after it's merged
git branch -d feature-login
```

### Ask Claude Code

- *"Create a new branch called `feature-dark-mode` off of main and switch to it."*
- *"I'm about to start working on the login refactor — set up a branch for it."*
- *"List all my local branches and tell me which ones have already been merged to main so I can clean them up."*

---

## Pull Requests (PRs)

A **Pull Request** is a GitHub feature for proposing that the changes on your branch be merged into another branch (usually `main`). It's the unit of code review and the moment your work gets a second look before becoming part of the official history.

A PR bundles:
- The branch you're merging *from* and the branch you're merging *into*
- A title and description (what and why)
- The diff of all your changes
- A space for review comments, discussion, and CI/CD status checks

### Why it matters

- **Review:** A teammate reads your changes and catches bugs, design issues, or better approaches before the code lands.
- **CI checks:** Tests, linting, and builds run automatically on every PR. If they fail, you know before merging.
- **Preview deploys:** Vercel (and similar hosts) post a link to a live preview of your branch directly in the PR — so you can click through and test the actual feature before approving the merge.
- **History:** The PR description becomes permanent documentation of *why* a change was made.

### Solo vs. Team

- **Solo:** Still open PRs to yourself. It sounds silly, but the workflow forces you to:
  1. Actually review your own diff before shipping (you'll catch embarrassing mistakes)
  2. Wait for CI to pass
  3. Click through the Vercel preview URL and smoke-test the feature in a prod-like environment *before* it hits your real production domain
- **Team:** PRs are the center of your workflow. Require at least one approval before merging, and never approve your own PR.

### Commands

Git doesn't have a `pull-request` command natively — PRs are a GitHub concept. Use the `gh` CLI (GitHub's official command-line tool):

```bash
# Install gh: https://cli.github.com

# Push your branch and open a PR in one flow
git push -u origin feature-login
gh pr create --title "Add email validation to login" --body "Trims whitespace and validates format before submit."

# See the status of your current PR (CI checks, reviews, etc.)
gh pr status

# Check out someone else's PR locally to test it
gh pr checkout 42

# Open the PR in your browser
gh pr view --web
```

### Ask Claude Code

- *"Push my current branch and open a pull request. Write a good title and description based on the commits on this branch."*
- *"What's the status of my open PRs? Are any waiting on me?"*
- *"Check out PR #42 locally so I can test it."*
- *"Open the current PR in my browser."*

---

## Merging

**Merging** is the act of combining the commits from one branch into another. Typically this happens when a PR is approved — GitHub merges your feature branch into `main`.

Three common merge strategies on GitHub:

- **Merge commit** — Preserves your full branch history plus a "merge commit" showing when it joined `main`. Good for team projects where you want to see the shape of parallel work.
- **Squash and merge** — Collapses all commits on your branch into a single commit on `main`. Great when your branch has a lot of "fix typo" / "wip" commits you don't want polluting history.
- **Rebase and merge** — Replays your branch's commits on top of `main` without a merge commit. Keeps history linear.

### Solo vs. Team

- **Solo:** **Squash and merge** is usually the cleanest choice — your `main` history becomes one commit per feature.
- **Team:** Pick one strategy as a team and stick with it. Mixed strategies lead to a confusing history.

### Commands

```bash
# Merge feature-login into main (locally)
git checkout main
git pull                    # get latest main
git merge feature-login     # merge the branch in
git push                    # push the merge up

# In practice, most teams do this through the GitHub UI or gh CLI:
gh pr merge 42 --squash --delete-branch
```

### Ask Claude Code

- *"Merge my approved PR using squash-and-merge and delete the branch afterward."*
- *"Update my local main branch with the latest from GitHub."*
- *"I finished the login feature on `feature-login`. Walk me through merging it into main safely."*

---

## Code Reviews

A **code review** is when another person (or you, on a solo project) reads through a proposed change *before* it's merged. The reviewer leaves comments, asks questions, requests changes, or approves.

### What a good review looks for

- **Correctness** — does the code actually do what the PR claims?
- **Clarity** — would a new teammate be able to understand this in six months?
- **Edge cases** — what happens on empty input, network failure, or unexpected user behavior?
- **Security** — any obvious injection, auth, or data-exposure risks?
- **Tests** — is the new behavior covered?
- **Scope creep** — is the PR doing what it said it would, and nothing extra?

### Solo vs. Team

- **Solo:** Open the PR, walk away for 10 minutes, come back, and review your own diff as if a stranger wrote it. You *will* find things. You can also ask Claude Code to review it — a second set of eyes, even artificial ones, catches real bugs.
- **Team:** Review is the most valuable collaboration ritual you have. Be thorough, be kind, and assume the best of the author.

### Ask Claude Code

- *"Review my current PR. Point out any bugs, edge cases, security issues, or places where the code could be clearer."*
- *"Compare this branch against main and flag anything that looks risky before I merge."*
- *"Read through the diff on this PR and write a summary I can paste as a review comment."*

Built-in slash command:

- `/review` — runs a structured code review on the pending changes.
- `/security-review` — focused scan for security issues on the current branch.

---

## GitHub Issues

A **GitHub Issue** is a ticket attached to your repository — a place to track bugs, feature requests, questions, or TODOs. Issues are separate from PRs but often related (e.g., "this PR closes issue #42").

Each issue has:
- A title and description (Markdown-supported)
- Labels (`bug`, `enhancement`, `good first issue`, etc.)
- Assignees — who's working on it
- Comments for discussion
- A status (open or closed)

### Why it matters

- **Memory:** Your brain is not a bug tracker. Write it down.
- **Context:** When you fix a bug in a PR, linking to the issue (`Fixes #42`) preserves the *why* forever.
- **Planning:** Labels and milestones turn a pile of issues into a roadmap.

### Solo vs. Team

- **Solo:** Use issues as your personal TODO list for the project. It beats a scattered notes app because it lives right next to the code.
- **Team:** Issues are how work gets assigned, discussed, and tracked. Every non-trivial PR should reference an issue.

### Commands

```bash
# Create an issue from the terminal
gh issue create --title "Login breaks on empty email" --body "Steps: ..." --label bug

# List open issues
gh issue list

# View an issue in the browser
gh issue view 42 --web

# Close an issue
gh issue close 42
```

In a commit or PR description, writing `Fixes #42` or `Closes #42` will automatically close issue #42 when the PR merges.

### Ask Claude Code

- *"Create a GitHub issue for the login validation bug. Include steps to reproduce based on what we just debugged."*
- *"List all open issues labeled `bug` on this repo."*
- *"Read issue #42 and start working on a fix. Create a branch named after the issue."*

---

## Worktrees

A **worktree** is a second working directory attached to the same Git repository. Normally your repo has one working directory — the folder where you edit files. With worktrees, you can have multiple folders on disk, each checked out to a *different branch*, all sharing the same underlying Git history.

```
my-project/              ← main worktree, on `main`
my-project-feature-a/    ← worktree on `feature-a` branch
my-project-experiment/   ← worktree on `experiment` branch
```

You don't have to `git stash` your work, switch branches, and lose your editor state every time you want to jump between efforts. Each worktree is a fully independent checkout.

### Why worktrees are a Context Engineering superpower

When you're working with Claude Code, each session builds up a specific **context** — the files read, the direction you're exploring, the mental thread the model is following. Switching branches mid-session pollutes that context and forces Claude to re-orient.

Worktrees let you run **multiple Claude Code sessions in parallel**, each in its own directory, each on its own branch, each with its own clean context window:

- One session **planning** a refactor in `my-project-plan/` on a `planning` branch
- Another session **executing** a different feature in `my-project-feature/` on `feature-x`
- A third session running an **experimental direction** in `my-project-scratch/` on a throwaway branch — if it works, merge it; if not, delete the worktree and nothing is lost

No stashing. No branch switching. No agents stepping on each other's files. Each session stays focused on its one thing — which is the whole point of Context Engineering.

### Commands

```bash
# Create a new worktree at ../my-project-feature-a on a new branch
git worktree add ../my-project-feature-a -b feature-a

# Create a worktree on an existing branch
git worktree add ../my-project-review feature-login

# List all worktrees
git worktree list

# Remove a worktree (after you're done and the branch is merged/abandoned)
git worktree remove ../my-project-feature-a
```

### Ask Claude Code

- *"Set up a new worktree at `../myapp-experiment` on a new branch called `experiment-redis-cache` so I can try this idea without touching my current work."*
- *"List my existing worktrees and tell me which branches each one is on."*
- *"I'm done with the experiment — clean up the `../myapp-experiment` worktree and delete the branch."*
- *"I want to run two Claude Code sessions in parallel — one planning the auth refactor and one building the new settings page. Set up the worktrees and branches for both."*

Built-in slash command:

- `/loop` and the `Agent` tool with `isolation: "worktree"` — spin up isolated agent sessions that automatically work in a worktree, keeping your main checkout clean.

---

## Further Reading

- **Pro Git book** (free, official) — [https://git-scm.com/book](https://git-scm.com/book)
- **GitHub Docs** — [https://docs.github.com](https://docs.github.com)
- **GitHub CLI (`gh`)** — [https://cli.github.com](https://cli.github.com)
- **Git Worktrees reference** — [https://git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree)
