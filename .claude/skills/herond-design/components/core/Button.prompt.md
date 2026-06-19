Brand action button — solid Blue Sky primary, used for every primary CTA across Herond (Download, Get Started, Send/Swap).

```jsx
<Button variant="primary" size="md">Get Started</Button>
<Button variant="secondary">Import Wallet</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger" pill>Remove</Button>
```

Variants: `primary` (solid), `secondary` (outline), `ghost` (text), `danger` (pink). Sizes `sm | md | lg`. Use `pill` for the wallet's rounded Send/Receive/Buy/Swap actions. Pass `leadingIcon` / `trailingIcon` with a Lucide icon element. Has built-in hover and press (scale 0.97) states.
