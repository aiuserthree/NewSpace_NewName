import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * Button — the primary action control. Clay-filled `primary`, bordered
 * `secondary`, transparent `ghost`, and soft clay-tinted `soft`. Renders
 * as <button> or, when `href` is set, as <a>. Pseudo-states are handled by
 * a one-time injected stylesheet so hover/press/focus are real CSS.
 */

const CSS = `
.ds-btn {
  --_bg: var(--accent); --_fg: var(--text-on-accent); --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  font-family: var(--font-sans); font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-tight); line-height: 1;
  border: 1.5px solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-md); cursor: pointer; text-decoration: none;
  white-space: nowrap; user-select: none; -webkit-tap-highlight-color: transparent;
  transition: transform var(--dur-fast) var(--ease-standard),
              background-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard);
}
.ds-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.ds-btn--block { display: flex; width: 100%; }
.ds-btn[data-disabled="true"] { opacity: 0.45; pointer-events: none; box-shadow: none; }

.ds-btn--sm { height: 40px; padding: 0 var(--space-4); font-size: var(--text-sm); border-radius: var(--radius-sm); }
.ds-btn--md { height: 48px; padding: 0 var(--space-6); font-size: var(--text-base); }
.ds-btn--lg { height: var(--control-height); padding: 0 var(--space-7); font-size: var(--text-md); }

.ds-btn--primary { --_bg: var(--accent); --_fg: var(--text-on-accent); box-shadow: var(--shadow-sm); }
.ds-btn--primary:hover { --_bg: var(--accent-hover); box-shadow: var(--shadow-md); transform: translateY(var(--lift-y)); }
.ds-btn--primary:active { --_bg: var(--accent-active); box-shadow: var(--shadow-xs); transform: scale(var(--press-scale)); }

.ds-btn--secondary { --_bg: var(--surface-card); --_fg: var(--text-primary); --_bd: var(--border-strong); box-shadow: var(--shadow-xs); }
.ds-btn--secondary:hover { --_bd: var(--stone-400); background: var(--paper-deep); transform: translateY(var(--lift-y)); }
.ds-btn--secondary:active { background: var(--surface-inset); transform: scale(var(--press-scale)); box-shadow: none; }

.ds-btn--ghost { --_bg: transparent; --_fg: var(--text-primary); --_bd: transparent; }
.ds-btn--ghost:hover { background: var(--surface-hover); }
.ds-btn--ghost:active { background: var(--surface-active); transform: scale(var(--press-scale)); }

.ds-btn--soft { --_bg: var(--accent-soft); --_fg: var(--text-accent); }
.ds-btn--soft:hover { --_bg: var(--clay-100); transform: translateY(var(--lift-y)); }
.ds-btn--soft:active { --_bg: var(--clay-200); transform: scale(var(--press-scale)); }

.ds-btn__spin { animation: ds-btn-spin 0.75s linear infinite; }
@keyframes ds-btn-spin { to { transform: rotate(360deg); } }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-button-style')) {
  const el = document.createElement('style');
  el.id = 'ds-button-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

function renderIcon(icon, size) {
  if (!icon) return null;
  return typeof icon === 'string' ? <Icon name={icon} size={size} /> : icon;
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  const iconSize = size === 'sm' ? 16 : size === 'md' ? 18 : 20;
  const isDisabled = disabled || loading;
  const cls = [
    'ds-btn',
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? 'ds-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {loading
        ? <Icon name="loader" size={iconSize} className="ds-btn__spin" />
        : renderIcon(iconLeft, iconSize)}
      {children != null && <span>{children}</span>}
      {!loading && renderIcon(iconRight, iconSize)}
    </>
  );

  if (href && !isDisabled) {
    return (
      <a href={href} className={cls} {...rest}>{inner}</a>
    );
  }
  return (
    <button
      type={type}
      className={cls}
      disabled={isDisabled}
      data-disabled={isDisabled ? 'true' : undefined}
      aria-busy={loading || undefined}
      {...rest}
    >
      {inner}
    </button>
  );
}
