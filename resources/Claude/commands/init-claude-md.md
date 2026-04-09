Analyze this project and draft a CLAUDE.md file for it. CLAUDE.md is the single most important context engineering file in a project -- it is automatically loaded into every Claude Code conversation, giving Claude persistent memory about the project's purpose, structure, conventions, and workflows.

Follow these steps carefully. Do NOT skip ahead or write any files until the user approves.

## Step 1: Check for an existing CLAUDE.md

Look for a CLAUDE.md file in the project root directory.

- If one exists, display its contents and warn the user: "A CLAUDE.md file already exists. Continuing will replace it. Do you want to proceed?" Wait for confirmation before continuing. If the user declines, stop here.
- If none exists, tell the user you are starting fresh and proceed to Step 2.

## Step 2: Analyze the project

Thoroughly examine the project to understand what it is and how it works. Investigate all of the following:

- **Project root files**: Read package.json, pyproject.toml, Cargo.toml, go.mod, composer.json, Gemfile, or whatever dependency/config files exist. These reveal the tech stack, dependencies, and available scripts.
- **Documentation**: Read any existing README, CONTRIBUTING, or docs files for project purpose and setup instructions.
- **Project structure**: List the top-level directories and key subdirectories to understand how the codebase is organized.
- **Configuration files**: Check for linter configs (eslint, prettier, ruff, etc.), TypeScript configs, build tool configs (webpack, vite, etc.), CI/CD configs (.github/workflows, etc.), and editor configs (.editorconfig, .vscode/).
- **Code patterns**: Sample a few representative source files to identify naming conventions, architectural patterns (MVC, component-based, etc.), import styles, and error handling approaches.
- **Build and run commands**: Identify how to install dependencies, build the project, run it locally, and run tests.
- **Git conventions**: Check recent commit messages for style patterns. Look for branch naming conventions.
- **Environment and secrets**: Note any .env.example or environment variable documentation (never include actual secret values).

## Step 3: Draft the CLAUDE.md

Using everything you learned, draft a CLAUDE.md file with the following sections. Keep it concise and practical -- this file should help Claude work effectively on the project, not be exhaustive documentation.

```markdown
# CLAUDE.md

## Project Overview
(One to three sentences: what this project is, who it serves, and its primary purpose.)

## Tech Stack
(List the language, framework, key libraries, and their versions when relevant.)

## Project Structure
(Brief map of the important directories and what lives in each one. Focus on where a developer would spend most of their time.)

## Coding Conventions
(Naming conventions, file organization patterns, import ordering, formatting rules, and any patterns that are consistently used across the codebase.)

## Build, Test, and Run
(The exact commands to install dependencies, build, run locally, and run tests. Use a simple list or code blocks.)

## Important Notes
(Gotchas, non-obvious decisions, things that would trip someone up. Include any environment setup requirements.)
```

Adjust sections as needed for the specific project. Omit sections that do not apply. Add sections if the project warrants it (for example, a "Deployment" section or an "API Conventions" section).

## Step 4: Present the draft for review

Display the full drafted CLAUDE.md to the user. Explain that this file will be placed at the project root and will be automatically loaded into every future Claude Code conversation, so they should review it carefully.

Ask: "Does this look good? Would you like any changes before I write it to the project root?"

Wait for the user to respond. Do NOT write the file yet.

## Step 5: Write the file (only after approval)

Once the user approves (or after you have made their requested edits):

1. Write the CLAUDE.md file to the project root directory.
2. Confirm that the file was created.
3. Let the user know: "Your CLAUDE.md is ready. Claude Code will automatically read this file at the start of every conversation, giving it persistent context about your project. You can update it anytime as your project evolves."
