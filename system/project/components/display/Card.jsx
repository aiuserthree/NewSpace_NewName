import React from 'react';

/*
 * Card — the base surface. `raised` (soft shadow, default), `flat` (hairline
 * border), or `sunken` (inset tray). Padding is a token step. Set `interactive`
 * for clickable cards that lift on hover.
 */

const CSS = `
.ds-card { position: relative; background: var(--surface-card); border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle); }
.ds-card--raised { box-shadow: var(--shadow-md); border-color: transparent; }
.ds-card--flat   { box-shadow: none; border-color: var(--border-default); }
.ds-card--sunken { background: var(--surface-inset); box-shadow: var(--shadow-inset); border-color: var(--border-subtle); }
.ds-card--pad-none { padding: 0; }
.ds-card--pad-sm { padding: var(--space-4); }
.ds-card--pad-md { padding: var(--space-6); }
.ds-card--pad-lg { padding: var(--space-8); }
.ds-card--interactive { cursor: pointer; -webkit-tap-highlight-color: transparent;
  transition: transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); }
.ds-card--interactive:hover { transform: translateY(var(--lift-y)); box-shadow: var(--shadow-lg); }
.ds-card--interactive:active { transform: scale(0.995); box-shadow: var(--shadow-md); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-card-style')) {
  const el = document.createElement('style');
  el.id = 'ds-card-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Card({
  children,
  variant = 'raised',
  padding = 'md',
  interactive = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const cls = [
    'ds-card',
    `ds-card--${variant}`,
    `ds-card--pad-${padding}`,
    interactive ? 'ds-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
