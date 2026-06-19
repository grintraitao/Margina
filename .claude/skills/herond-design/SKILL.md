---
name: herond-design
description: Use this skill to generate well-branded interfaces and assets for Herond Browser (a privacy-first Web3 browser with a built-in keyless wallet), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** Herond Browser — "Defend · Discover · Decentralize." Privacy-first, Web3-native, dark-first.
- **Tokens:** link `styles.css` (imports everything under `tokens/`). Primary `#3373F6` (Blue Sky) / `#00b3ED` (Ozone, dark). Aurora accents: violet `#6b33fa`, pink `#ff4070`, teal `#00CCC0`. Dark surfaces `#0F1A35` / `#17234B`.
- **Type:** Plus Jakarta Sans (400–800); JetBrains Mono for addresses/hashes.
- **Components:** load `_ds_bundle.js`, read from `window.HerondDesignSystem_043536` (Button, IconButton, Badge, Avatar, Switch, Card, Input, Tabs, NetworkPill, TokenRow, CategoryCard). Each has a `.prompt.md` with usage.
- **Icons:** Lucide (stroke, ~1.8px). Never emoji.
- **UI kits:** `ui_kits/help-center/` (docs) and `ui_kits/herond-wallet/` (keyless wallet) are working references to copy from.
- **Voice:** second person, warm, plain-spoken; Title Case headings, uppercase tracked overlines.

See `readme.md` for the full content + visual foundations.
