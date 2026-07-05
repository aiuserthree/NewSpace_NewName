Compact step indicator for the two-step flow. Completed steps show a check, the current step is clay-filled with a focus ring.

```jsx
<ProgressSteps steps={['신청자 정보', '이름 제출']} current={1} />
<ProgressSteps steps={[{ label: '정보' }, { label: '제출' }, { label: '완료' }]} current={2} />
```

`steps` accepts strings or `{ label }`; `current` is the zero-based active index. Keep labels short — they sit under each dot on one line.
