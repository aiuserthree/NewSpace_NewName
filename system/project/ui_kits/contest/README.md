# Contest App — UI Kit

An interactive, mobile-first recreation of the **공간 이름 공모전** (Space Name Contest) web page — the single product this design system serves. Shared to the congregation as a KakaoTalk link, so it is designed phone-first.

Open `index.html` for the full click-through inside a device frame.

## Flow

```
인트로 ──[참여 시작]──▶ 신청자 정보 ──[다음]──┬─(신규)─▶ 이름 제출 ──[제출하기]──▶ 제출 완료
                                              │                                        │
                                              └─(중복)─▶ 이미 신청 안내 ──[내용 확인하기]─┐  └─[내 제출 내용 보기]─┐
                                                                                        ▼                        ▼
                                                                                      내용 조회 (읽기 전용) ◀──────┘
```

- **Phone number is the identity key.** Entering a number that already submitted routes to the duplicate notice → read-only 조회.
- **Try it:** the number `010-1234-5678` is pre-seeded as an existing submission, so you can exercise the duplicate / lookup path immediately. Any other 010-number is treated as new.
- Submission = final. There is no edit step (per the brief's current policy).

## Screens (files)

| File | Screen | Notes |
|------|--------|-------|
| `IntroScreen.jsx`    | 인트로       | Tone-setting hero, three-space preview, 참여 시작 |
| `InfoScreen.jsx`     | 신청자 정보  | 이름 + 연락처; validates format; shows duplicate notice |
| `SubmitScreen.jsx`   | 이름 제출    | Three `SpaceCard`s (필수 1 + 선택 1 each); required validation |
| `CompleteScreen.jsx` | 제출 완료    | Confirmation + 2차 투표 안내 |
| `LookupScreen.jsx`   | 내용 조회    | Read-only submission, reached from duplicate or completion |
| `AppHeader.jsx`      | —            | Shared top bar (back · wordmark · progress) |
| `index.html`         | —            | Device frame + flow orchestration + kit CSS |

## Composition

Every screen is built from the design system's own components — `Button`, `TextField`, `SpaceCard`, `Notice`, `SectionHeader`, `Badge`, `Card`, `ProgressSteps`, `Icon` — via `window.DesignSystem_60a1b7`. No component logic is re-implemented here; the screens are thin compositions. Layout-only CSS lives in `index.html`.

Images are intentionally empty `ImageFrame` placeholders (본당 조감도 / 소예배실·새가족부실 사진). Drop real photos in by passing `src` to the `SpaceCard`s once the church provides them.
