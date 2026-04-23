# 03 · SDLC Crash Course

**Day 1 · 10:30 – 11:30 AM · 60 min** · Speaker: **Chris Kehayias**

> Just enough git, VS Code, and terminal to participate confidently through Day 2.

---

## Session Goal

By the end, every attendee can **open a repo in VS Code, make a commit, and push to GitHub** without external help.

## Outline

1. **The terminal, without the panic** — 10 min
   - `pwd`, `cd`, `ls`, opening a folder, how to read an error
2. **Git mental model** — 15 min
   - Working tree → staging → commit → branch → remote
   - The only 6 commands you need today: `status`, `add`, `commit`, `push`, `pull`, `checkout`
3. **VS Code tour** — 10 min
   - File explorer, integrated terminal, source control panel, extensions (from [VSCode.md](../../resources/VSCode.md))
4. **GitHub basics** — 10 min
   - Personal account vs. org, the `gh` CLI, viewing a PR
5. **Live practice** — 15 min
   - Clone this workshop repo, open it in VS Code, edit a file, commit, push

## Talking Points

- Git is about **snapshots**, not "saving." Every commit is a checkpoint you can return to.
- The terminal is a conversation — it tells you exactly what's wrong if you read the whole message.
- When an error scares you, use [`/project:explain-error`](../../resources/Claude/commands/explain-error.md). It's built for exactly this moment.
- **GitLens** and **Peacock** (see [VSCode.md](../../resources/VSCode.md)) aren't nice-to-have; they keep you oriented when you have 3 repos open later today.
- Commit messages are a context document you're writing for **future you**. Spend 10 extra seconds on them.

## Hands-On / Exercises

1. Clone this repo: `git clone <repo-url>`
2. Open it in VS Code: `code .`
3. Edit `schedule/03-sdlc-crash-course/attendees.md` — add your name on a new line
4. Commit and push: use the VS Code source control panel *and* the terminal, once each
5. Verify on github.com that your commit landed

## Resources

- [`resources/VSCode.md`](../../resources/VSCode.md) — extension installs (Prettier, GitLens, Peacock, Live Server, Claude Code for VS Code)
- [`resources/Claude/commands/explain-error.md`](../../resources/Claude/commands/explain-error.md) — the friend you want when a terminal yells at you
- Prereqs [§2 Git](../../_requirements/README.md), [§4 VS Code](../../_requirements/README.md), [§7 GitHub CLI](../../_requirements/README.md)

## Prerequisites Referenced

- Git installed and configured with name/email (prereqs §2)
- VS Code installed with the Claude Code extension (prereqs §4)
- `gh auth status` passing (prereqs §7)

## Notes for the Speaker (Chris)

- This is the **highest-risk session of Day 1** — if attendees fall behind here, they stay behind all day.
- Keep slides minimal. Do every command live, big font, slow.
- The schedule README flags this as maybe needing 90 min — watch the room at the 45-min mark. If half the room isn't through `git commit`, slow down and steal time from the demo portion.
- Have a TA roam the room during the hands-on segment.
- Starter deck: [`starter.pptx`](./starter.pptx)
