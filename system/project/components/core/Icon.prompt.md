Inline SVG icon from a curated Lucide set — use it wherever the UI needs a glyph; it inherits `currentColor` and sizes square.

```jsx
<Icon name="arrow-right" size={20} />
<Icon name="phone" size={18} style={{ color: 'var(--text-muted)' }} />
<Icon name="check-circle" size={28} label="완료" style={{ color: 'var(--success)' }} />
```

Names: arrow-right · arrow-left · arrow-down · check · check-circle · chevron-down · chevron-right · x · phone · image · pencil · share · info · alert-circle · alert-triangle · sparkles · map-pin · loader. `size` (default 20) and `strokeWidth` (default 2) are numbers; pass `label` to expose it to assistive tech (otherwise it is aria-hidden). Icons are decorative substitutes — swap in the church's own marks when available.
