The help-center homepage category card: accent-tinted icon tile, article count, name, description, and an arrow that slides in on hover (lifts -3px).

```jsx
<CategoryCard icon={<Wallet size={24} strokeWidth={1.8} />}
  name="Herond Wallet" count={10} accent="#6b33fa"
  description="Create, manage & secure your wallet" href="#" />
```

Each category uses its own `accent` (Browser #3373F6, Wallet #6b33fa, Account #00b3ED, Shield #ff4070, Ecosystem #00CCC0, Personalization #EC4899). Pair with Lucide icons.
