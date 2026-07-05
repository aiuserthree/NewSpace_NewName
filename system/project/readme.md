# 공간 이름 공모전 — Design System

A warm, image-forward design system for the **공간 이름 공모전** (Space Name Contest): a single, mobile-first web page where a church congregation submits name ideas for three newly built / remodeled spaces. The page is shared as a **KakaoTalk** link, filled in on a phone, and closed in under a minute.

> **One product, done well.** This system is deliberately scoped to the contest page — its components, kit, and foundations exist to make that one flow feel calm, trustworthy, and beautiful. It is not a general-purpose kit.

---

## Sources

The entire system was derived from a single planning draft supplied by the user:

- `uploads/설계서 초안.md` — *공간 이름 공모전 웹페이지 기획서 (초안)*. A user-perspective, business-logic-centered plan (screen flow, policy, IA, sample copy). An ASCII-named working copy lives at `uploads/spec-draft.md`.

No codebase, Figma file, brand guide, logo, fonts, or imagery were provided. Everything visual here — palette, type pairing, spacing, motion, iconography — is an **original direction chosen for this brief** and is meant to be reviewed and tuned (see *Open questions* at the bottom).

---

## Using the system

Consumers link one stylesheet and load the compiled bundle:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, SpaceCard, TextField } = window.DesignSystem_60a1b7;
</script>
```

- `styles.css` is an `@import` manifest only; it pulls in every token + font file under `tokens/`.
- Components are React function components, styled entirely through CSS custom properties — no CSS-in-JS, no npm deps beyond React.
- Namespace: **`window.DesignSystem_60a1b7`**.

---

## CONTENT FUNDAMENTALS

The product speaks Korean, in the warm, unhurried register a church would use with its own members.

- **Politeness:** always 존댓말. Guidance and invitations use the soft **~요체** ("제안할 수 있어요", "지어주세요"); confirmations and formal notices use **~습니다** ("제출이 완료되었습니다", "이미 신청하신 분입니다"). Never plain/banmal.
- **Person & collective:** first-person plural — **우리**, **함께**. The hero is "*우리* 공간의 이름을 *함께* 지어주세요." Participation is framed as a shared act, not a form to fill.
- **Tone:** warm, gentle, reassuring. Notices never scold — a duplicate entry is "이미 신청하신 분입니다" (a fact + a helpful next step), not an error. Instructions reduce anxiety ("잠깐이면 참여할 수 있어요", "본인 확인용으로만 사용돼요").
- **Emoji:** none. Exclamation marks are rare and reserved for genuine warmth ("참여해 주셔서 감사합니다!"). No marketing hype, no ALL-CAPS.
- **Casing (Latin):** sentence case. Small structural labels (STEP 1) may be uppercase as an eyebrow, set in Pretendard with wide tracking.
- **Numbers:** the three spaces are numbered ① ② ③ in the display serif. Phone numbers use tabular figures and dashes (010-1234-5678).
- **Brevity:** headlines are one breath; helper text is one sentence. No paragraphs of instructions — the imagery and structure carry the message.
- **Guidance, not examples:** each space gets a *direction* ("청년과 청소년을 위한 액티브한 공간입니다"), never a sample name — by policy, so participant creativity isn't anchored.

Representative strings (see the **Voice & Tone** card): "우리 공간의 이름을 함께 지어주세요" · "각 공간별 1개는 필수, 1개는 선택으로 제안할 수 있어요." · "제안해 주신 이름 중 상위 후보는 추후 현장 스티커 투표로 최종 결정됩니다."

---

## VISUAL FOUNDATIONS

The concept is **"짓다 — to name / to build."** Each space is presented like a page in an architecture monograph: large calm imagery, generous negative space, and a single warm accent, so the *photographs and renderings* carry the colour while the interface stays quiet.

- **Colour:** a warm neutral foundation (ivory *paper*, warm *stone* neutrals, warm near-black *ink*) plus **one** accent — **clay / terracotta** (`--clay-500 #BC5C34`) for anything actionable. Neutrals are all warm (hue ~65) so nothing reads cold beside a photo. Semantic hues (success olive, warning amber, danger brick, info clay) are desaturated to sit inside the palette. Backgrounds are never pure `#fff` and text is never pure `#000`.
- **Type:** **Gowun Batang** (곱은바탕, a soft myeongjo serif) for the human, poetic moments only — the hero line, space names, big confirmations. **Pretendard** for every functional word. Korean body runs a generous line-height (1.6–1.78) with a whisper of negative tracking; display tightens to −0.022em. Words never break mid-syllable (`word-break: keep-all`).
- **Spacing & layout:** 4px base rhythm. Mobile column caps at **440px** with a 20px page gutter. Touch targets are **52px**. Content is single-column and vertical — the whole contest is one scroll after a one-screen info step.
- **Backgrounds:** warm flat ivory, or a soft radial paper→sand wash behind the device. No busy gradients, no meshes, no noise. The only "texture" is the labelled placeholder hatch inside empty image frames.
- **Imagery:** the centrepiece. Photos and renderings sit in fixed-ratio frames with soft radii; over-image text gets a bottom **scrim** (dark gradient), never a flat overlay box. Real imagery is expected to be warm and natural. Where photos are missing, a warm labelled placeholder ("본당 조감도") states what belongs there — we never fabricate imagery.
- **Corner radii:** soft and friendly — inputs & buttons 14px, cards 20px, the space card 28px, pills fully round. Nothing is sharp; nothing is a perfect circle except numerals/badges.
- **Cards:** warm surface (`--surface #FFFDF9`) with either a soft warm shadow (*raised*), a hairline warm border (*flat*), or an inset tray (*sunken*). Shadows are tinted with the deep stone hue — **never neutral grey** — and stay low and diffuse (see **Elevation**). No coloured left-border cards.
- **Borders:** hairline (1–1.5px) in warm stone. Focus is a 1.5px clay border plus a soft clay ring (`--shadow-focus`).
- **Elevation & transparency:** used sparingly. Sticky headers and footers use a translucent paper fill + `backdrop-filter: blur` so content scrolls softly beneath them. Otherwise surfaces are opaque.
- **Motion:** calm, **no bounce**. Entrances fade in while rising 8px; screens cross-fade. Interactions settle on an ease-out curve (`--ease-standard`). **Hover** lifts −2px and/or darkens the fill; **press** shrinks to 0.98 and darkens further. Durations 150–380ms. All motion respects `prefers-reduced-motion`.

