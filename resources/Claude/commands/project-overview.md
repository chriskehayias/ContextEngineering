# Project Overview

Generate a comprehensive, read-only overview of this project. Do NOT modify any files, settings, or configurations. This command is strictly observational.

Follow each step below in order, then present the combined findings as a single organized summary.

## Step 1: Directory Structure

List the top-level files and folders in the project root. For each folder, show one level of subfolders (do not recurse deeply). Skip `node_modules`, `.git`, `__pycache__`, `dist`, `build`, `.next`, and other generated/vendor directories.

## Step 2: Tech Stack Detection

Check for the presence of these files and read them if they exist:

- `package.json` (Node.js / JavaScript / TypeScript)
- `requirements.txt` or `pyproject.toml` or `Pipfile` (Python)
- `go.mod` (Go)
- `Cargo.toml` (Rust)
- `Gemfile` (Ruby)
- `pom.xml` or `build.gradle` (Java / Kotlin)
- `composer.json` (PHP)
- `*.csproj` or `*.sln` (C# / .NET)

Identify the primary language(s), frameworks, and key dependencies from whatever you find.

## Step 3: Documentation Files

Look for and read the contents of:

- `README.md` or `README` (any extension)
- `CLAUDE.md` (project instructions for Claude)
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `LICENSE`
- `docs/` folder (note what is inside, do not read every file)

Summarize what each document covers in one or two sentences.

## Step 4: Git Status and Recent Activity

Run these read-only git commands:

- `git status` to show the current branch and working tree state
- `git log --oneline -10` to show the 10 most recent commits
- `git branch -a` to list all local and remote branches

## Step 5: Entry Points and Configuration

Identify key entry points and config files such as:

- Main application entry points (e.g., `index.ts`, `main.py`, `app.js`, `src/App.tsx`)
- Configuration files (e.g., `tsconfig.json`, `.env.example`, `next.config.js`, `webpack.config.js`, `vite.config.ts`, `tailwind.config.js`)
- CI/CD configuration (e.g., `.github/workflows/`, `Dockerfile`, `docker-compose.yml`)
- Linting and formatting (e.g., `.eslintrc`, `.prettierrc`, `biome.json`)

List each file found with a one-line description of its role.

## Step 6: Present the Summary

Organize your findings into these sections using clear markdown formatting:

### Purpose
What this project appears to do, based on the README, package metadata, and directory structure.

### Tech Stack
Languages, frameworks, and notable dependencies.

### Project Structure
A clean tree view of the top-level layout with brief annotations.

### Recent Activity
Current branch, working tree status, and the last 5-10 commits summarized.

### Key Files to Explore First
A short list (5-10 files) that someone new to this codebase should read first to understand how it works, with a reason for each.

### Suggested Next Steps
Three to five concrete actions for getting oriented in this codebase (e.g., "Read the README for setup instructions", "Review src/lib/ for shared utilities", "Check CLAUDE.md for project conventions").
