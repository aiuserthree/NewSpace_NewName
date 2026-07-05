The signature pattern — one per contest space. A full-bleed rendering/photo with the space name in the display serif, a numeral + kind pill, guiding copy, and the 필수 1 + 선택 1 name inputs in a sunken tray. Composes ImageFrame + TextField + Card.

```jsx
<SpaceCard
  numeral="①" name="본당" kind="신축 · 조감도"
  imageLabel="본당 조감도" imageSublabel="이미지를 준비 중이에요"
  description="새로 지어질 본당의 이름을 상상해 보세요."
  requiredValue={a} optionalValue={b}
  onFieldChange={(slot, v) => setForm(slot, v)} />

/* Read-only, for the lookup screen */
<SpaceCard numeral="②" name="소예배실" readOnly
  requiredValue="빛으로" optionalValue="청년홀" />
```

Pass `src` for a real image (otherwise the labelled placeholder shows). `onFieldChange` makes the two inputs controlled; omit it for uncontrolled. `readOnly` swaps inputs for submitted-name display. Best at a 390–440px mobile column width.
