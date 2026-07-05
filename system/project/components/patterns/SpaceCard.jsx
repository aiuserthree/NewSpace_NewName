import React from 'react';
import { Card } from '../display/Card.jsx';
import { ImageFrame } from '../media/ImageFrame.jsx';
import { TextField } from '../forms/TextField.jsx';

/*
 * SpaceCard — the signature pattern. One per contest space (본당 / 소예배실 /
 * 새가족부실): a full-bleed rendering or photo with the space name set large in
 * the display serif, a numeral + kind pill, a guiding description, and the
 * naming inputs (필수 1 + 선택 1) nested in a sunken "paper" tray. In readOnly
 * mode the inputs become the submitted names (used by the 조회 screen).
 */

const CSS = `
.ds-spacecard { overflow: hidden; }
.ds-spacecard__topbar { position: absolute; top: var(--space-4); left: var(--space-4); right: var(--space-4);
  display: flex; justify-content: space-between; align-items: flex-start; gap: var(--space-2); }
.ds-spacecard__num { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  background: rgba(255,253,249,0.94); color: var(--accent);
  font-family: var(--font-display); font-weight: var(--weight-bold); font-size: var(--text-lg);
  display: inline-flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); }
.ds-spacecard__kind { display: inline-flex; align-items: center; gap: 5px;
  background: rgba(255,253,249,0.92); color: var(--stone-700);
  font-family: var(--font-sans); font-size: var(--text-2xs); font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-tight); padding: 6px 11px; border-radius: var(--radius-pill);
  box-shadow: var(--shadow-xs); }
.ds-spacecard__name { font-family: var(--font-display); font-weight: var(--weight-bold);
  color: #fff; font-size: var(--text-4xl); line-height: 1.08; letter-spacing: var(--tracking-display);
  text-shadow: 0 2px 16px rgba(20,14,8,0.42); margin: 0; }
.ds-spacecard__body { padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-5); }
.ds-spacecard__desc { font-family: var(--font-sans); font-size: var(--text-md);
  line-height: var(--leading-relaxed); color: var(--text-secondary); margin: 0; }
.ds-spacecard__tray { display: flex; flex-direction: column; gap: var(--space-4); }
.ds-spacecard__tray-head { display: flex; align-items: center; gap: var(--space-2);
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-semibold);
  color: var(--text-muted); letter-spacing: var(--tracking-wide); text-transform: uppercase; }
.ds-spacecard__tray-line { flex: 1; height: 1px; background: var(--border-subtle); }
`;

if (typeof document !== 'undefined' && !document.getElementById('ds-spacecard-style')) {
  const el = document.createElement('style');
  el.id = 'ds-spacecard-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function SpaceCard({
  numeral,
  name,
  kind,
  description,
  src,
  imageLabel,
  imageSublabel,
  ratio = '4 / 3',
  requiredValue,
  optionalValue,
  onFieldChange,
  requiredPlaceholder = '이름을 제안해 주세요',
  optionalPlaceholder = '한 개 더 제안할 수 있어요 (선택)',
  requiredError,
  showOptional = true,
  readOnly = false,
  className = '',
  ...rest
}) {
  const controlled = onFieldChange != null;
  const reqProps = controlled
    ? { value: requiredValue ?? '', onChange: (e) => onFieldChange('required', e.target.value) }
    : {};
  const optProps = controlled
    ? { value: optionalValue ?? '', onChange: (e) => onFieldChange('optional', e.target.value) }
    : {};

  return (
    <Card variant="raised" padding="none"
          className={['ds-spacecard', className].filter(Boolean).join(' ')} {...rest}>
      <ImageFrame src={src} ratio={ratio} radius="none" scrim
                  label={imageLabel || `${name || '공간'} 이미지`}
                  sublabel={imageSublabel} alt={name}>
        <div className="ds-spacecard__topbar">
          {numeral != null && <span className="ds-spacecard__num">{numeral}</span>}
          {kind && <span className="ds-spacecard__kind">{kind}</span>}
        </div>
        {name && <h3 className="ds-spacecard__name">{name}</h3>}
      </ImageFrame>

      <div className="ds-spacecard__body">
        {description && <p className="ds-spacecard__desc">{description}</p>}
        <div className="ds-spacecard__tray">
          <div className="ds-spacecard__tray-head">
            <span>{readOnly ? '제안한 이름' : '이름 제안'}</span>
            <span className="ds-spacecard__tray-line" />
          </div>
          <TextField
            label="이름"
            required={!readOnly}
            readOnly={readOnly}
            placeholder={requiredPlaceholder}
            error={requiredError}
            {...reqProps}
          />
          {showOptional && (
            <TextField
              label="추가 이름"
              optional={!readOnly}
              readOnly={readOnly}
              placeholder={optionalPlaceholder}
              {...optProps}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
