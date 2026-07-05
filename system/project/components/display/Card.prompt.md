The base surface. `raised` floats on a soft warm shadow, `flat` uses a hairline border, `sunken` is an inset tray for read-only content.

```jsx
<Card>제출 내역이 여기에 표시됩니다.</Card>
<Card variant="flat" padding="lg">…</Card>
<Card variant="sunken" padding="sm">010-1234-5678</Card>
<Card interactive onClick={open}>…</Card>
```

Props: `variant` (raised/flat/sunken), `padding` (none/sm/md/lg), `interactive` (hover lift), `as` (element tag). Composes with SectionHeader, Badge, TextField inside.
