# 03 · SDLC Crash Course

**Day 1 · 10:30 – 11:30 AM · 60 min** · Speaker: **Chris Kehayias**

> The loop the work moves through, with and without AI — plus just enough git, VS Code, and terminal to keep up through Day 2.

---

## Session Goal

Two outcomes, in this order:

1. **Concepts:** every attendee can name the six SDLC phases and articulate one thing that changes per phase when AI joins the loop. They don't need to memorize either model — they need the *shape* in their head so the rest of the workshop has somewhere to land.
2. **Mechanics:** every attendee can **open a repo in VS Code, make a commit, and push to GitHub** without external help.

We're flying through both halves on purpose. The goal is to deliver the *concepts* — the depth lives in the take-home docs ([`SDLC.md`](../../resources/SDLC.md), [`AI-SDLC.md`](../../resources/AI-SDLC.md)) and in the rest of the workshop. If a slide doesn't earn its 60 seconds, it gets cut.

## Outline

1. **Traditional SDLC at 30,000 feet** — 8 min
   - The six-phase loop: Plan → Design → Build → Test → Ship → Maintain
   - Show the loop diagram once. Name each phase in one sentence. Move on.
   - Land the punchline: *"It's a loop, not a line. Maintain feeds back into Plan — that's the whole job."*
2. **The AI-SDLC overlay** — 7 min
   - Same loop, transformed. The phases don't change; the **density of iteration** and **carry-over of context** do.
   - Walk the five cross-cutting principles from [`AI-SDLC.md`](../../resources/AI-SDLC.md): context engineering, plan before generate, verify don't trust, atomic prompts → atomic commits, right tool for right scope.
   - Tease the rest of the day: *"Sessions 04, 05, and 07 are how you actually do the AI-SDLC."*
3. **The terminal, without the panic** — 6 min
   - `pwd`, `cd`, `ls`, opening a folder, how to read an error
   - Anchored by **Commandment V — Thou shalt not fear thy terminal.** The command line is where Claude Code dwells in full power; the GUI is a comfort, the terminal is a covenant.
4. **Git mental model** — 12 min
   - Working tree → staging → commit → branch → remote
   - The only 6 commands you need today: `status`, `add`, `commit`, `push`, `pull`, `checkout`
   - Snapshots, not "saving"
5. **VS Code tour** — 6 min
   - File explorer, integrated terminal, source control panel, extensions (from [VSCode.md](../../resources/VSCode.md))
6. **GitHub basics** — 6 min
   - Personal account vs. org, the `gh` CLI, viewing a PR
7. **Live practice** — 12 min
   - Clone this workshop repo, open it in VS Code, edit a file, commit, push
8. **Transition to Session 04** — 3 min
   - *"You now know the lifecycle. The next 60 minutes are the artifacts that make the AI-SDLC actually work."*

## Talking Points

- The SDLC isn't bureaucracy — it's the **shape of every piece of software work**, named so you can see which phase you're in.
- *Solo devs still need this discipline.* You wear all the hats; you have to name the phase out loud.
- The phases don't change with AI. **Cycle time** changes — by 5–10× — which means moving cleanly between phases matters *more*, not less.
- Most AI-augmented failures are not "the model is wrong" — they're "the model didn't have what it needed." That's the whole reason this conference is called Context Engineering.
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

## Proposed Slides

Target: ~16 slides for 60 min. Heavy on diagrams, light on bullets. The first half (slides 1–7) is fly-through concept; the second half (slides 8–16) is slow, live mechanics.

1. **Title** — *SDLC Crash Course* · session number, your name, date
2. **Why this session exists** — two outcomes (concepts + mechanics) in one slide; one line of intent for the day's pace: *"We're flying — the depth is in the take-home docs."*
3. **The SDLC loop** — the six-phase diagram from [`SDLC.md`](../../resources/SDLC.md). Big. Centered. No bullets.
4. **The six phases, one line each** — Plan / Design / Build / Test / Ship / Maintain, each with a five-word description
5. **It's a loop, not a line** — the looped diagram; punchline: *"Maintain feeds back into Plan — that's the whole job."*
6. **What changes when AI joins the loop?** — same six phases, with a one-line "what changes" callout on each (compressed from [`AI-SDLC.md`](../../resources/AI-SDLC.md) "The Loop, Compressed")
7. **The 5 cross-cutting principles** — context engineering · plan before generate · verify don't trust · atomic prompts → atomic commits · right tool right scope
8. **Section break — The Mechanics** — *"Now: just enough git, terminal, and VS Code to keep up through Day 2."*
9. **The terminal isn't scary** — `pwd` / `cd` / `ls` / "read the whole error" · **Commandment V** in the corner: *"Thou shalt not fear thy terminal."*
10. **Git mental model** — working tree → staging → commit → branch → remote, drawn as five boxes with arrows
11. **The only 6 git commands you need today** — `status` / `add` / `commit` / `push` / `pull` / `checkout`, each with a one-line "what it does"
12. **VS Code tour** — annotated screenshot: file explorer, integrated terminal, source control panel, extensions. Highlight the Claude Code extension.
13. **GitHub basics** — personal vs org, `gh` CLI, the PR view
14. **Live practice** — the five steps from the Hands-On section, big enough to read from the back of the room
15. **What you just did** — short recap: cloned, edited, committed, pushed. *"You are now operating the loop."*
16. **Transition to Session 04** — *"You know the lifecycle. Next: the artifacts that make the AI-SDLC actually work."*

## Resources

- [`resources/SDLC.md`](../../resources/SDLC.md) — the six-phase SDLC walkthrough (Plan → Design → Build → Test → Ship → Maintain) for solo devs and small teams
- [`resources/AI-SDLC.md`](../../resources/AI-SDLC.md) — the same six phases rebuilt around Claude Code; pairs with the above
- [`resources/VSCode.md`](../../resources/VSCode.md) — extension installs (Prettier, GitLens, Peacock, Live Server, Claude Code for VS Code)
- [`resources/Claude/commands/explain-error.md`](../../resources/Claude/commands/explain-error.md) — the friend you want when a terminal yells at you
- Prereqs [§2 Git](../../_requirements/README.md), [§4 VS Code](../../_requirements/README.md), [§7 GitHub CLI](../../_requirements/README.md)

## Prerequisites Referenced

- Git installed and configured with name/email (prereqs §2)
- VS Code installed with the Claude Code extension (prereqs §4)
- `gh auth status` passing (prereqs §7)

## Notes for the Speaker (Chris)

- This is the **highest-risk session of Day 1** — if attendees fall behind here, they stay behind all day.
- Two halves with different pacing: the **conceptual half** (slides 1–7) is fly-through; the **mechanics half** (8–16) is slow and live. Watch the room as you cross over.
- For the SDLC overlay (slide 6), do **not** walk every phase. Show the diagram, narrate the *shape of the change*, point at the cross-cutting principles slide, and move on. Depth is in the take-home doc.
- Keep slides minimal. Do every command live, big font, slow.
- Watch the room at the 30-min mark — if half the room hasn't `git commit`-ed by minute 50, steal time from the live practice and finish at the terminal yourself.
- Have a TA roam the room during the hands-on segment.
- Starter deck: [`starter.pptx`](./starter.pptx)
