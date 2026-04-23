# 05 · Building the Context for Context Engineering — Part 2

**Day 1 · 1:45 – 2:45 PM · 60 min** · Speaker: **Chris Kehayias**

> Everyone writes. Everyone reads someone else's. Everyone rewrites.

---

## Session Goal

Every attendee leaves with a **first-draft `CLAUDE.md`** for a sample (or their own) project that has been peer-reviewed and revised at least once.

## Outline

1. **Setup & sample repo** — 5 min
2. **Baseline: `/project:project-overview`** — 10 min
   - Run it on the chosen repo so everyone starts from the same summary
3. **Solo draft** — 15 min
   - Author `CLAUDE.md` using the Part 1 template; no chat, just writing
4. **Partner critique rotation** — 15 min
   - Swap with the person next to you; 7 minutes each direction
   - Critique checklist below
5. **Iterate** — 10 min
   - Apply the feedback, then **test it**: ask Claude a question that should now succeed
6. **Debrief** — 5 min
   - Two attendees share what changed between v1 and v2

## Talking Points

- The only way to learn this is to write one, get it wrong, and rewrite it.
- Pairs > panels. You'll hear feedback from one person that re-frames the whole thing.
- "Would a new teammate who joined today be able to follow this?" — the litmus test.
- Notice what the model *still* gets wrong after v2. That's the next revision's to-do list.

## Hands-On / Exercises

### Critique checklist (for the partner review)

- [ ] Could I build the project from this doc alone?
- [ ] Are the conventions stated, or just hinted at?
- [ ] Is there anything vague that would make Claude guess?
- [ ] Is there anything the model can *already infer* from the code that's just noise?
- [ ] Does the doc say what the project **isn't**, where relevant?

### Test prompt (after iteration)

Ask Claude: *"Given this CLAUDE.md, what's one thing you're still unsure about before touching this codebase?"* — the answer is the next gap.

## Resources

- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — the baseline scan
- [`resources/Claude/commands/init-claude-md.md`](../../resources/Claude/commands/init-claude-md.md) — the template
- [`resources/Claude/commands/review.md`](../../resources/Claude/commands/review.md) — structure for the partner critique
- [`resources/Claude/commands/improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md) — 7 criteria map cleanly onto "what's missing from this doc?"

## Notes for the Speaker (Chris)

- Circulate constantly during the solo and partner blocks. Drop by each pair at least once.
- If someone finishes early, their job is to **help the person next to them** — not polish their own draft.
- Have a small shared repo ready (e.g., a toy volunteer-signup app) for anyone who doesn't want to use their own project.
- Keep a visible countdown on screen — people lose track in pair-work.
- Starter deck: [`starter.pptx`](./starter.pptx)
