# Claude Code Custom Commands

A curated set of starter commands for context engineering with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Each command is beginner-friendly, safe to run, and demonstrates a core context engineering principle.

---

## Installation

Copy any or all of these `.md` files into your project's `.claude/commands/` directory:

```bash
# From your project root
mkdir -p .claude/commands

# Copy all commands
cp /path/to/ContextEngineering/resources/Claude/commands/*.md .claude/commands/

# Or copy individual commands
cp /path/to/ContextEngineering/resources/Claude/commands/explain.md .claude/commands/
```

Once installed, commands are available in Claude Code as `/project:command-name`.

---

## Commands

### `/project:project-overview`

**File:** [project-overview.md](project-overview.md)
**Arguments:** None
**Safety:** Read-only — no files are modified

Scans your project's directory structure, tech stack, documentation, git history, and configuration files, then presents a well-organized summary. Perfect for onboarding to an unfamiliar codebase.

```
/project:project-overview
```

**Context Engineering Principle:** Gathering context before acting — understand what you're working with before making changes.

---

### `/project:init-claude-md`

**File:** [init-claude-md.md](init-claude-md.md)
**Arguments:** None
**Safety:** Creates one file (CLAUDE.md) — asks for confirmation before writing

Analyzes your project and drafts a `CLAUDE.md` file — the most important context engineering file in any project. CLAUDE.md is automatically loaded into every Claude Code conversation, giving Claude persistent memory about your project.

```
/project:init-claude-md
```

**Context Engineering Principle:** Teaching AI about your project — persistent context that improves every future interaction.

---

### `/project:explain`

**File:** [explain.md](explain.md)
**Safety:** Read-only — no files are modified

Provides a thorough, beginner-friendly explanation of any file, function, or concept in your codebase. Structures explanations into four clear sections: what it does, how it works, key dependencies, and how it connects to the rest of the project.

**Arguments:** `$ARGUMENTS` — a file path, function name, or concept to explain

```
/project:explain src/index.ts
/project:explain handleLogin
/project:explain authentication flow
/project:explain how the database schema works
```

**Context Engineering Principle:** Rich context produces better answers — the more specific your question, the better the explanation.

---

### `/project:review`

**File:** [review.md](review.md)
**Safety:** Read-only — no files are modified

Performs a structured code review covering summary, strengths, issues (rated by severity), security concerns, readability, and actionable suggestions with code examples. Educational and constructive in tone.

**Arguments:** `$ARGUMENTS` — a file path, `staged`, `changes`, or omit for all uncommitted changes

```
/project:review src/auth/login.ts
/project:review staged
/project:review changes
/project:review
```

**Context Engineering Principle:** Structured review with clear criteria — consistent, repeatable analysis using a defined framework.

---

### `/project:gen-tests`

**File:** [gen-tests.md](gen-tests.md)
**Safety:** Presents tests for review before writing — asks for confirmation before creating files

Generates comprehensive tests for a specified file. Automatically detects your project's testing framework and follows existing test conventions. Covers happy path, edge cases, and error scenarios.

**Arguments:** `$ARGUMENTS` *(required)* — the file path to generate tests for

```
/project:gen-tests src/utils/helpers.ts
/project:gen-tests lib/api/contacts.py
/project:gen-tests app/services/EventService.java
```

**Context Engineering Principle:** Convention-aware generation — analyzing existing patterns to produce code that fits naturally into your project.

---

### `/project:summarize-changes`

**File:** [summarize-changes.md](summarize-changes.md)
**Safety:** Read-only — no files are modified

Summarizes recent git history in plain, non-technical language. Groups changes by area, credits contributors, and highlights anything notable. Great for keeping stakeholders informed without requiring them to read code.

**Arguments:** `$ARGUMENTS` *(optional)* — number of days (default: 7), number of commits, or a branch name

```
/project:summarize-changes
/project:summarize-changes 30
/project:summarize-changes 5 commits
/project:summarize-changes feature/new-calendar
```

**Context Engineering Principle:** Making history accessible — translating technical activity into language anyone can understand.

---

### `/project:explain-error`

**File:** [explain-error.md](explain-error.md)
**Safety:** Read-only by default — only modifies files if you explicitly ask for a fix

Analyzes an error message or stack trace and explains what happened, why, where, how to fix it, and how to prevent it in the future. Reads referenced project files for additional context. Encouraging tone that treats errors as learning opportunities.

**Arguments:** `$ARGUMENTS` *(required)* — the error message or stack trace to analyze

```
/project:explain-error TypeError: Cannot read property 'name' of undefined
/project:explain-error ModuleNotFoundError: No module named 'requests'
/project:explain-error ECONNREFUSED 127.0.0.1:5432
```

**Context Engineering Principle:** Context-rich debugging — combining the error message with project-specific file context for more accurate diagnosis.

---

### `/project:improve-prompt`

**File:** [improve-prompt.md](improve-prompt.md)
**Safety:** Text analysis only — no files are modified

The meta-command that teaches context engineering itself. Takes a rough prompt, analyzes it against 7 context engineering criteria, rewrites it with improvements, and explains what changed and why — so you learn the principles, not just get a better prompt.

**Arguments:** `$ARGUMENTS` *(required)* — the rough prompt you want to improve

```
/project:improve-prompt Write a welcome email for new visitors
/project:improve-prompt Make me a script that backs up the database
/project:improve-prompt Help me build a volunteer scheduling system
```

**Context Engineering Principle:** The meta-skill — learning to give AI clear, complete instructions is the foundation of everything else.

---

## Quick Reference

| Command | Arguments | Modifies Files? | Best For |
|---------|-----------|-----------------|----------|
| `/project:project-overview` | None | No | Onboarding to a new codebase |
| `/project:init-claude-md` | None | Yes (with approval) | Setting up persistent AI context |
| `/project:explain` | File, function, or concept | No | Understanding unfamiliar code |
| `/project:review` | File path or `staged` | No | Code quality and security review |
| `/project:gen-tests` | File path *(required)* | Yes (with approval) | Generating test coverage |
| `/project:summarize-changes` | Days, commits, or branch | No | Stakeholder-friendly changelogs |
| `/project:explain-error` | Error message *(required)* | No (unless asked) | Debugging with context |
| `/project:improve-prompt` | Prompt text *(required)* | No | Learning to write better prompts |

---

## Tips for Workshop Participants

1. **Start with `/project:project-overview`** to get oriented in any codebase
2. **Run `/project:init-claude-md`** early — it makes every other command work better
3. **Use `/project:improve-prompt`** to practice the core skill of context engineering
4. **Chain commands together** — use `/project:explain` to understand code, then `/project:review` to evaluate it
5. **These are starting points** — read the `.md` files, modify them, and create your own commands