---

## ICONOGRAPHY

- **No brand icon set was supplied**, so the system substitutes **[Lucide](https://lucide.dev)** (ISC licensed) — clean, humanist, 2px round-cap strokes that match the soft, calm tone. **Flagged for review:** swap in the church's own marks if any exist.
- Icons are delivered through the **`Icon`** component, which embeds a *curated subset* of Lucide glyphs as inline SVG (so no bundler or CDN icon runtime is required). Available names: arrow-right/left/down, check, check-circle, chevron-down/right, x, phone, image, pencil, share, info, alert-circle, alert-triangle, sparkles, map-pin, loader.
- **Style rules:** stroke, not fill; `currentColor` so icons inherit text colour; default 20px, 2px stroke; decorative by default (`aria-hidden`) unless a `label` is given. Icons are supporting actors — most screens use one or two (a phone prefix, a next arrow, a completion check).
- **No emoji** anywhere in the UI. Numerals ① ② ③ act as the spaces' "icons," set in the display serif.
- Device chrome in the UI kit (status-bar signal/battery) is generic and drawn locally — not part of the brand icon language.

---

## Components

All live under `components/<group>/` as `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, with one `@dsCard` HTML per directory. Reach them at `window.DesignSystem_60a1b7`.

| Component | Group | Role |
|-----------|-------|------|
| **Icon** | core | Curated Lucide glyph, `currentColor`, square |
| **Button** | forms | Primary action — clay `primary`, `secondary`, `ghost`, `soft` |
| **TextField** | forms | 이름 / 연락처 input; required/optional, error, read-only |
| **Card** | display | Base surface — raised / flat / sunken |
| **Badge** | display | 필수 / 선택 / 완료 / 중복 status pills |
| **SectionHeader** | display | Eyebrow + serif title + description (+ numeral) |
| **Notice** | feedback | Inline message banner (duplicate / info / success) |
| **ImageFrame** | media | Fixed-ratio image holder with labelled placeholder |
| **ProgressSteps** | navigation | Compact 2-step flow indicator |
| **SpaceCard** | patterns | **Signature** per-space naming block (image + serif name + inputs) |

### Intentional additions

- **Icon** — the brief defines no icon set, but the screens genuinely need a few glyphs (phone, arrows, check). `Icon` wraps a Lucide subset so iconography is consistent and swappable, rather than scattered ad-hoc SVG. This is the only primitive not implied directly by the plan's screens.

### Starting points

`Button`, `Notice`, and `SpaceCard` are tagged as starting points (see their `.d.ts`), so consuming projects can seed a new design from them.

---

## Fonts (please confirm)

Two typefaces were **chosen for the brief** and loaded from CDN — replace with licensed / self-hosted files when ready:

- **Pretendard** (UI / body) — `--font-sans`, loaded as a variable webfont from jsDelivr.
- **Gowun Batang** (display serif) — `--font-display`, loaded from Google Fonts.

If you already have brand fonts, drop the files into `tokens/` and update `tokens/fonts.css`.

---

## Index / manifest

```
styles.css               @import manifest (link this)
tokens/
  fonts.css              @font-face — Pretendard + Gowun Batang (CDN)
  colors.css             warm neutrals + clay accent + semantic aliases
  typography.css         families, scale, line-height, tracking
  spacing.css            4px scale + layout tokens (column, gutter, heights)
  radius.css             corner radii
  shadow.css             warm-tinted elevation + focus ring
  motion.css             durations, easings, interaction deltas
  base.css               element resets + small text/utility helpers
components/
  core/Icon              forms/Button  forms/TextField
  display/Card  display/Badge  display/SectionHeader
  feedback/Notice        media/ImageFrame
  navigation/ProgressSteps   patterns/SpaceCard
ui_kits/
  contest/               interactive phone recreation of the whole flow
guidelines/              16 foundation specimen cards (Colors · Type · Spacing · Brand)
readme.md                this file
SKILL.md                 Agent-Skill front-matter for reuse
```

Foundation cards (Design System tab): **Colors** (Brand · Clay, Warm Neutrals, Paper & Ink, Semantic) · **Type** (Display · Gowun Batang, UI · Pretendard, Type Scale, Weights & Numerals) · **Spacing** (Scale, Radius, Layout Tokens) · **Brand** (Wordmark, Elevation, Motion, Voice & Tone).

---

## Open questions — help me get this perfect

1. **Fonts:** is Pretendard + Gowun Batang the right voice, or do you have brand fonts to drop in?
2. **Accent colour:** clay/terracotta was chosen to feel warm and architectural. Prefer something else (sage, deep pine, gold)?
3. **Logo:** none was provided — the wordmark is typographic. Is there a church mark to use?
4. **Imagery:** can you share the 본당 조감도 and the 소예배실 / 새가족부실 photos so I can place real images?
5. **Scope:** the plan lists an open item on an edit step and an Excel export. Want either surfaced in the UI?
