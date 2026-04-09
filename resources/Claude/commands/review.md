Review code and provide a structured, educational report. Do NOT modify any files — this command is strictly read-only.

## Determine what to review

- If `$ARGUMENTS` is "staged" or "changes", run `git diff --staged` and review the staged changes.
- If `$ARGUMENTS` is a file path, read that file and review its contents.
- If `$ARGUMENTS` is empty or not provided, run `git diff` to review all uncommitted changes in the working tree.

If there is nothing to review (no diff output, or the file does not exist), say so clearly and stop.

## Structured review

Organize your review into the following sections. Use markdown formatting for clarity.

### Summary
Briefly describe what the code does — its purpose, scope, and how it fits into the project. Keep this to 2–3 sentences so the author gets immediate orientation.

### Strengths
Call out what is done well. Highlight good patterns, clear logic, appropriate use of language features, or solid architecture decisions. Be specific — quote the relevant code or name the function/section.

### Issues
Identify bugs, logic errors, edge cases, or incorrect behavior. Rate each issue with one of the following severity labels:

- **CRITICAL** — will cause failures, data loss, or security vulnerabilities
- **WARNING** — likely to cause problems under certain conditions
- **SUGGESTION** — not broken, but could be improved

For each issue, explain *why* it is a problem and what could go wrong.

### Security
Check for potential security concerns, referencing the OWASP Top 10 where relevant:

- Injection (SQL, command, template)
- Broken authentication or session handling
- Sensitive data exposure (hardcoded secrets, API keys, tokens, passwords)
- Insecure direct object references
- Missing input validation or sanitization
- Cross-site scripting (XSS) or cross-site request forgery (CSRF)

If no security concerns are found, say so — that is a positive finding worth noting.

### Readability
Evaluate naming conventions, code structure, comments, and overall clarity. Consider:

- Are variable and function names descriptive?
- Is the code organized in a logical flow?
- Are there comments where the intent is non-obvious?
- Is there unnecessary complexity that could be simplified?

### Suggestions
Provide specific, actionable improvements. For each suggestion:

1. Explain what to change and why.
2. Include a short code example showing the improved version.

Keep suggestions practical and proportional to the size of the code being reviewed.

## Tone and intent

Be constructive and educational. This review is for someone who is learning — explain the *why* behind your feedback, not just the *what*. Assume good intent from the author. Encourage good habits while gently pointing out areas for growth.

## Important constraints

- **Do NOT modify, write, or create any files.** Only read code and report your findings.
- **Do NOT run any commands that change the repository state** (no `git add`, `git commit`, `git checkout`, etc.).
- You may only use read-only commands: `git diff`, `git diff --staged`, `git status`, `git log`, and file reads.
