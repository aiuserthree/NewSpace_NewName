---
name: gonggan-contest-design
description: Use this skill to generate well-branded interfaces and assets for the 공간 이름 공모전 (Space Name Contest) — a warm, image-forward, Korean, mobile-first church web page — for production or throwaway prototypes/mocks. Contains design guidelines, colours, type, fonts, iconography, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Orientation

- **Brand voice:** warm, polite Korean 존댓말 (soft ~요체 for guidance, ~습니다 for confirmations), first-person plural (우리·함께), no emoji. See `guidelines/brand-voice.html` and the CONTENT FUNDAMENTALS section of `readme.md`.
- **Look:** warm ivory paper, one clay/terracotta accent, images front-and-centre, soft radii, calm no-bounce motion. See the VISUAL FOUNDATIONS section.
- **Tokens:** link `styles.css` (an `@import` manifest). Everything is a CSS custom property — `--clay-500`, `--surface-card`, `--font-display`, etc.
- **Components:** React function components in `components/<group>/`. After the compiler runs, load `_ds_bundle.js` and read `window.DesignSystem_60a1b7`. Prompts for each live in `Name.prompt.md`.
- **Full product:** `ui_kits/contest/` is an interactive recreation of the whole flow (인트로 → 정보 입력 → 이름 제출 → 완료, plus 조회) — the best reference for composing screens.

## Notes

- Fonts (Pretendard, Gowun Batang) and iconography (Lucide) were chosen for the brief, not supplied by the brand — confirm or replace before production.
- No logo exists; render the name typographically (Gowun Batang) as in `guidelines/brand-wordmark.html`.
- Imagery is placeholder — pass real `src` to `ImageFrame` / `SpaceCard` when photos are available; never fabricate imagery.
