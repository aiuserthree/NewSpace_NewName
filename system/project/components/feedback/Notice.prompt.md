Inline message banner — fully tinted (no bare coloured left-border). Drives the "이미 신청하신 분입니다" duplicate case and info/success messages.

```jsx
<Notice variant="info" title="이미 신청하신 분입니다"
  action={<Button size="sm" variant="soft" iconLeft="phone">내용 확인하기</Button>}>
  같은 번호로 이미 참여하셨어요. 아래에서 제출한 내용을 확인할 수 있어요.
</Notice>

<Notice variant="success" title="제출이 완료되었습니다">참여해 주셔서 감사합니다!</Notice>
```

Variants: info · success · warning · danger (each sets a default glyph). `title`, body via children, `icon` override, `action` slot, `onClose` for a dismiss button.
