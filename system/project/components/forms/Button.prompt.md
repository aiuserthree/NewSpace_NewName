The primary action control — clay-filled `primary` for the one key action per screen, with `secondary` / `ghost` / `soft` for lesser actions. Full-width `lg` is the mobile default.

```jsx
<Button fullWidth iconRight="arrow-right">다음</Button>
<Button variant="secondary" iconLeft="phone">내용 확인하기</Button>
<Button variant="ghost" size="sm">닫기</Button>
<Button fullWidth loading>제출 중…</Button>
```

Variants: `primary` (clay fill), `secondary` (bordered paper), `ghost` (transparent), `soft` (clay tint). Sizes: `sm` 40 · `md` 48 · `lg` 52. Props: `fullWidth`, `disabled`, `loading` (spinner), `iconLeft` / `iconRight` (Icon name or node), `href` (renders as `<a>`). Use exactly one `primary` per view; press shrinks slightly, hover lifts.
