import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * Notice — inline message banner. Fully tinted surface (never a bare
 * coloured left-border), a leading status glyph, optional title, body,
 * an optional action slot, and optional dismiss. Used for the "이미
 * 신청하신 분입니다" case and the completion / info messages.
 */

const DEFAULT_ICON = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'alert-circle',
};

const CSS = `
.ds-notice { display: flex; gap: var(--space-3); padding: var(--space-4) var(--space-4);
  border-radius: var(--radius-md); font-family: var(--font-sans);
  align-items: flex-start; border: 1px solid transparent; }
.ds-notice__icon { flex-shrink: 0; margin-top: 1px; }
.ds-notice__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.ds-notice__title { font-size: var(--text-sm); font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-tight); }
.ds-notice__text { font-size: var(--text-sm); line-height: var(--leading-normal); opacity: 0.94; }
.ds-notice__action { margin-top: var(--space-3); display: flex; gap: var(--space-2); flex-wrap: wrap; }
.ds-notice__close { flex-shrink: 0; margin: -4px -4px 0 0; padding: 4px; border: none; background: none;
  color: inherit; opacity: 0.5; cursor: pointer; border-radius: var(--radius-sm); line-height: 0;
  transition: opacity var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard); }
.ds-notice__close:hover { opacity: 0.9; background: rgba(52,40,22,0.08); }
.ds-notice--info    { background: var(--info-surface);    color: var(--info-fg);    border-color: color-mix(in oklab, var(--info) 22%, transparent); }
.ds-notice--success { background: var(--success-surface); color: var(--success-fg); border-color: color-mix(in oklab, var(--success) 24%, transparent); }
.ds-notice--warning { background: var(--warning-surface); color: var(--warning-fg); border-color: color-mix(in oklab, var(--warning) 30%, transparent); }
.ds-notice--danger  { background: var(--danger-surface);  color: var(--danger-fg);  border-color: color-mix(in oklab, var(--danger) 26%, transparent); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-notice-style')) {
  const el = document.createElement('style');
  el.id = 'ds-notice-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Notice({
  variant = 'info',
  title,
  children,
  icon,
  action,
  onClose,
  className = '',
  ...rest
}) {
  const name = icon || DEFAULT_ICON[variant] || 'info';
  const cls = ['ds-notice', `ds-notice--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role={variant === 'danger' ? 'alert' : 'status'} {...rest}>
      <span className="ds-notice__icon"><Icon name={name} size={20} /></span>
      <div className="ds-notice__body">
        {title && <div className="ds-notice__title">{title}</div>}
        {children && <div className="ds-notice__text">{children}</div>}
        {action && <div className="ds-notice__action">{action}</div>}
      </div>
      {onClose && (
        <button type="button" className="ds-notice__close" aria-label="닫기" onClick={onClose}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
