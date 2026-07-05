The image-forward core. Shows a rendering/photo at a fixed ratio, or a warm labelled placeholder when `src` is missing (the church supplies real 조감도 / 사진 later). Overlay a name over imagery with `scrim`.

```jsx
<ImageFrame ratio="16 / 10" label="본당 조감도" sublabel="이미지를 준비 중이에요" />

<ImageFrame src={photo} alt="소예배실" ratio="4 / 3" radius="xl" scrim>
  <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>소예배실</h3>
</ImageFrame>
```

`ratio` is any CSS aspect-ratio string, `radius` none/sm/md/lg/xl, `caption` prints below. Always give real photos an `alt`.
