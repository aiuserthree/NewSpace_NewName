import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * TextField — single-line text input (이름 / 연락처). Label sits above the
 * control; an optional prefix icon lives inside. Supports required / optional
 * markers, helper + error messages, and a read-only "tray" style used by the
 * lookup screen (조회). Pseudo-states via a one-time injected stylesheet.
 */

const CSS = `
.ds-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.ds-field__label { display: inline-flex; align-items: baseline; gap: 7px;
  font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-secondary);
  letter-spacing: var(--tracking-tight); }
.ds-field__req { color: var(--accent); font-weight: var(--weight-semibold); }
.ds-field__opt { color: var(--text-muted); font-weight: var(--weight-regular); font-size: var(--text-xs); }
.ds-field__control { display: flex; align-items: center; gap: var(--space-3);
  height: var(--field-height); padding: 0 var(--space-4);
  background: var(--surface-card); border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md); color: var(--text-primary);
  transition: border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard),
              background-color var(--dur-fast) var(--ease-standard); }
.ds-field__control:hover { border-color: var(--border-strong); }
.ds-field__control:focus-within { border-color: var(--accent); box-shadow: var(--shadow-focus); }
.ds-field__prefix { display: inline-flex; color: var(--text-muted); flex-shrink: 0; }
.ds-field__input { flex: 1; min-width: 0; height: 100%; padding: 0;
  border: none; outline: none; background: transparent; color: inherit; font: inherit;
  font-size: var(--text-md); letter-spacing: var(--tracking-tight); }
.ds-field__input::placeholder { color: var(--text-disabled); }
.ds-field--error .ds-field__control { border-color: var(--danger); }
.ds-field--error .ds-field__control:focus-within { box-shadow: 0 0 0 4px color-mix(in oklab, var(--danger) 24%, transparent); }
.ds-field--readonly .ds-field__control { background: var(--surface-inset); border-color: var(--border-subtle); box-shadow: var(--shadow-inset); }
.ds-field--disabled { opacity: 0.55; pointer-events: none; }
.ds-field__msg { display: inline-flex; align-items: center; gap: 5px;
  font-size: var(--text-xs); color: var(--text-muted); letter-spacing: var(--tracking-tight); }
.ds-field__msg--error { color: var(--danger-fg); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-field-style')) {
  const el = document.createElement('style');
  el.id = 'ds-field-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function TextField({
  label,
  required = false,
  optional = false,
  hint,
  error,
  prefix,
  readOnly = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const auto = React.useId();
  const fieldId = id || auto;
  const msgId = fieldId + '-msg';
  const prefixNode = prefix
    ? (typeof prefix === 'string' ? <Icon name={prefix} size={18} /> : prefix)
    : null;

  const cls = [
    'ds-field',
    error ? 'ds-field--error' : '',
    readOnly ? 'ds-field--readonly' : '',
    disabled ? 'ds-field--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {label && (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="ds-field__req" aria-hidden="true">· 필수</span>}
          {optional && !required && <span className="ds-field__opt">· 선택</span>}
        </label>
      )}
      <div className="ds-field__control">
        {prefixNode && <span className="ds-field__prefix">{prefixNode}</span>}
        <input
          id={fieldId}
          className="ds-field__input"
          readOnly={readOnly}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={(hint || error) ? msgId : undefined}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span id={msgId} className={'ds-field__msg' + (error ? ' ds-field__msg--error' : '')}>
          {error && <Icon name="alert-circle" size={13} />}
          {error || hint}
        </span>
      )}
    </div>
  );
}
