import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * ImageFrame — the image-forward heart of the design. Holds a rendering /
 * photo at a fixed aspect ratio, or, when no `src` is given, a warm labelled
 * placeholder (the church supplies real 조감도 / 사진 later). Optional bottom
 * scrim lets overlaid children (space name, numeral) sit legibly over imagery.
 */

const RADII = { none: '0', sm: 'var(--radius-sm)', md: 'var(--radius-md)',
  lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' };

const CSS = `
.ds-imgframe { margin: 0; }
.ds-imgframe__media { position: relative; overflow: hidden; width: 100%;
  background: var(--surface-inset); }
.ds-imgframe__media img { position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; display: block; }
.ds-imgframe__ph { position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 8px; text-align: center; padding: var(--space-5);
  color: var(--stone-400);
  background-color: var(--surface-inset);
  background-image:
    linear-gradient(135deg, color-mix(in oklab, var(--stone-100) 70%, transparent), transparent 60%),
    repeating-linear-gradient(45deg, transparent 0 11px, color-mix(in oklab, var(--stone-300) 22%, transparent) 11px 12px);
}
.ds-imgframe__ph-label { font-family: var(--font-sans); font-size: var(--text-sm);
  font-weight: var(--weight-semibold); color: var(--stone-500); letter-spacing: var(--tracking-tight); }
.ds-imgframe__ph-sub { font-family: var(--font-sans); font-size: var(--text-2xs); color: var(--stone-400); }
.ds-imgframe__scrim { position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(to top, rgba(26,20,12,0.72) 0%, rgba(26,20,12,0.28) 34%, transparent 62%); }
.ds-imgframe__content { position: absolute; inset: 0; display: flex; flex-direction: column;
  justify-content: flex-end; padding: var(--space-5); }
.ds-imgframe__caption { margin-top: var(--space-2); font-family: var(--font-sans);
  font-size: var(--text-xs); color: var(--text-muted); letter-spacing: var(--tracking-tight); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-imgframe-style')) {
  const el = document.createElement('style');
  el.id = 'ds-imgframe-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function ImageFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  radius = 'lg',
  label = '이미지를 넣어 주세요',
  sublabel,
  scrim = false,
  caption,
  objectPosition,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const r = RADII[radius] || RADII.lg;
  return (
    <figure className={['ds-imgframe', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <div className="ds-imgframe__media" style={{ aspectRatio: ratio, borderRadius: r }}>
        {src
          ? <img src={src} alt={alt} style={objectPosition ? { objectPosition } : undefined} />
          : (
            <div className="ds-imgframe__ph">
              <Icon name="image" size={26} />
              <span className="ds-imgframe__ph-label">{label}</span>
              {sublabel && <span className="ds-imgframe__ph-sub">{sublabel}</span>}
            </div>
          )}
        {scrim && <div className="ds-imgframe__scrim" />}
        {children && <div className="ds-imgframe__content">{children}</div>}
      </div>
      {caption && <figcaption className="ds-imgframe__caption">{caption}</figcaption>}
    </figure>
  );
}
