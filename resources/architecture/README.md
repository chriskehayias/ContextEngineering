# Architecture Starters

Pick a starting architecture, clone the patterns into your project, and tune from there. Each doc is **opinionated by default** but lists comparative options for every slot — so you can keep the defaults to ship fast, or swap in what your shop already uses.

Every starter ships with a **`CLAUDE.md` template** designed for this exact stack. Drop it at the root of your project and Claude Code will know:

- The shape of the app (where things live, what calls what)
- Which libraries to consult via **Context7** for current docs
- The conventions to follow when generating code

This is the heart of context engineering — pre-loading Claude with the architectural decisions you've already made so it stops guessing.

---

## Starters

| Starter | When to pick it |
|---|---|
| [**Web — Next.js + Drizzle + Neon + shadcn**](web-nextjs.md) | Full-stack web app. Default for almost everything: internal tools, member portals, dashboards, CRUD over MP/RockRMS data. |
| [**Desktop — Electron + TypeScript**](desktop-electron.md) | Standalone cross-platform desktop app. Pick when you need OS integration (file system, native menus, offline-first, hardware), not just a web app in a window. |
| [**Mobile — Expo + React Native + TypeScript**](mobile-expo.md) | iOS and Android from one codebase. Assumes a Next.js backend (the web starter above) handles your data and auth. |

## Add-on references

Drop-in modules that pair with the starters above — copy/paste-ready context for PRDs and `CLAUDE.md` files.

| Reference | Pairs with | What's inside |
|---|---|---|
| [**auth/**](auth/README.md) | Web (Next.js) | Better Auth standalone + Google SSO + Microsoft SSO, plus RBAC patterns (admin plugin, access-control plugin, roll-your-own) |

---

## How to use these

1. Read the starter's **Stack at a glance** table to confirm it fits your use case.
2. Skim the **diagram** to understand the data flow.
3. Run the **Scaffold** commands to create a fresh project.
4. Copy the **CLAUDE.md template** from the starter into your new project root.
5. Open the project in Claude Code and start building — Claude will read `CLAUDE.md`, pull current docs via Context7 when it needs them, and follow the conventions you've laid down.

---

## What's not here (yet)

These are the three highest-traffic shapes for the workshop. If you need something different — an MCP server, a standalone backend API, a Slack/Teams bot, an AI agent or RAG service — flag it during the workshop and we'll either point you at one of these as a starting point or sketch a new one with you.
