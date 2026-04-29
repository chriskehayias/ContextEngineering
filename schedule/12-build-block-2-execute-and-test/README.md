# 12 · Build Block 2 — Execute & Test

**Day 2 · 1:45 – 3:15 PM · 90 min** · Lead facilitator: **Chris Kehayias**

> Execute against the plan. Test as you go. Commit every time something works.

---

## Session Goal

Every attendee has a **working, committed, tested slice of their MVP** on their laptop by 3:15 PM — ready to deploy at 3:35.

## Outline

1. **Kickoff** — 3 min
   - Remind: every ~20 min, commit. Every ~30 min, run tests.
2. **Active build** — 70 min
   - Attendees work on their MVPs
   - Facilitators roam, answer questions, unblock
3. **Mid-block test sprint** — 12 min
   - Everyone runs [`/project:gen-tests`](../../resources/Claude/commands/gen-tests.md) on their most-critical file
   - Run the tests. Green or red is both information.
4. **Commit & push checkpoint** — 5 min
   - Everyone pushes to GitHub before the break

## Facilitator Cadence

| Clock | Where people should be |
|---|---|
| :00 | Build started; first feature in progress |
| :15 | First feature commit |
| :30 | Second feature in progress; first `gen-tests` run |
| :45 | Tests running; debugging mid-stream |
| :00 | Third feature or polish; all tests green |
| :10 | Commit + push checkpoint |

## Talking Points

- The plan is your **ground truth**. If Claude suggests something off-plan, push back: "that's not what we decided in Build Block 1."
- **Small commits win.** Every time something works, commit. You're building a rollback history for the rest of the afternoon.
- Tests aren't optional. They're how you know you didn't break the thing you just fixed.
- Get comfortable with `/project:explain-error`. It turns every red stack trace into a to-do list.

## Hands-On / Exercises

### The build loop

```
1. Prompt Claude with a small, specific feature ask (reference your plan)
2. Read the diff before accepting
3. Run it
4. If broken → /project:explain-error
5. If working → /project:gen-tests on the new file
6. Run tests
7. Commit
8. Repeat
```

### When you're stuck

- **First 5 min:** re-read your `CLAUDE.md`. Is it missing something the model needs?
- **Next 5 min:** ask Claude *"what context do you need that I haven't given you?"*
- **After 10 min:** flag a facilitator.

## Resources

- [`resources/Claude/commands/gen-tests.md`](../../resources/Claude/commands/gen-tests.md) — framework-aware test generation
- [`resources/Claude/commands/explain-error.md`](../../resources/Claude/commands/explain-error.md) — debug companion
- [`resources/Claude/commands/review.md`](../../resources/Claude/commands/review.md) — run on a finished feature before committing
- [`resources/Components.md`](../../resources/Components.md) — shadcn/ui for rapid UI; 21st.dev for component patterns
- [`resources/CloudProviders.md`](../../resources/CloudProviders.md) — lookup for any managed service you need to wire in

## Notes for the Lead Facilitator (Chris)

- This is the **highest-energy, most chaotic** session of the workshop. Embrace it.
- Watch for two anti-patterns:
  1. **Rabbit holes** — someone spends 40 min debugging an env var
  2. **Scope creep** — someone decides mid-block to add "one more feature"
- Every 10 min, cite the clock: *"you have 55 minutes left, what's your priority?"*
- At the :10 mark, push the commit-and-push checkpoint hard. A disaster at 3:10 with un-pushed work is preventable.
- Starter deck: [`starter.pptx`](./starter.pptx)
