Opens a screen or space section: optional numeral, uppercase eyebrow, serif title, supporting description.

```jsx
<SectionHeader
  eyebrow="STEP 2"
  title="이름을 지어주세요"
  description="각 공간별 1개는 필수, 1개는 선택으로 제안할 수 있어요." />

<SectionHeader numeral="①" eyebrow="본당 · 신축" title="본당" size="lg"
  description="조감도를 보며 새 본당의 이름을 상상해 보세요." />
```

`align` (left/center), `size` (sm/md/lg) scales the serif title, `as` sets the heading tag. Title renders in Gowun Batang; keep it short.
