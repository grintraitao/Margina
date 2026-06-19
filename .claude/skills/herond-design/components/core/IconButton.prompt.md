Icon-only button for toolbars, the wallet header, and browser chrome.

```jsx
<IconButton ariaLabel="Settings"><Settings size={18} /></IconButton>
<IconButton variant="soft" round><Wallet size={18} /></IconButton>
<IconButton active ariaLabel="Portfolio"><Briefcase size={18} /></IconButton>
```

Variants: `ghost` (default, transparent), `solid` (Blue Sky fill), `soft` (tinted). Sizes `sm | md | lg`. Pass `round` for circular. Built-in hover + press (scale 0.92). Always provide `ariaLabel`.
