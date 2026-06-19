Text field with optional leading icon, label, helper and error states. Used for search, password, and wallet address entry.

```jsx
<Input label="Password" type="password" placeholder="Enter your password" helper="At least 10 characters" />
<Input leadingIcon={<Search size={16} />} placeholder="Search the web" />
<Input label="Amount" error="Insufficient balance" trailingSlot={<span>MAX</span>} />
```

Focus shows a Blue Sky ring; `error` turns the border pink and shows the message. Sizes `sm | md`.
