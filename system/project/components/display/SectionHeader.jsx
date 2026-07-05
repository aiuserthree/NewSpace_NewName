import React from 'react';

/*
 * SectionHeader — eyebrow + serif title + optional description, optionally led
 * by a large numeral (① 본당, ② 소예배실 …). Left- or centre-aligned. The title
 * uses the display serif; everything else is Pretendard.
 */

const CSS = `
.ds-secthead { display: flex; flex-direction: column; gap: var(--space-2); }
.ds-secthead--center { align-items: center; text-align: center; }
.ds-secthead__num { font-family: var(--font-display); font-weight: var(--weight-bold);
  font-size: var(--text-2xl); line-height: 1; color: var(--accent); margin-bottom: var(--space-1); }
.ds-secthead__eyebrow { font-family: var(--font-sans); font-size: var(--text-2xs);
  font-weight: var(--weight-semibold); letter-spacing: var(--tracking-wider);
  text-transform: uppercase; color: var(--text-accent); }
.ds-secthead__title { font-family: var(--font-display); font-weight: var(--weight-bold);
  color: var(--text-primary); line-height: var(--leading-tight); letter-spacing: var(--tracking-display); margin: 0; }
.ds-secthead--sm .ds-secthead__title { font-size: var(--text-xl); }
.ds-secthead--md .ds-secthead__title { font-size: var(--text-2xl); }
.ds-secthead--lg .ds-secthead__title { font-size: var(--text-3xl); }
.ds-secthead__desc { font-family: var(--font-sans); font-size: var(--text-md);
  line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; max-width: 46ch; }
.ds-secthead--center .ds-secthead__desc { margin-inline: auto; }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-secthead-style')) {
  const el = document.createElement('style');
  el.id = 'ds-secthead-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  numeral,
  align = 'left',
  size = 'md',
  as: Tag = 'h2',
  className = '',
  ...rest
}) {
  const cls = ['ds-secthead', `ds-secthead--${align}`, `ds-secthead--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <header className={cls} {...rest}>
      {numeral != null && <div className="ds-secthead__num">{numeral}</div>}
      {eyebrow && <div className="ds-secthead__eyebrow">{eyebrow}</div>}
      {title && <Tag className="ds-secthead__title">{title}</Tag>}
      {description && <p className="ds-secthead__desc">{description}</p>}
    </header>
  );
}
