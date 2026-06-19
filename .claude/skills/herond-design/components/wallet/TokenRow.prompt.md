A single asset row for the wallet portfolio list — token icon, name + network, balance and fiat value with an optional price delta.

```jsx
<TokenRow icon="/sol.png" symbol="SOL" name="Solana"
  network="SOL on Solana Mainnet Beta" amount="36.27 SOL" fiat="$4,260.66" change={1.4} />
<TokenRow symbol="ETH" name="Ethereum" network="Ethereum Mainnet" amount="2.98 ETH" fiat="$10,983.00" change={-2.1} />
```

Positive `change` renders green (up), negative pink (down). Row tints on hover when `onClick` is set.
