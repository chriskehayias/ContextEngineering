# Workshop Prerequisites

<p align="center">
  <a href="#1-github-account"><img src="logos/github.svg" alt="GitHub" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#2-git"><img src="logos/git.svg" alt="Git" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#3-nodejs"><img src="logos/nodejs.svg" alt="Node.js" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#4-visual-studio-code-vs-code"><img src="logos/vscode.png" alt="VS Code" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#5-anthropic-account-claude"><img src="logos/anthropic.svg" alt="Anthropic" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#6-claude-code-cli"><img src="logos/claude.svg" alt="Claude" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#vercel"><img src="logos/vercel.svg" alt="Vercel" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#neon"><img src="logos/neon.svg" alt="Neon" width="48" height="48"></a>
  &nbsp;&nbsp;&nbsp;
  <a href="#context7"><img src="logos/context7.png" alt="Context7" width="48" height="48"></a>
</p>

Everything you need to install and set up **before** the workshop. Follow each section in order. Budget about 30-60 minutes for the full setup.

---

## 1. GitHub Account

GitHub is where this workshop repo lives and where you'll push your work. Create this first — you'll use the same email when configuring Git in the next step.

**Sign up:** [https://github.com/signup](https://github.com/signup)

### Setup steps

1. Go to the signup page and create a free account
2. Verify your email address
3. That's it — free accounts have everything you need

---

## 2. Git

Git is the version control tool we use to download and share code. You'll use it throughout the workshop.

**Download:** [https://git-scm.com/downloads](https://git-scm.com/downloads)

### Setup steps

1. Go to the download page and choose your operating system (Windows, Mac, or Linux)
2. Run the installer — the default options are fine for everything
3. Open a terminal (Terminal on Mac, PowerShell or Git Bash on Windows) and verify it works:
   ```bash
   git --version
   ```
   You should see something like `git version 2.44.0`
4. Configure your name and email — **use the same email you signed up with on GitHub**:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

**Account required?** No account needed for Git itself — it uses your GitHub account from Step 1.

---

## 3. Node.js

Node.js is the JavaScript runtime that Claude Code and many modern dev tools run on. You need version **18 or higher**.

**Download:** [https://nodejs.org](https://nodejs.org) (choose the **LTS** version)

### Setup steps

1. Download the LTS installer for your operating system
2. Run the installer — accept all defaults
3. **Restart your terminal** after installing (important!)
4. Verify it works:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both (e.g., `v22.x.x` and `10.x.x`)

**Account required?** No.

---

## 4. Visual Studio Code (VS Code)

VS Code is the code editor we'll use in the workshop. It's free, lightweight, and works on all platforms.

**Download:** [https://code.visualstudio.com](https://code.visualstudio.com)

### Setup steps

1. Download and install for your operating system
2. Open VS Code and familiarize yourself with the basics:
   - **File Explorer** (left sidebar) — where your project files live
   - **Terminal** (`` Ctrl+` `` or `View > Terminal`) — the built-in command line
   - **Extensions** (left sidebar, square icon) — for adding features
3. Install the **Claude Code extension** (optional but recommended):
   - Open Extensions (`Ctrl+Shift+X` on Windows, `Cmd+Shift+X` on Mac)
   - Search for "Claude Code"
   - Click **Install**

**Account required?** No account needed, though you can optionally sign in with GitHub for settings sync.

---

## 5. Anthropic Account (Claude)

Anthropic makes Claude, the AI we'll be working with. You need an account to use the Claude API and Claude Code.

**Sign up:** [https://claude.ai](https://claude.ai)

### Recommended: Claude Max subscription

For this workshop, we **strongly recommend** signing up for the **Claude Max** plan. Claude Code uses a lot of tokens and with the API pay-as-you-go model, costs can add up quickly during a hands-on workshop. Claude Max gives you a flat monthly rate with generous usage limits — much better for learning and experimenting freely.

- Go to [claude.ai](https://claude.ai) and create an account (or sign in)
- Subscribe to **Claude Max** ($100/month)
- You only need it for **one month** — you can downgrade or cancel anytime after the workshop
- Claude Code will authenticate through your Claude Max subscription, no API key needed

> **Why Max?** During two full days of hands-on exercises, you'll be making hundreds of Claude Code requests. On pay-as-you-go API pricing, that could easily exceed $100. Max gives you predictable cost and peace of mind to experiment without watching your bill.

### Alternative: API pay-as-you-go

If you prefer not to subscribe, you can use the API directly — you only pay for what you use.

1. Go to the [Anthropic Console](https://console.anthropic.com) and create an account
2. Add a payment method — API usage is pay-as-you-go
3. Navigate to **API Keys** and create a new key
4. Copy your API key and save it somewhere safe (you won't be able to see it again)
5. Set it as an environment variable in your terminal:
   - **Mac/Linux:**
     ```bash
     export ANTHROPIC_API_KEY="sk-ant-..."
     ```
   - **Windows (PowerShell):**
     ```powershell
     $env:ANTHROPIC_API_KEY="sk-ant-..."
     ```

> **Tip:** To make this permanent, add the export line to your shell profile (`~/.bashrc`, `~/.zshrc`, or Windows environment variables).

**Account required?** Yes — either a Claude Max subscription (recommended) or an API key with a payment method.

---

## 6. Claude Code (CLI)

Claude Code is the command-line AI coding tool from Anthropic. This is the core tool of the workshop.

**Docs:** [https://docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)

### Setup steps

1. Make sure Node.js is installed first (Step 3 above)
2. Install Claude Code globally:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
3. Verify the install:
   ```bash
   claude --version
   ```
4. Launch it for the first time:
   ```bash
   claude
   ```
5. On first run, it will prompt you to authenticate — follow the on-screen instructions

**Account required?** Yes — uses your Anthropic account / API key from Step 5.

---

## 7. GitHub CLI (gh)

The GitHub CLI lets you create repos, pull requests, and more from your terminal. We'll use it during the workshop.

**Download:** [https://cli.github.com](https://cli.github.com)

### Setup steps

1. Install using the instructions for your OS on the download page, or:
   - **Mac:** `brew install gh`
   - **Windows:** `winget install GitHub.cli`
   - **Linux:** See [install instructions](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)
2. Authenticate with your GitHub account:
   ```bash
   gh auth login
   ```
   Choose **GitHub.com**, **HTTPS**, and **Login with a web browser** when prompted
3. Verify:
   ```bash
   gh auth status
   ```

**Account required?** Yes — uses your GitHub account from Step 1.

---

## Checklist

Before the workshop, make sure you can run all of these without errors:

```bash
git --version
node --version
npm --version
claude --version
gh auth status
code --version
```

If any of these fail, revisit the corresponding section above or reach out for help.

---

## Bonus Setup (Optional)

These are **not required** for the workshop but will let you go further during the capstone and beyond.

### Vercel

A platform for deploying web apps instantly. Great for shipping what you build.

**Sign up:** [https://vercel.com/signup](https://vercel.com/signup)

1. Sign up with your **GitHub account** (recommended — links your repos automatically)
2. Free tier is generous and covers everything you'd need
3. Optionally install the CLI:
   ```bash
   npm install -g vercel
   ```

### Neon

A serverless Postgres database. Useful if you want to build something with a real database during the capstone.

**Sign up:** [https://neon.tech](https://neon.tech)

1. Sign up with your **GitHub account** (easiest) or email
2. Create a free project — you'll get a connection string
3. Free tier includes 1 project with 512 MB storage — plenty for the workshop

### Context7

Context7 is an MCP server that pulls **up-to-date, version-specific documentation** directly into your Claude Code prompts. Instead of Claude relying on its training data (which may be months old), Context7 fetches the current docs for any library — React, Next.js, Prisma, Tailwind, you name it. This is a game-changer for getting accurate, working code.

**Dashboard:** [https://context7.com/dashboard](https://context7.com/dashboard)

#### The easy way: let Claude Code set it up for you

The fastest way to add Context7 is to just ask Claude Code to do it:

1. Open your terminal and launch Claude Code:
   ```bash
   claude
   ```
2. Then simply type:
   ```
   Add Context7 as an MCP server
   ```
3. Claude Code will handle the configuration for you

#### Manual setup (if you prefer)

Run this one command in your terminal — it handles authentication and installs Context7 automatically:

```bash
npx ctx7 setup --claude
```

If you're on a remote/headless server (no browser), use your API key directly:

```bash
npx ctx7 setup --claude --api-key YOUR_API_KEY
```

#### Get an API key for extended usage

Context7 works without an API key, but you'll hit rate limits quickly — especially during a full day of workshop exercises. A free API key removes that bottleneck:

1. Go to [context7.com/dashboard](https://context7.com/dashboard)
2. Sign up / log in
3. Create a new API key
4. Your key will unlock higher rate limits for sustained usage throughout the workshop

#### Using Context7 in Claude Code

Once set up, Context7 activates automatically when you ask about libraries. You can also call it explicitly:

```
use context7 to show me how to set up middleware in Next.js 15
```

---

Questions? Reach out before the workshop so we can get you sorted ahead of time.
