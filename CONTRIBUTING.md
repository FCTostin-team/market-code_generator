# Contributing to FCT Market Generator

First off: thanks for taking the time to contribute. You are helping make a practical tool for Factorio economy builders, and that is genuinely awesome.

This document explains how to contribute without guesswork, avoid common review blockers, and ship clean pull requests quickly.

> [!IMPORTANT]
> By participating in this repository, you agree to follow the project `CODE_OF_CONDUCT.md`.

## I Have a Question

Please do **not** use GitHub Issues for usage questions or support chat. Issues are reserved for actionable bugs and feature work.

Use these channels instead:

- FCTostin Telegram chat: https://t.me/FCTostin
- FCTostin YouTube community: https://www.youtube.com/@FCT-Ostin
- Steam group: https://steamcommunity.com/groups/FCTgroup

If your question is still unresolved, open a Discussion (if enabled) or create an Issue only when it can be framed as a clear bug/enhancement.

## Reporting Bugs

Before opening a bug report, please search existing Issues to avoid duplicates.

A high-signal bug report should include:

1. **Environment**
   - OS and version (e.g., `Windows 11`, `Ubuntu 24.04`)
   - Browser and version (e.g., `Chrome 124`)
   - Project revision (`main` commit hash or release)
2. **Steps to Reproduce**
   - Exact, deterministic sequence from fresh page load
   - Specific input values (quality percentages, discount, rows)
3. **Expected Behavior**
   - What should happen, clearly and briefly
4. **Actual Behavior**
   - What actually happened (error, wrong output, visual issue)
5. **Artifacts**
   - Screenshot/GIF for UI issues
   - Generated Lua snippet when output is incorrect
   - Console logs if relevant

Bug report quality directly impacts fix velocity, so detail matters.

## Suggesting Enhancements

Enhancement proposals are welcome, especially for UX, localization, and balancing workflows.

Please include:

- **Problem statement**: what current pain point exists?
- **Proposed solution**: what behavior/API/UI should change?
- **Use cases**: concrete scenarios where this improves workflow.
- **Scope estimate**: small tweak vs larger refactor.

Strong proposals are practical, user-centric, and compatible with static-app constraints.

## Local Development Setup

### Fork and Clone

```bash
# 1) Fork in GitHub UI, then clone your fork
git clone https://github.com/<your-user>/market-code_generator.git
cd market-code_generator

# 2) Add upstream remote
git remote add upstream https://github.com/<upstream-owner>/market-code_generator.git
```

### Run Locally

```bash
# Option A: open index.html directly
# Option B (recommended): run static server
python3 -m http.server 8080
# open http://localhost:8080
```

### Environment Variables

No `.env` is required for current architecture. If a future change introduces config files, update this section and `README.md` in the same PR.

## Pull Request Process

### Branch Naming

Use predictable branch prefixes:

- `feature/<short-description>`
- `bugfix/<issue-or-short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Examples:

- `feature/language-search-improvements`
- `bugfix/discount-rounding-edge-case`
- `docs/readme-rewrite`

### Commit Messages (Conventional Commits)

Use Conventional Commits syntax:

- `feat: add advanced quality presets`
- `fix: resolve incorrect rare-tier multiplier`
- `docs: rewrite getting started section`
- `refactor: simplify dropdown pagination state`
- `chore: update contributor guidelines`

### Keep in Sync with Upstream

Before opening a PR, rebase onto latest default branch:

```bash
git fetch upstream
git checkout main
git rebase upstream/main
```

Then rebase your feature branch as needed.

### PR Description Requirements

Every PR should include:

- Summary of what changed and why
- Linked Issue(s) (e.g., `Closes #123`)
- Testing notes (what you validated locally)
- Screenshots for visible UI/UX changes
- Any follow-up tasks intentionally left out

Small, focused PRs are reviewed and merged faster than mega-bundles.

## Styleguides

This project currently uses a lightweight workflow (no enforced formatter in CI), so contributors should self-police quality.

### General Standards

- Keep code changes minimal and scoped.
- Preserve existing naming style unless refactor is intentional.
- Avoid dead code and commented-out blocks.
- Prefer readable logic over clever one-liners.

### HTML/CSS/JS Guidelines

- Keep markup semantic and accessible (`aria-*`, labels, button text).
- Keep CSS selectors maintainable and avoid over-specific chains.
- Keep JS functions focused and side effects obvious.
- Maintain consistency with current i18n dictionary approach in `profiles/*.js`.

If you add new tooling (ESLint/Prettier/etc.), include config and usage docs in the same PR.

## Testing Expectations

Contributors are expected to validate behavior before requesting review.

Minimum checklist:

```bash
# Repository sanity check
git diff --check

# Manual smoke test server
python3 -m http.server 8080
```

Manual validation should include:

- Generating Lua output with default settings
- Switching languages and verifying translation updates
- Checking item search/pagination flow
- Verifying discount and quality multipliers alter counts correctly
- Copy-to-clipboard and `[code]` toggle behavior

If you add logic-heavy functionality, include targeted tests where practical.

## Code Review Process

- Maintainers review incoming PRs for correctness, clarity, and scope.
- At least one maintainer approval is expected before merge.
- You may be asked for revisions; please address comments with follow-up commits.
- Keep discussion technical and constructive, and mark threads resolved only after updates land.

Review is collaborative, not adversarial. We optimize for stable behavior and maintainable code.

Thanks again for contributing and helping evolve the tool.
