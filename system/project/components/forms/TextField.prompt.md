Single-line input for the applicant screen (이름 / 연락처) and — in `readOnly` form — the lookup screen. Label, required/optional markers, helper + error messaging are built in.

```jsx
<TextField label="이름" required placeholder="이름을 입력해 주세요" />
<TextField label="연락처" required type="tel" inputMode="numeric"
  prefix="phone" hint="본인 확인용으로만 사용돼요" placeholder="010-0000-0000" />
<TextField label="연락처" readOnly value="010-1234-5678" />
<TextField label="이름" error="이름을 입력해 주세요" />
```

`required` shows "· 필수", `optional` shows "· 선택". `prefix` takes an Icon name or node. `error` turns the border red and replaces `hint`. `readOnly` renders the sunken tray style for read-only display. Spreads native input props (`type`, `inputMode`, `value`, `onChange`, `maxLength`…).
