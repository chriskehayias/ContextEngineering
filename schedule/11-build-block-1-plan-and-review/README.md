# 11 · Build Block 1 — Plan & Review

**Day 2 · 10:45 AM – 12:30 PM · 105 min** · Lead facilitator: **Chris Kehayias**

> No code. Plan the thing. Review the plan. Then, and only then, lunch.

---

## Session Goal

By 12:30 PM, every attendee has a **requirements doc, a rough architecture, and a data model** — reviewed by a partner and by Claude — ready to be executed on in Build Block 2.

## Outline

1. **Kickoff + checkpoint cadence** — 5 min
   - Explain the "you should be about here…" call every 10–15 min
2. **Requirements doc** — 25 min
   - One page, written for Claude. Follow the 7-criteria framework.
3. **Architecture sketch** — 20 min
   - Pages/routes, API endpoints, external services, auth model
4. **Data model** — 25 min
   - Entities, relationships, fields, seed data
5. **Partner review** — 20 min
   - Swap with your pair; run [`/project:review`](../../resources/Claude/commands/review.md) on each other's planning docs
6. **Self-review via Claude** — 8 min
   - *"Given this plan, what am I missing?"* — treat the answer as the backlog
7. **Checkpoint & stretch** — 2 min

## Facilitator Cadence

Per the [schedule](../README.md), every 10–15 minutes call out *"you should be about here in your build."* Suggested callouts:

| Clock | Where people should be |
|---|---|
| :55 | One-sentence outcome written; requirements doc draft started |
| :10 | Requirements doc complete; architecture sketch started |
| :35 | Architecture done; data model started |
| :00 | Data model done; switching to partner review |
| :20 | Partner review complete; running Claude self-review |

## Talking Points

- This block feels slow. It's supposed to. **Plans caught here are fires not fought in Build Block 2.**
- The requirements doc isn't a product spec. It's **context you're handing to Claude** so everything in Build Block 2 is smarter.
- A good data model ships faster than a clever one. Start with 3–5 entities, no more.
- The `/project:review` command is surprisingly good on *prose*, not just code. Use it on your requirements doc.

## Hands-On / Exercises

### Requirements doc prompts (to check your work)

Ask Claude:
1. *"List everything a developer would still need to guess after reading this doc."*
2. *"What questions would a new teammate ask after reading this?"*
3. *"Where is this doc making assumptions the reader can't verify?"*

### Data model sanity check

- Can you describe each entity in one sentence?
- Can you draw the relationships without looking at code?
- Is there anything here you won't actually need for MVP? Cut it.

## Resources

- [`resources/Claude/commands/review.md`](../../resources/Claude/commands/review.md) — structured critique format
- [`resources/Claude/commands/project-overview.md`](../../resources/Claude/commands/project-overview.md) — use at the start of the block for context re-sync
- [`resources/Claude/commands/improve-prompt.md`](../../resources/Claude/commands/improve-prompt.md) — 7 criteria also apply to your req doc
- [`resources/CloudProviders.md`](../../resources/CloudProviders.md) — pick DB/auth/email/storage services now, not later (Neon, Auth0, Resend, S3, etc.)

## Notes for the Lead Facilitator (Chris)

- This is the **hardest session to keep on track** because attendees will want to start coding. Every 15 minutes, remind them: no code until 1:45 PM.
- Rotate the room constantly. If someone's quiet, they're usually stuck.
- When you see over-scoping: cut out loud. "Three of these are v2. Circle them. Don't build them today."
- If a table finishes 20 min early, give them a new assignment: write the `.env.example` and the `README.md` for their own project.
- Starter deck: [`starter.pptx`](./starter.pptx)
