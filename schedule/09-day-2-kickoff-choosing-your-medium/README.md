# 09 · Day 2 Kickoff & Choosing Your Medium

**Day 2 · 9:00 – 10:00 AM · 60 min** · Speaker: **Jason Lee**

> Pick the thing you'll ship. Decide what "done" means by 5 PM.

---

## Session Goal

Every attendee leaves this session with (a) a project they're building, (b) a defined MVP scope that fits one build day, and (c) a partner or small group to check in with.

## Outline

1. **Welcome back + Day 1 recap in 90 seconds** — 3 min
2. **The "done by 5 PM" framing** — 5 min
   - A real, deployed thing on Vercel beats an ambitious half-thing on localhost
3. **Medium comparison** — 20 min
   - Web (Next.js + Vercel) — today's default
   - Mobile (React Native / Expo) — possible, harder to demo
   - Desktop (Electron) — rare fit
   - Service / API (Next.js API routes, Hono, Python) — when UI isn't the point
   - Agents (scripted Claude workflows) — automations, not apps
   - Tradeoffs table: time-to-deploy, visibility, maintenance burden, team fit
4. **Project selection** — 15 min
   - If you came with an idea: refine it
   - If you didn't: pick from the ministry-scenario shortlist (see below)
5. **Define your MVP** — 15 min
   - One sentence: "At 5 PM this will let a user **\_\_\_**"
   - What's in v1; what's explicitly *out* of v1
6. **Pair up & transition** — 2 min

## Ministry Scenario Shortlist (for attendees without an idea)

- **Volunteer signup** — team picks dates/roles, volunteers opt in, admin exports CSV
- **Event check-in** — kiosk-style tablet UI for Sunday morning or VBS
- **Giving dashboard** — read-only view of donation trends from a CSV upload
- **Prayer request triage** — submission form + simple admin queue
- **Sermon note companion** — listener-facing note-taking tied to a sermon series
- **Small-group finder** — searchable list with filters (day, location, stage of life)

## Talking Points

- Scope is a **gift**, not a punishment. Every cut you make now is time you'll have at 4:30 to polish and deploy.
- You are not building a product. You are building **one end-to-end slice** that demonstrates context engineering.
- "Web + Next.js + Vercel" is the strongly recommended path today. Every other session, demo, and resource in this workshop assumes it.
- If you pick a non-web medium: that's fine, but you'll need to self-navigate the Vercel session. Make sure a partner is also choosing a similar path.

## Hands-On / Exercises

### MVP definition worksheet (live fill-in)

- **One-sentence outcome.** *"At 5 PM this will let a [user type] [do specific thing] and see [specific result]."*
- **In v1:** (list 3–5 features max)
- **Out of v1:** (list 3+ things you're deliberately *not* doing)
- **The ugliest version that still counts as done.** Describe it.

## Resources

- [`resources/CloudProviders.md`](../../resources/CloudProviders.md) — what managed services exist for each medium (Vercel, Neon, Auth0, Resend, Twilio, Supabase, etc.)
- [`resources/Components.md`](../../resources/Components.md) — shadcn/ui and 21st.dev for rapid UI
- [`resources/Claude/ClaudeCode.md`](../../resources/Claude/ClaudeCode.md) — cheat sheet
- [Build Block 1 (next session)](../11-build-block-1-plan-and-review/README.md)

## Notes for the Speaker (Jason)

- If Day 1 ran late and you inherit a tired room, cut the medium comparison to 10 min and protect project selection.
- The medium comparison can be a **table on one slide**, not five minutes per medium.
- Circulate during MVP definition. People will try to over-scope; your job is to cut.
- Starter deck: [`starter.pptx`](./starter.pptx)
