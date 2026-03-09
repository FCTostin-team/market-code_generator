# <a href="https://github.com/OstinUA" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/OstinUA/Image-storage/main/Factorio/Gear-silhouette-of-the-Factorio-logo.png" width="32" valign="middle" alt="telegram:FCTostin"></a> FCT Market Generator <a href="https://github.com/OstinUA"><img align="right" src="https://img.shields.io/badge/OstinUA-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>

![Factorio: 2.0+](https://img.shields.io/badge/Factorio-2.0%2B%20%2F%20Space%20Age-orange?style=for-the-badge)

![Platform: Web](https://img.shields.io/badge/Platform-Web_App-0ea5e9?style=for-the-badge)
[![Frontend: Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)](script.js)
[![Styles: CSS3](https://img.shields.io/badge/Styles-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](style.css)
[![Markup: HTML5](https://img.shields.io/badge/Markup-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](index.html)
![Status: Active](https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge)
![Coverage: Manual](https://img.shields.io/badge/Coverage-Manual%20Validation-lightgrey?style=for-the-badge)
[![i18n](https://img.shields.io/badge/i18n-multi--language-2ea44f?style=for-the-badge)](#features)

`FCT Market Generator` is a browser-based utility that compiles user-defined trade rows into a single Lua command for spawning a fully configured `market` entity in Factorio. It is optimized for fast iteration, high-volume offer generation, and quality-aware balancing workflows used by server admins, scenario builders, and economy nerds.

> [!IMPORTANT]
> This project is a zero-backend static app. Open it locally or deploy to any static hosting provider and it works out of the box.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Technical Notes](#technical-notes)
  - [Project Structure](#project-structure)
  - [Key Design Decisions](#key-design-decisions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Configuration](#configuration)
- [Community and Support](#community-and-support)
- [Support the Development](#support-the-development)
- [License](#license)
- [Contacts](#contacts)

## Features

- **Lua market command generation**: Builds a complete `/c` script that creates a market near player position and registers all generated offers.
- **Bidirectional trade row model**: Each row supports `price` and `offer` item data with independent counts and quality settings.
- **Quality-aware price scaling**: Applies configurable multipliers for `normal`, `uncommon`, `rare`, `epic`, and `legendary` tiers.
- **Global discount pipeline**: Instantly applies percentage discounting across generated offers without touching each row manually.
- **Optional row-pair reduction mode**: Toggle to hide every second sentence for compact trade construction workflows.
- **Searchable item picker with pagination**: Includes a large Factorio item dataset and UX that scales to long item catalogs.
- **Multilingual UI profiles**: Ships with multiple language packs and remembers selected language in `localStorage`.
- **Clipboard-ready output**: One-click copy and optional `[code]...[/code]` tag wrapping for forum/chat publishing.
- **Space Age-ready data model**: Includes modern Factorio 2.0 and expansion-era entities/components.

> [!TIP]
> If you build economy presets often, keep your quality percentages and discount strategy stable, then only swap item rows per market theme.

## Technology Stack

Core runtime and implementation layers:

- **HTML5** for layout, forms, and semantic structure.
- **CSS3** for responsive styling and interaction states.
- **Vanilla JavaScript (ES6+)** for state, business logic, i18n switching, filtering, and Lua serialization.
- **Factorio Lua command output** as integration target (`/c` console command).

No framework, no bundler, no server runtime. The stack is intentionally lightweight and portable.

## Technical Notes

### Project Structure

```text
.
├── index.html            # Main UI shell and static script/profile includes
├── style.css             # Layout, controls, modal, and visual styles
├── script.js             # Item catalog + generation, filtering, i18n glue, clipboard helpers
├── profiles/             # Language dictionaries (ru, en, uk, kk, cs, nl, sv, de, pl, fr, zh, ja)
├── README.md             # Project documentation
├── CONTRIBUTING.md       # Contribution workflow and quality gates
├── CODE_OF_CONDUCT.md    # Community behavior expectations
└── LICENSE               # Apache-2.0 license text
```

### Key Design Decisions

1. **Static-first architecture**
   Keeps onboarding friction close to zero and makes deployment trivial (GitHub Pages / Netlify / any CDN).

2. **Single-file business logic (`script.js`)**
   Centralizes generation logic so contributors can reason about offer serialization quickly.

3. **Data-driven item selection**
   Item definitions are represented as structured objects (`icon`, `product`, `count`) to simplify filtering and rendering.

4. **Human-configurable market balancing**
   Quality percentages and discount are not hardcoded constants; users can tune economy behavior on the fly.

5. **Localization through profile scripts**
   Language dictionaries are loaded as separate files, enabling low-risk incremental translation updates.

> [!NOTE]
> This is intentionally not over-engineered. The current model prioritizes maintainability for a small contributor surface and fast feature shipping.

## Getting Started

### Prerequisites

You only need:

- A modern browser (`Chrome`, `Firefox`, `Edge`, `Safari` recent versions).
- `git` (optional, if you want to clone and contribute).
- Optional static server for local development convenience:
  - `python -m http.server`
  - `npx serve`
  - VS Code Live Server

### Installation

```bash
# 1) Clone repository
git clone https://github.com/<your-org-or-user>/market-code_generator.git

# 2) Enter project
cd market-code_generator

# 3) Run as plain static app (option A)
# just open index.html in browser

# 4) Run with local static server (option B, recommended)
python3 -m http.server 8080
# then open http://localhost:8080
```

> [!WARNING]
> If you open files via `file://` and browser policies block some interactions, run a local server instead.

## Testing

This repo currently relies on manual validation and sanity checks. Suggested local checks:

```bash
# Validate repository has no whitespace/conflict issues
git diff --check

# Quick static smoke-run
python3 -m http.server 8080
# open app, generate code, copy output, switch languages, search item, verify discount math
```

Recommended validation matrix:

- Verify Lua output starts with `/c local player = game.player ...`.
- Verify non-`normal` quality adds `quality = "..."` fields.
- Verify discount changes final counts as expected.
- Verify language switch persists after reload.
- Verify item modal search and pagination behavior.

## Deployment

Because the app is static, deployment is straightforward:

### Option A: GitHub Pages

1. Push repository to GitHub.
2. Enable Pages for branch (`main`/`master`) and root folder.
3. Use generated URL as production endpoint.

### Option B: Netlify / Vercel Static

1. Connect repository.
2. Build command: **none**.
3. Publish directory: repository root.
4. Deploy.

### Option C: Any Web Server / CDN

Upload `index.html`, `style.css`, `script.js`, and `profiles/` directory as static assets.

> [!CAUTION]
> Keep `profiles/*.js` paths intact. Renaming or flattening without updating `<script>` tags will break localization.

## Usage

Typical workflow:

```text
1. Set quality multipliers (normal..legendary)
2. Set global discount percentage
3. Define even number of offer rows
4. Pick item + count + quality for price and offer sections
5. Click "Refresh Code"
6. (Optional) wrap output into [code] tags
7. Copy and paste into Factorio console
```

Example generated command shape:

```lua
/c local player = game.player
local surface = player.surface
local market_location = {x = player.position.x, y = player.position.y - 3}
local market = surface.create_entity{name = "market", position = market_location, force = player.force}
local items = {
  {price = {{name = "coin", amount = 100}}, offer = {type = "give-item", item = "iron-plate", count = 50}},
  {price = {{name = "steel-plate", amount = 10}}, offer = {type = "give-item", item = "coin", count = 200}}
}
for _, item in ipairs(items) do market.add_market_item(item) end
```

## Configuration

There is no `.env` requirement right now. Runtime behavior is controlled through UI fields and browser storage.

Primary runtime knobs:

- `quality-percentages` input: comma-separated scaling list for quality tiers.
- `discount-percentage` input: global discount (0..100).
- `num-rows` input: row amount (`step=2` by default).
- `toggle-second-sentences` checkbox: hide every second row sentence mode.
- `localStorage` key: `market_generator_lang` for persisted language preference.

If you introduce environment-level config later (CI, hosting, analytics), document it here with default values and security notes.

## Community and Support

Project created with the support of the FCTostin community.

[![YouTube](https://img.shields.io/badge/YouTube-Channel-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@FCT-Ostin)
[![Telegram](https://img.shields.io/badge/Telegram-Join_Chat-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/FCTostin)
[![Steam](https://img.shields.io/badge/Steam-Join_Group-1b2838?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/groups/FCTgroup)

## Support the Development

[![Patreon](https://img.shields.io/badge/Patreon-Support-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/c/OstinFCT)
[![Boosty](https://img.shields.io/badge/Boosty-Donate-F15F2C?style=for-the-badge&logo=boosty&logoColor=white)](https://boosty.to/ostinfct)

## Contacts

- GitHub: [OstinUA](https://github.com/OstinUA)
- Team page: [FCTostin-team](https://github.com/FCTostin-team)
- Contribution process: see [`CONTRIBUTING.md`](CONTRIBUTING.md).
