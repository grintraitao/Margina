# Herond Design System

A design system for **Herond Browser** — a privacy-first, Web3-native desktop & mobile browser with a built-in keyless crypto wallet. Tagline: **"Defend · Discover · Decentralize."**

This system captures Herond's aurora brand palette, Plus Jakarta Sans typography, soft card language, and the two product surfaces we have source fidelity on: the **Help Center** (Docusaurus site) and the **Herond Wallet** (in-browser keyless wallet).

## Sources

Built by reading Herond's open help-center codebase. Explore these to go deeper:

- **GitHub — Help Center:** https://github.com/grintraitao/herond-help-center (Docusaurus v3; `src/css/custom.css`, `src/pages/index.js`, brand assets in `static/img/brand/`). This was the primary source of truth for colors, type, the homepage layout, and the logo.
- **Live help center:** https://herondlabs.github.io/herond-help-center/ · custom domain `help.herond.org`
- **Product site:** https://herond.org · **Download:** https://herond.org/download
- Social: [Facebook](https://www.facebook.com/HerondBrowser) · [X](https://x.com/HerondBrowser) · [Discord](https://discord.com/invite/Herond-Browser) · [Telegram](https://t.me/herond_browser)

Wallet UI was reconstructed from product screenshots in the help-center docs (`static/img/herond-wallet/…`). Treat the wallet kit as a faithful cosmetic recreation, not a code-exact copy.

## Products represented

1. **Desktop Browser** — Chromium-based, dark-first chrome, integrated Shield (ad/tracker blocking, TOR, SSL checks) and a wallet sidebar.
2. **Herond Wallet** — non-custodial **keyless** wallet (MPC-TSS, no seed phrase), multi-chain (Solana, Ethereum, Bitcoin, Polygon…), account abstraction. Send / Receive / Buy / Swap.
3. **Help Center** — Docusaurus documentation site, dark-first with light mode, 51 articles across 6 categories.

---

## Content fundamentals

How Herond writes copy:

- **Voice:** second person, warm and direct. Addresses the reader as **"you"** and the brand as **"Herond"** or **"we"** ("Our team is here to help", "Herond never stores it"). Reassuring on security and privacy.
- **Tone:** confident, plain-spoken, lightly aspirational. Crypto/Web3 concepts are explained simply ("No seed phrase needed"). Marketing flourishes are sparse but present ("embrace the future of decentralized transactions").
- **Casing:** Title Case for page/section titles and category names ("How to Create Your Wallet on Desktop", "Herond Wallet"). Sentence case for body and helper text. **UPPERCASE with wide letter-spacing** for eyebrows/overlines and the tagline ("POPULAR ARTICLES", "DEFEND · DISCOVER · DECENTRALIZE").
- **Product nouns** are capitalized and brand-prefixed: **Herond Browser, Herond Wallet, Herond Shield, Herond Account, Keyless Wallet**.
- **Structure:** how-to articles use numbered **Step 1 / Step 2** headings, short imperative sentences, and admonition callouts (`:::tip`, `:::info`).
- **Punctuation:** middot `·` separates tagline words. Em-dashes for asides.
- **Emoji:** **not used** in product copy or UI. Iconography is line-icon based, never emoji.
- **Examples:** "How can we help you?" (hero) · "Can't find what you're looking for? Our team is here to help." (CTA) · "Your password stays on your device only. Herond never stores it." (security note).

---

## Visual foundations

- **Color & vibe:** an **aurora** palette — deep blue → cyan → violet → pink. Primary is **Blue Sky `#3373F6`** in light mode, **Ozone `#00b3ED`** (cyan) in dark mode. Accents: Violet `#6b33fa`, Pink `#ff4070`, Teal `#00CCC0`. Dark surfaces are **Cosmic Blue `#0F1A35`** (bg) and **Midnight `#17234B`** (cards). Light bg is off-white `#F5F5F7` on white cards. The product is **dark-first**; light mode is fully supported.
- **Gradients:** used as a **brand signature**, not a default background. The aurora gradient appears in the logo, occasional accent bars, and the wallet hero. Backgrounds themselves are flat color overlaid with subtle **radial "aurora glow"** washes (two soft blue/violet radials), never loud full-bleed gradients.
- **Typography:** **Plus Jakarta Sans** for everything (400–800). Tight letter-spacing on large headings (`-1px` on the 42px hero). Monospace (JetBrains Mono) only for addresses, hashes, and numeric/code specimens. Overlines are 11px, 700, uppercase, `2px` tracking.
- **Spacing:** 4px base unit. Generous section padding (48–72px) on marketing/docs; compact 12–16px rows in the wallet.
- **Corner radii:** soft and rounded throughout — 8px buttons/inputs, **14px cards**, 20px large surfaces/modals, full pills for chips and the wallet's network selectors and Send/Receive/Buy/Swap actions.
- **Cards:** white (or Midnight in dark), **1px subtle border**, soft low-contrast shadow (`0 1px 3px rgba(15,26,53,.08)`). On hover (interactive cards) they **lift -3px**, gain a larger soft shadow, and the border tints toward the category accent — an animated arrow slides in. No colored-left-border cards.
- **Shadows:** soft and blue-tinted, never harsh black. Elevation ramps sm → xl. Dark mode adds a faint violet **glow** on hover instead of a drop shadow.
- **Borders:** hairline. `#e5e7eb` light; `rgba(255,255,255,0.06–0.10)` dark.
- **Transparency & blur:** **frosted glass** (`backdrop-filter: blur(18px)` + saturate) on the navbar and overlays. The wallet uses translucent white fills over the dark aurora.
- **Animation:** subtle and quick. Durations 0.15–0.32s on an ease-out curve (`cubic-bezier(.22,1,.36,1)`). Cards translate up, arrows fade+slide, tab underline slides. No bounces, no infinite decorative loops.
- **Hover states:** primary buttons darken; ghost buttons pick up a subtle surface fill; icon buttons tint and fill. **Press** shrinks (`scale 0.92–0.97`).
- **Imagery:** product screenshots (browser UI, wallet) on neutral or dark backgrounds; cool-toned. The brand mark is a **kingfisher glyph** in the aurora gradient.

---

## Iconography

- **Primary icon set: [Lucide](https://lucide.dev)** (`lucide-react` in the codebase; `lucide` UMD via CDN here). Stroke style, ~1.8–2px weight, rounded caps. Used for category cards (`monitor`, `wallet`, `user-circle`, `shield-check`, `globe`, `palette`), wallet actions, and chrome.
- Crypto/chain logos appear as small circular token marks in the wallet (recreated here as colored coin badges with the asset glyph, since brand-exact token logos aren't redistributed in this system).
- **Emoji: never used.** No unicode-glyph icons except currency marks (₿, Ξ, ₮) inside coin badges.
- **Logo:** `assets/logo.svg` — the aurora kingfisher glyph. `assets/favicon.svg` / `assets/logo-glyph.png` for marks. Pair with the "Herond" wordmark in Plus Jakarta Sans ExtraBold.
- To use Lucide in a page: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="wallet"></i>` + `lucide.createIcons()`. See any UI-kit `*.jsx` for the React wrapper pattern.

---

## Index / manifest

**Tokens** (`styles.css` → `tokens/`)
- `tokens/colors.css` — brand primitives, blue & gray ramps, status, aurora gradients, light + dark semantic aliases
- `tokens/typography.css` — Plus Jakarta Sans / JetBrains Mono, type scale, weights, tracking
- `tokens/spacing.css` — 4px spacing scale, radii, layout widths
- `tokens/effects.css` — shadows, glows, glass blur, motion curves
- `tokens/fonts.css` — webfont import

**Components** (`components/`) — namespace `window.HerondDesignSystem_043536`
- `core/` — **Button, IconButton, Badge, Avatar, Switch, Card**
- `forms/` — **Input**
- `navigation/` — **Tabs**
- `wallet/` — **NetworkPill, TokenRow**
- `help/` — **CategoryCard**

**UI kits** (`ui_kits/`)
- `help-center/` — dark-first docs homepage + article view, theme toggle, ⌘K search
- `herond-wallet/` — in-browser keyless wallet sidebar (balance, Send/Receive/Buy/Swap, token list, send/receive sheets)

**Foundations** (`guidelines/`) — specimen cards for the Design System tab (colors, type, spacing, radius/elevation, brand logo & glow).

**Assets** (`assets/`) — logo, favicon, glyph, social card, product screenshots.

---

## Caveats

- **Font:** Plus Jakarta Sans & JetBrains Mono load from Google Fonts (the codebase's own approach). They are not bundled as local binaries, so the compiler reports "Fonts: (none)" — runtime rendering is unaffected. Ask if you want self-hosted font files.
- **Wallet kit** is a cosmetic recreation from screenshots; token logos are stylized coin badges, not official marks.
