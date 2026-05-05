# 05 · Building the Context for Context Engineering — Part 2

**Day 1 · 1:45 – 2:45 PM · 60 min** · Speaker: **Chris Kehayias**

> Everyone writes. Everyone reads someone else's. Everyone rewrites. **This is Commandment X in practice.**

---

## Session Goal

Every attendee leaves with a **first-draft `CLAUDE.md`** for a sample (or their own) project that has been peer-reviewed and revised at least once. The point isn't a perfect doc — it's the **lived experience** of writing → critique → revision, so attendees internalize that `CLAUDE.md` is a *living document, not a graven tablet*.

This session is the practice partner to Session 04's concepts. Session 04 told you what good context looks like; Session 05 makes you build it, tear it apart, and rebuild it.

## Outline

1. **Setup & sample repo** — 5 min
   - Either bring-your-own or use the shared sample project; everyone needs something open before the timer starts
2. **Baseline: `/project:project-overview`** — 10 min
   - Run it on the chosen repo so everyone starts from the same summary
   - Demonstrate first; then attendees run it themselves
3. **Solo draft** — 15 min
   - Author `CLAUDE.md` using the Part 1 template; no chat, just writing
   - Visible countdown on screen
4. **Partner critique rotation** — 15 min
   - Swap with the person next to you; 7 minutes each direction
   - Critique checklist below
5. **Iterate + test** — 10 min
   - Apply the feedback, then **test it**: ask Claude a question that should now succeed
   - **Commandment X in action** — call it out by name as the session's centerpiece
6. **Debrief — Commandment X in practice** — 5 min
   - Two attendees share what changed between v1 and v2

## Talking Points

- The only way to learn this is to write one, get it wrong, and rewrite it. **That's Commandment X.**
- Pairs > panels. You'll hear feedback from one person that re-frames the whole thing.
- "Would a new teammate who joined today be able to follow this?" — the litmus test.
- Notice what the model *still* gets wrong after v2. That's the next revision's to-do list — and the next iteration of Commandment X.
- Don't hide behind your draft. The point of partner review is to find what you missed; ego is the enemy of a good `CLAUDE.md`.
- A half-good `CLAUDE.md` you actually rewrite weekly beats a polished one that never gets touched again.

## Hands-On / Exercises

### Critique checklist (for the partner review)

- [ ] Could I build the project from this doc alone?
- [ ] Are the conventions stated, or just hinted at?
- [ ] Is there anything vague that would make Claude guess?
- [ ] Is there anything the model can *already infer* from the code that's just noise? (**Commandment II** — keep it lean)
- [ ] Does the doc say what the project **isn't**, where relevant?

### Test prompt (after iteration)

Ask Claude: *"Given this CLAUDE.md, what's one thing you're still unsure about before touching this codebase?"* — the answer is the next gap, and the next pass at Commandment X.

## Resources

- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — the baseline scan
- [`resources/Claude/commands/init-claude-md.md`](../../resources/Claude/commands/init-claude-md.md) — the template
- [`resources/Claude/commands/review.md`](../../resources/Claude/commands/review.md) — structure for the partner critique
- [`resources/Claude/commands/improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md) — 7 criteria map cleanly onto "what's missing from this doc?"

## Proposed Slides

Target: ~12 slides for 60 min. This session is **mostly hands-on** — slides exist to time-box and orient, not to teach. Use big timer slides between blocks so people can self-pace from the back of the room.

1. **Title** — *Building Context — Part 2 · Everyone writes. Everyone rewrites.*
2. **The plan for the next 60 minutes** — five blocks named, with their durations
3. **Setup** — which repo to use (sample provided, or bring-your-own); how to clone it
4. **Baseline — `/project:project-overview`** — the command, what it returns, why we run it first
5. **Solo draft block — 15:00 timer** — *"No chat. Just write. Use the Part 1 template."* Big visible timer.
6. **Partner critique block — 15:00 timer** — swap with the person next to you, 7 minutes each direction
7. **The critique checklist** — five questions, photographable. **Tag question 4 with Commandment II.**
8. **Iterate — 10:00 timer** — apply feedback; then run the test prompt
9. **Test prompt** — *"Given this CLAUDE.md, what's one thing you're still unsure about?"*
10. **Commandment X — Iterate `CLAUDE.md` as you iterate code** — full text on screen; *"What you just did is the practice. Do it weekly."*
11. **Debrief** — two attendees share v1 → v2; what changed and why
12. **Closing** — *"Your `CLAUDE.md` is now a draft, not a relic. Day 2 is when it earns its keep."*

## Notes for the Speaker (Chris)

- Circulate constantly during the solo and partner blocks. Drop by each pair at least once.
- If someone finishes early, their job is to **help the person next to them** — not polish their own draft.
- Have a small shared repo ready (e.g., a toy volunteer-signup app) for anyone who doesn't want to use their own project.
- Keep a visible countdown on screen — people lose track in pair-work. Use the timer slides liberally.
- Land **Commandment X** out loud at least three times during the session: at the start (intent), during iteration (action), and at the debrief (lesson).
- Starter deck: [`starter.pptx`](./starter.pptx)
