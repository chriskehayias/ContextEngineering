# 02 · Vibe Coding vs. Context Engineering

**Day 1 · 9:30 – 10:15 AM · 45 min** · Speakers: **Tripp Lisenby** (opener) & **Chris Kehayias**

> Name the difference in words, then show it in pixels.

---

## Session Goal

Attendees can articulate in one sentence why **context engineering beats vibe coding** — and they've seen the difference demonstrated live on the same task. Tripp's opener anchors the *why* in a story most of the room can map themselves onto before Chris formalizes the framework.

## Speakers

- **Tripp Lisenby** — newest member of the ACST Innovation team, hired with no traditional coding background. Tripp opens the session with his own crossover story from vibe coding to context engineering. His perspective mirrors the audience's, which is the whole point of putting him first.
- **Chris Kehayias** — picks up from Tripp's story, formalizes the definitions, and runs the live demo and the rest of the session.

## Outline

1. **Tripp's opener — vibe to context, in his own words** — 8 min
   - Tripp's journey, told first-person
   - Lands the emotional and practical case before Chris formalizes it
2. **Define both terms** — 4 min
   - Tighten the formal definition Tripp's story already set up
   - *Vibe coding*: typing what comes to mind and riding the model's first guess
   - *Context engineering*: designing what the model sees before you ask
3. **Side-by-side live demo** — 15 min
   - Same ambiguous feature request, run twice on a clean repo
   - Once with no context, once with a `CLAUDE.md` + a requirements doc
4. **The 7 criteria of a well-engineered prompt** — 10 min
   - Walk the framework from [`improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md):
     specificity, goal/purpose, constraints, success criteria, examples, audience, scope
5. **What "good" looks like** — 6 min
   - Characteristics: reproducible, auditable, teachable, improvable
6. **Transition to SDLC** — 2 min

## Tripp's Opener — Starter Beats

Tripp writes his own slides and notes. The beats below are starters — keep, cut, reorder freely. Target 5–10 minutes. The more it sounds like *you*, the more it works.

**Beats to consider hitting (in roughly this order):**

1. *Who I am and why I'm opening this session.* No traditional coding background. Hired onto the ACST Innovation team specifically for fresh eyes. Most of the room is closer to where I started than to where Chris is — and that's exactly why I'm up here first.
2. *My first taste of vibe coding.* What it felt like. The "I can't believe this is working" moment. Be honest about the high.
3. *Where it broke.* A specific time you asked something vague and the model confidently shipped something wrong, off-brand, or unusable. Concrete > abstract. Name the task.
4. *What changed.* The first time you slowed down and engineered the context — a `CLAUDE.md`, a requirements doc, a worked example, whatever clicked. Show the artifact on screen if you can.
5. *Why this matters for non-developers specifically.* The skill isn't typing code faster — it's thinking clearly about what you want. That's a skill everyone in this room already has or can build.
6. *Hand off.* One sentence that gives the energy to Chris and the live demo.

**Highlights — don't forget to land these:**

- Give the audience explicit permission to admit they've vibe-coded. Most have. Naming it disarms the room.
- State the difference in *your own words* before Chris's formal definition — it makes his slide land harder, not weaker.
- One concrete artifact on screen beats five abstract bullets. If you only show one thing, show the `CLAUDE.md` (or doc) that turned the corner for you.
- Leave the room with a quotable line. Working candidate: *"The skill is thinking clearly, not typing code."* Use yours if it's better.
- End on the handoff. Don't fade out — pass the baton.

**Practical:**

- 5 min is fine. 10 is the ceiling. Don't pad to fill — Chris can absorb the time.
- Rehearse with a stopwatch at least once.
- If a slide doesn't earn its 30 seconds, cut it.

## Talking Points (Chris)

- Vibe coding isn't *wrong* — it's where most people start (Tripp just demonstrated this). The point is to graduate from it deliberately.
- The model's quality ceiling is almost always set by **what it was given**, not by how hard it tried.
- Good context is writable, readable, and **reviewable like code** — you can diff it, version it, critique it.
- Preview the custom [status line](../../resources/Claude/statusline/README.md): showing live context-window usage makes the abstract idea concrete.
- Plant the seed: every command they'll meet later (`/project:init-claude-md`, `/project:explain`, `/project:review`) is just context engineering wearing different hats.

## Hands-On / Exercises

- *Optional 2-minute poll, right after Tripp's opener:* ask the room to shout out a time AI gave them something useless. Then ask: **what was missing from the ask?** Nearly every answer maps to one of the 7 criteria — and Tripp's story has primed them to answer honestly.

## Deck Gaps to Build Out

For the final `.pptx`, the deck still needs:

- **Tripp speaker intro slide** — name, role, one-line story, why he's opening (no separate intro slide for Chris per the running order).
- **Both demo prompts written out verbatim** — the vague "vibe" prompt and the engineered prompt. Don't ad-lib under pressure.
- **Sample `CLAUDE.md` and requirements doc** — visible on screen during the demo so the audience sees what context *actually looks like*.
- **7 criteria reference card** — single slide, one line per criterion, designed to be photographed.
- **Backup screenshots of both demo runs** — insurance if the live demo fails or stalls.
- **Closing transition slide to session 03** (SDLC crash course) — one beat that makes the next session feel inevitable.

## Resources

- [`resources/Claude/commands/improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md) — the 7-criteria framework, in command form
- [`resources/Claude/ClaudeCode.md`](../../resources/Claude/ClaudeCode.md) — cheat sheet + custom status line overview
- [`resources/Claude/statusline/README.md`](../../resources/Claude/statusline/README.md) — live context-usage display

## Notes for the Speakers

**For Tripp:**

- You're going first *because* you're closest to the audience. That's the asset, not a stressor.
- Write your own slides. Don't perform — tell.
- Practice the handoff line out loud. The transition into Chris's segment is load-bearing.

**For Chris:**

- The live demo is still the centerpiece. Rehearse it cold on a clean machine the night before.
- If the contrast between "no context" and "with context" isn't *visually* obvious, the session fails. Pick a task where ambiguity actually bites (e.g., "add a login page" — whose auth? which DB? what styling?).
- Resist drifting into Claude Code features. That's sessions 06 and 07. Today is the *why*, not the *how*.
- After Tripp lands, your first job is to honor his story — reference it explicitly in your formal definition. Don't restart cold.
- Starter deck: [`starter.pptx`](./starter.pptx)
