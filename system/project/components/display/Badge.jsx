import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * Badge — small pill for status & meta (필수 / 선택 / 완료 / 중복). Optional
 * leading icon. Colour follows the semantic token pairs.
 */

const CSS = `
.ds-badge { display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans);
  font-weight: var(--weight-semibold); border-radius: var(--radius-pill);
  letter-spacing: var(--tracking-tight); line-height: 1; white-space: nowrap; }
.ds-badge--sm { font-size: var(--text-2xs); padding: 4px 9px; }
.ds-badge--md { font-size: var(--text-xs);  padding: 6px 12px; }
.ds-badge--neutral { background: var(--stone-100); color: var(--stone-700); }
.ds-badge--accent  { background: var(--accent-soft); color: var(--text-accent); }
.ds-badge--success { background: var(--success-surface); color: var(--success-fg); }
.ds-badge--warning { background: var(--warning-surface); color: var(--warning-fg); }
.ds-badge--danger  { background: var(--danger-surface); color: var(--danger-fg); }
.ds-badge--info    { background: var(--info-surface); color: var(--info-fg); }
.ds-badge--outline { background: transparent; color: var(--text-secondary); box-shadow: inset 0 0 0 1.5px var(--border-strong); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-badge-style')) {
  const el = document.createElement('style');
  el.id = 'ds-badge-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  icon,
  className = '',
  ...rest
}) {
  const iconNode = icon
    ? (typeof icon === 'string' ? <Icon name={icon} size={size === 'sm' ? 12 : 14} /> : icon)
    : null;
  const cls = ['ds-badge', `ds-badge--${variant}`, `ds-badge--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {iconNode}
      {children}
    </span>
  );
}
