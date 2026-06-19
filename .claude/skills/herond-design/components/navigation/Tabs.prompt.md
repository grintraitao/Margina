Underline tab bar with the Blue Sky active indicator. Controlled.

```jsx
const [tab, setTab] = React.useState('tokens');
<Tabs
  value={tab}
  onChange={setTab}
  tabs={[{ id: 'tokens', label: 'Tokens' }, { id: 'nfts', label: 'NFTs', count: 3 }]}
/>
```

Tabs accept plain strings or `{ id, label, count }`. Active label goes bold with a sliding underline.
