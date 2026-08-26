#!/usr/bin/env node
const { execSync } = require('child_process');

let inputData = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
    inputData += chunk;
});

process.stdin.on('end', () => {
    try {
        const input = JSON.parse(inputData);

        // Extract values
        const model = input.model?.display_name || 'Unknown';
        const currentDir = input.workspace?.current_dir || '';
        const ctx = input.context_window || {};
        const totalTokens = ctx.context_window_size || 200000;
        const usedPct = ctx.used_percentage ?? 0;
        const usedTokens = Math.round(totalTokens * usedPct / 100);
        const exceeds200k = input.exceeds_200k_tokens || false;

        // Cost tracking
        const cost = input.cost?.total_cost_usd ?? 0;
        const costStr = cost > 0 ? '$' + cost.toFixed(2) : '';

        // Rate limit usage (Pro/Max only; absent before first API response)
        const rateLimits = input.rate_limits || {};
        const fiveHourPct = rateLimits.five_hour?.used_percentage ?? null;
        const fiveHourReset = rateLimits.five_hour?.resets_at ?? null;
        // Convert fiveHourReset to 24h local time
        const fiveHourResetDate = new Date(fiveHourReset * 1000);
        const sevenDayPct = rateLimits.seven_day?.used_percentage ?? null;

        // Shorten model name
        const shortModel = model.replace(/^Claude /, '');

        // Generate progress bar (10 chars wide)
        const filled = Math.min(10, Math.max(0, Math.floor(usedPct / 10)));
        const bar = '[' + '='.repeat(filled) + ' '.repeat(10 - filled) + ']';

        // Format token counts in 'k' format
        const usedK = Math.round(usedTokens / 1000);
        const totalK = Math.round(totalTokens / 1000);

        // Get git branch
        let gitBranch = '';
        if (currentDir) {
            try {
                gitBranch = execSync('git rev-parse --abbrev-ref HEAD', {
                    cwd: currentDir,
                    encoding: 'utf8',
                    stdio: ['pipe', 'pipe', 'pipe']
                }).trim();
            } catch (e) {
                // Not a git repo or git not available
            }
        }

        // Get project name (supports both Unix / and Windows \ separators)
        const projectName = currentDir ? currentDir.split(/[/\\]/).pop() : '';

        // Color codes
        const CYAN = '\x1b[36m';
        const YELLOW = '\x1b[33m';
        const RED = '\x1b[31m';
        const BLUE = '\x1b[34m';
        const GREEN = '\x1b[32m';
        const MAGENTA = '\x1b[35m';
        const DIM = '\x1b[2m';
        const RESET = '\x1b[0m';

        // Context bar color: red when >80% or exceeding 200k, yellow otherwise
        const barColor = (usedPct > 80 || exceeds200k) ? RED : YELLOW;
        const warnTag = exceeds200k ? RED + ' !!' + RESET : '';

        // Build output
        let output = CYAN + shortModel + RESET;
        output += ' ' + barColor + bar + ' ' + usedPct + '%' + RESET + warnTag;
        output += ' | ' + BLUE + usedK + 'k/' + totalK + 'k' + RESET;

        if (costStr) {
            output += ' | ' + DIM + costStr + RESET;
        }
        if (fiveHourPct !== null) {
            const c = fiveHourPct > 80 ? RED : fiveHourPct > 50 ? YELLOW : DIM;
            output += ' | ' + c + '5h:' + Math.round(fiveHourPct) + '%' + RESET;
        }
        if (fiveHourReset !== null) {
            const c = fiveHourPct > 80 ? YELLOW : fiveHourPct > 50 ? RESET : DIM;
            output += ' ' + c + 'r@' + fiveHourResetDate.getHours() + ':' + fiveHourResetDate.getMinutes().toString().padStart(2, '0') + RESET;
        }
        if (sevenDayPct !== null) {
            const c = sevenDayPct > 90 ? RED : sevenDayPct > 70 ? YELLOW : DIM;
            output += ' | ' + c + '7d:' + Math.round(sevenDayPct) + '%' + RESET;
        }
        if (projectName) {
            output += ' | ' + MAGENTA + projectName + RESET;
        }
        if (gitBranch) {
            output += ' | ' + GREEN + gitBranch + RESET;
        }

        console.log(output);
    } catch (e) {
        console.log('Status line error: ' + e.message);
    }
});
