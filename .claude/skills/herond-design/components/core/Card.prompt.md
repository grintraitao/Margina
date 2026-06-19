The core surface. White (or Midnight in dark mode), 14px radius, subtle border and soft shadow.

```jsx
<Card>Static content</Card>
<Card interactive onClick={...}>Hover lifts -3px with accent border</Card>
<Card glow interactive as="a" href="#">Aurora glow wash</Card>
```

Use `interactive` for clickable cards (the help-center category cards). Use `glow` to add the brand aurora radial wash. Set `as="a"` to render as a link. Default padding 24px.
