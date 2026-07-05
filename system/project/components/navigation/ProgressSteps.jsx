import React from 'react';
import { Icon } from '../core/Icon.jsx';

/*
 * ProgressSteps — the short 2-step flow indicator (신청자 정보 → 이름 제출).
 * Completed steps show a check, the current step is clay-filled with a ring,
 * upcoming steps are quiet neutral. Connecting lines fill as you advance.
 */

const CSS = `
.ds-steps { display: flex; align-items: flex-start; width: 100%; font-family: var(--font-sans); }
.ds-steps__item { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 0 0 auto; }
.ds-steps__dot { width: 32px; height: 32px; border-radius: 50%; display: inline-flex;
  align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: var(--weight-semibold);
  border: 1.5px solid var(--border-strong); background: var(--surface-card); color: var(--text-muted);
  transition: all var(--dur-base) var(--ease-standard); font-variant-numeric: tabular-nums; }
.ds-steps__item[data-state="done"] .ds-steps__dot { background: var(--accent); border-color: var(--accent); color: var(--text-on-accent); }
.ds-steps__item[data-state="current"] .ds-steps__dot { background: var(--accent); border-color: var(--accent);
  color: var(--text-on-accent); box-shadow: var(--shadow-focus); }
.ds-steps__label { font-size: var(--text-xs); color: var(--text-muted); font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-tight); white-space: nowrap; }
.ds-steps__item[data-state] .ds-steps__label { color: var(--text-muted); }
.ds-steps__item[data-state="current"] .ds-steps__label,
.ds-steps__item[data-state="done"] .ds-steps__label { color: var(--text-primary); }
.ds-steps__line { flex: 1 1 auto; height: 2px; background: var(--border-default);
  align-self: flex-start; margin: 15px var(--space-2) 0; border-radius: 2px; min-width: 24px;
  transition: background var(--dur-base) var(--ease-standard); }
.ds-steps__line[data-done="true"] { background: var(--accent); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-steps-style')) {
  const el = document.createElement('style');
  el.id = 'ds-steps-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function ProgressSteps({ steps = [], current = 0, className = '', ...rest }) {
  const items = steps.map((s) => (typeof s === 'string' ? { label: s } : s));
  return (
    <div className={['ds-steps', className].filter(Boolean).join(' ')}
         role="list" aria-label="진행 단계" {...rest}>
      {items.map((step, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="ds-steps__line" data-done={i <= current ? 'true' : 'false'} />}
            <div className="ds-steps__item" data-state={state} role="listitem"
                 aria-current={state === 'current' ? 'step' : undefined}>
              <span className="ds-steps__dot">
                {state === 'done' ? <Icon name="check" size={16} /> : i + 1}
              </span>
              {step.label && <span className="ds-steps__label">{step.label}</span>}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
