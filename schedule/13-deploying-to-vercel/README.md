# 13 · Deploying to Vercel

**Day 2 · 3:35 – 4:30 PM · 55 min** · Speaker: **Chris Kehayias**

> Local to live, with all the gotchas named before you hit them.

---

## Session Goal

Every attendee has their Build Block 2 app **live on a Vercel URL** they can share — and they understand why each gotcha that bit someone today was a gotcha.

## Outline

1. **What Vercel actually is** — 5 min
   - The relationship: GitHub → Vercel → your domain
   - Preview deploys vs. production deploys
2. **Connect GitHub → Vercel** — 10 min
   - Live walk: sign in, import repo, pick defaults
3. **First deploy** — 10 min
   - Watch the build log together; diagnose the first failure as a group
4. **Environment variables** — 12 min
   - `NEXT_PUBLIC_*` vs. server-only
   - Preview vs. production scoping
   - How to avoid committing `.env` (the `.gitignore` reminder)
5. **Common gotchas** — 13 min (see below)
6. **Victory lap** — 5 min
   - Share your URL in the room chat / a shared doc

## Common Gotchas (cover all of these)

- **Hardcoded `localhost` URLs.** Any `http://localhost:3000` in code will break. Use relative paths or env vars.
- **`NEXT_PUBLIC_` prefix.** Anything a client needs at runtime must start with `NEXT_PUBLIC_`. Anything sensitive must *not*.
- **Missing env vars.** Local `.env.local` doesn't travel. Set every var in the Vercel dashboard before hitting "Deploy."
- **Auth callback URLs.** Dev and prod are different origins. Auth0 / NextAuth / etc. need both configured.
- **Database connection limits.** Serverless functions spin up many concurrent connections. Use **Neon** (serverless-friendly) or a pooled connection.
- **Build-time vs. runtime env vars.** Some frameworks inline build-time vars into the bundle — changing them requires a redeploy.
- **Case-sensitive file systems.** Mac (case-insensitive) vs. Linux (case-sensitive). `import './Header'` will silently break if the file is `header.tsx`.
- **`node_modules` or `.next` committed.** Check `.gitignore`. If these leaked in, Vercel builds will be slow and fragile.

## Talking Points

- Deploying today is the *reward* for the planning discipline yesterday and this morning. Savor it.
- Your first deploy will probably fail. That's the whole point of this session — so we fail together, in public, now.
- The **build log is a context document**. Paste it into Claude with `/project:explain-error` if you get stuck.
- Vercel's free tier is generous. No one should hit limits today.

## Hands-On / Exercises

```bash
# Before pushing to Vercel:
git status           # clean?
git push             # to GitHub
# Then in browser:
#   1. vercel.com/new
#   2. Import your repo
#   3. Add env vars
#   4. Deploy
```

If the build fails:
```
/project:explain-error <paste the failed build log>
```

## Resources

- [`resources/CloudProviders.md`](../../resources/CloudProviders.md) — Vercel section; also Neon for a deploy-friendly Postgres
- [`resources/Claude/commands/explain-error.md`](../../resources/Claude/commands/explain-error.md) — build-log companion
- [`resources/Claude/commands/summarize-changes.md`](../../resources/Claude/commands/summarize-changes.md) — prep material for Show & Tell at 4:30

## Prerequisites Referenced

- Vercel account created (prereqs [Bonus Setup](../../_requirements/README.md))
- GitHub repo pushed (Build Block 2 output)

## Notes for the Speaker (Chris)

- Expect at least one attendee to deploy to the wrong repo. Have the rollback / re-import steps ready.
- Don't demo environment variables on a slide — demo them *in the Vercel dashboard*. Muscle memory matters.
- Reserve the last 5 min for a victory lap. **Get everyone to paste their URL somewhere public in the room.** That's the emotional payoff of two days.
- Starter deck: [`starter.pptx`](./starter.pptx)
