/* @ds-bundle: {"format":4,"namespace":"DesignSystem_60a1b7","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ImageFrame","sourcePath":"components/media/ImageFrame.jsx"},{"name":"ProgressSteps","sourcePath":"components/navigation/ProgressSteps.jsx"},{"name":"SpaceCard","sourcePath":"components/patterns/SpaceCard.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"73eb0245d746","components/display/Badge.jsx":"ce86c52cdaff","components/display/Card.jsx":"8bc737d3d1db","components/display/SectionHeader.jsx":"d9705068c210","components/feedback/Notice.jsx":"1063362ef77e","components/forms/Button.jsx":"37220160d06f","components/forms/TextField.jsx":"62a1de205b6b","components/media/ImageFrame.jsx":"321d6b88a7d7","components/navigation/ProgressSteps.jsx":"71fd4d923c13","components/patterns/SpaceCard.jsx":"0ba3977d5bf2","ui_kits/contest/AppHeader.jsx":"3d6b02485f63","ui_kits/contest/CompleteScreen.jsx":"5844c80350d6","ui_kits/contest/InfoScreen.jsx":"ff849111e7a6","ui_kits/contest/IntroScreen.jsx":"6e249c05862a","ui_kits/contest/LookupScreen.jsx":"f23e9f60188b","ui_kits/contest/SubmitScreen.jsx":"3409c826b464"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_60a1b7 = window.DesignSystem_60a1b7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Icon — thin wrapper around a curated subset of Lucide glyphs.
 * No brand icon set was supplied, so Lucide (ISC licensed) is used
 * as the substitute. Glyphs share Lucide's 24×24 viewBox, 2px stroke,
 * round caps/joins. Colour follows `currentColor`; size is square.
 */

const PATHS = {
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  'pencil': '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  'share': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'loader': '<path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  className = '',
  style = {},
  label,
  ...rest
}) {
  const inner = PATHS[name];
  if (inner === undefined && typeof console !== 'undefined') {
    console.warn('[Icon] unknown name: ' + name);
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    role: label ? 'img' : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : 'true',
    dangerouslySetInnerHTML: inner ? {
      __html: inner
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  icon,
  className = '',
  ...rest
}) {
  const iconNode = icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 12 : 14
  }) : icon : null;
  const cls = ['ds-badge', `ds-badge--${variant}`, `ds-badge--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), iconNode, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  variant = 'raised',
  padding = 'md',
  interactive = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const cls = ['ds-card', `ds-card--${variant}`, `ds-card--pad-${padding}`, interactive ? 'ds-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeader({
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
  const cls = ['ds-secthead', `ds-secthead--${align}`, `ds-secthead--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cls
  }, rest), numeral != null && /*#__PURE__*/React.createElement("div", {
    className: "ds-secthead__num"
  }, numeral), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "ds-secthead__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement(Tag, {
    className: "ds-secthead__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ds-secthead__desc"
  }, description));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  danger: 'alert-circle'
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
function Notice({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: variant === 'danger' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-notice__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-notice__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "ds-notice__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ds-notice__text"
  }, children), action && /*#__PURE__*/React.createElement("div", {
    className: "ds-notice__action"
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-notice__close",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  return typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }) : icon;
}
function Button({
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
  const cls = ['ds-btn', `ds-btn--${variant}`, `ds-btn--${size}`, fullWidth ? 'ds-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: iconSize,
    className: "ds-btn__spin"
  }) : renderIcon(iconLeft, iconSize), children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && renderIcon(iconRight, iconSize));
  if (href && !isDisabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: isDisabled,
    "data-disabled": isDisabled ? 'true' : undefined,
    "aria-busy": loading || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function TextField({
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
  const prefixNode = prefix ? typeof prefix === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: prefix,
    size: 18
  }) : prefix : null;
  const cls = ['ds-field', error ? 'ds-field--error' : '', readOnly ? 'ds-field--readonly' : '', disabled ? 'ds-field--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ds-field__req",
    "aria-hidden": "true"
  }, "\xB7 \uD544\uC218"), optional && !required && /*#__PURE__*/React.createElement("span", {
    className: "ds-field__opt"
  }, "\xB7 \uC120\uD0DD")), /*#__PURE__*/React.createElement("div", {
    className: "ds-field__control"
  }, prefixNode && /*#__PURE__*/React.createElement("span", {
    className: "ds-field__prefix"
  }, prefixNode), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "ds-field__input",
    readOnly: readOnly,
    disabled: disabled,
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": hint || error ? msgId : undefined
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    className: 'ds-field__msg' + (error ? ' ds-field__msg--error' : '')
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 13
  }), error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * ImageFrame — the image-forward heart of the design. Holds a rendering /
 * photo at a fixed aspect ratio, or, when no `src` is given, a warm labelled
 * placeholder (the church supplies real 조감도 / 사진 later). Optional bottom
 * scrim lets overlaid children (space name, numeral) sit legibly over imagery.
 */

const RADII = {
  none: '0',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)'
};
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
function ImageFrame({
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
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ['ds-imgframe', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-imgframe__media",
    style: {
      aspectRatio: ratio,
      borderRadius: r
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: objectPosition ? {
      objectPosition
    } : undefined
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ds-imgframe__ph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-imgframe__ph-label"
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    className: "ds-imgframe__ph-sub"
  }, sublabel)), scrim && /*#__PURE__*/React.createElement("div", {
    className: "ds-imgframe__scrim"
  }), children && /*#__PURE__*/React.createElement("div", {
    className: "ds-imgframe__content"
  }, children)), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "ds-imgframe__caption"
  }, caption));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProgressSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ProgressSteps({
  steps = [],
  current = 0,
  className = '',
  ...rest
}) {
  const items = steps.map(s => typeof s === 'string' ? {
    label: s
  } : s);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-steps', className].filter(Boolean).join(' '),
    role: "list",
    "aria-label": "\uC9C4\uD589 \uB2E8\uACC4"
  }, rest), items.map((step, i) => {
    const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ds-steps__line",
      "data-done": i <= current ? 'true' : 'false'
    }), /*#__PURE__*/React.createElement("div", {
      className: "ds-steps__item",
      "data-state": state,
      role: "listitem",
      "aria-current": state === 'current' ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-steps__dot"
    }, state === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16
    }) : i + 1), step.label && /*#__PURE__*/React.createElement("span", {
      className: "ds-steps__label"
    }, step.label)));
  }));
}
Object.assign(__ds_scope, { ProgressSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProgressSteps.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SpaceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SpaceCard({
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
  const reqProps = controlled ? {
    value: requiredValue ?? '',
    onChange: e => onFieldChange('required', e.target.value)
  } : {};
  const optProps = controlled ? {
    value: optionalValue ?? '',
    onChange: e => onFieldChange('optional', e.target.value)
  } : {};
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: "raised",
    padding: "none",
    className: ['ds-spacecard', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: src,
    ratio: ratio,
    radius: "none",
    scrim: true,
    label: imageLabel || `${name || '공간'} 이미지`,
    sublabel: imageSublabel,
    alt: name
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-spacecard__topbar"
  }, numeral != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-spacecard__num"
  }, numeral), kind && /*#__PURE__*/React.createElement("span", {
    className: "ds-spacecard__kind"
  }, kind)), name && /*#__PURE__*/React.createElement("h3", {
    className: "ds-spacecard__name"
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "ds-spacecard__body"
  }, description && /*#__PURE__*/React.createElement("p", {
    className: "ds-spacecard__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "ds-spacecard__tray"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-spacecard__tray-head"
  }, /*#__PURE__*/React.createElement("span", null, readOnly ? '제안한 이름' : '이름 제안'), /*#__PURE__*/React.createElement("span", {
    className: "ds-spacecard__tray-line"
  })), /*#__PURE__*/React.createElement(__ds_scope.TextField, _extends({
    label: "\uC774\uB984",
    required: !readOnly,
    readOnly: readOnly,
    placeholder: requiredPlaceholder,
    error: requiredError
  }, reqProps)), showOptional && /*#__PURE__*/React.createElement(__ds_scope.TextField, _extends({
    label: "\uCD94\uAC00 \uC774\uB984",
    optional: !readOnly,
    readOnly: readOnly,
    placeholder: optionalPlaceholder
  }, optProps)))));
}
Object.assign(__ds_scope, { SpaceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SpaceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/AppHeader.jsx
try { (() => {
/* AppHeader — in-app top bar: optional back, centre wordmark, optional
   progress steps. Shared by the flow screens. */
const {
  Icon: AH_Icon,
  ProgressSteps: AH_Steps
} = window.DesignSystem_60a1b7;
function AppHeader({
  onBack,
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "appbar__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "appbar__side"
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onBack,
    "aria-label": "\uB4A4\uB85C \uAC00\uAE30"
  }, /*#__PURE__*/React.createElement(AH_Icon, {
    name: "arrow-left",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "appbar__mark"
  }, "\uACF5\uAC04 \uC774\uB984 \uACF5\uBAA8\uC804", /*#__PURE__*/React.createElement("span", null, ".")), /*#__PURE__*/React.createElement("div", {
    className: "appbar__side"
  })), steps && /*#__PURE__*/React.createElement("div", {
    className: "appbar__steps"
  }, /*#__PURE__*/React.createElement(AH_Steps, {
    steps: steps,
    current: current
  })));
}
window.AppHeader = AppHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/CompleteScreen.jsx
try { (() => {
/* CompleteScreen — 제출 완료. Confirmation + next-step (2차 투표) notice. */
const {
  Button: Done_Button,
  Notice: Done_Notice,
  Icon: Done_Icon
} = window.DesignSystem_60a1b7;
function CompleteScreen({
  onLookup,
  onHome,
  applicant
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "screen__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page complete"
  }, /*#__PURE__*/React.createElement("div", {
    className: "complete__mark"
  }, /*#__PURE__*/React.createElement(Done_Icon, {
    name: "check-circle",
    size: 40
  })), /*#__PURE__*/React.createElement("h1", {
    className: "complete__title"
  }, "\uC81C\uCD9C\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    className: "complete__sub"
  }, "\uCC38\uC5EC\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4", applicant && applicant.name ? `, ${applicant.name}님` : '', "!"), /*#__PURE__*/React.createElement(Done_Notice, {
    variant: "info",
    title: "\uB2E4\uC74C \uC77C\uC815 \uC548\uB0B4"
  }, "\uC81C\uC548\uD574 \uC8FC\uC2E0 \uC774\uB984 \uC911 \uC0C1\uC704 \uD6C4\uBCF4\uB294 \uCD94\uD6C4 \uD604\uC7A5 \uC2A4\uD2F0\uCEE4 \uD22C\uD45C\uB85C \uCD5C\uC885 \uACB0\uC815\uB429\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
    className: "screen__footer complete__footer"
  }, /*#__PURE__*/React.createElement(Done_Button, {
    fullWidth: true,
    variant: "secondary",
    iconLeft: "phone",
    onClick: onLookup
  }, "\uB0B4 \uC81C\uCD9C \uB0B4\uC6A9 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(Done_Button, {
    fullWidth: true,
    variant: "ghost",
    onClick: onHome
  }, "\uCC98\uC74C\uC73C\uB85C")));
}
window.CompleteScreen = CompleteScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/CompleteScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/InfoScreen.jsx
try { (() => {
/* InfoScreen — STEP 1, 신청자 정보. Name + phone; phone is the duplicate key.
   Duplicate detection lives in the App; this screen shows the notice. */
const {
  Button: Info_Button,
  TextField: Info_Field,
  Notice: Info_Notice,
  SectionHeader: Info_Head
} = window.DesignSystem_60a1b7;
function InfoScreen({
  onBack,
  onNext,
  onLookup,
  onDirty,
  duplicate
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [err, setErr] = React.useState({});
  const submit = () => {
    const digits = phone.replace(/\D/g, '');
    const e = {};
    if (!name.trim()) e.name = '이름을 입력해 주세요';
    if (!/^01\d{8,9}$/.test(digits)) e.phone = '010으로 시작하는 휴대폰 번호를 입력해 주세요';
    setErr(e);
    if (Object.keys(e).length) return;
    onNext({
      name: name.trim(),
      phone: digits
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(AppHeader, {
    onBack: onBack,
    steps: ['신청자 정보', '이름 제출'],
    current: 0
  }), /*#__PURE__*/React.createElement("div", {
    className: "screen__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Info_Head, {
    eyebrow: "STEP 1",
    title: "\uBA3C\uC800, \uCC38\uC5EC\uC790 \uC815\uBCF4\uB97C \uC54C\uB824\uC8FC\uC138\uC694",
    description: "\uD578\uB4DC\uD3F0 \uBC88\uD638\uB294 \uC911\uBCF5 \uD655\uC778\uACFC \uBCF8\uC778 \uC870\uD68C\uC5D0\uB9CC \uC0AC\uC6A9\uB3FC\uC694."
  }), /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement(Info_Field, {
    label: "\uC774\uB984",
    required: true,
    placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    value: name,
    error: err.name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Info_Field, {
    label: "\uC5F0\uB77D\uCC98",
    required: true,
    type: "tel",
    inputMode: "numeric",
    prefix: "phone",
    placeholder: "010-0000-0000",
    value: phone,
    error: err.phone,
    hint: "\uBCF8\uC778 \uD655\uC778\uC6A9\uC73C\uB85C\uB9CC \uC0AC\uC6A9\uB3FC\uC694",
    onChange: e => {
      setPhone(e.target.value);
      if (duplicate) onDirty();
    }
  }), duplicate && /*#__PURE__*/React.createElement(Info_Notice, {
    variant: "info",
    title: "\uC774\uBBF8 \uC2E0\uCCAD\uD558\uC2E0 \uBD84\uC785\uB2C8\uB2E4",
    action: /*#__PURE__*/React.createElement(Info_Button, {
      size: "sm",
      variant: "soft",
      iconLeft: "phone",
      onClick: () => onLookup(duplicate)
    }, "\uB0B4\uC6A9 \uD655\uC778\uD558\uAE30")
  }, "\uAC19\uC740 \uBC88\uD638\uB85C \uC774\uBBF8 \uCC38\uC5EC\uD558\uC168\uC5B4\uC694. \uC81C\uCD9C\uD55C \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.")))), /*#__PURE__*/React.createElement("div", {
    className: "screen__footer"
  }, /*#__PURE__*/React.createElement(Info_Button, {
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: submit
  }, "\uB2E4\uC74C")));
}
window.InfoScreen = InfoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/InfoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/IntroScreen.jsx
try { (() => {
/* IntroScreen — landing / 인트로. Sets the tone, previews the three spaces,
   and starts the flow. */
const {
  Button: Intro_Button,
  ImageFrame: Intro_Image
} = window.DesignSystem_60a1b7;
const INTRO_SPACES = [{
  n: '①',
  name: '본당',
  kind: '신축 · 조감도',
  line: '새로 지어질 예배의 중심 공간'
}, {
  n: '②',
  name: '소예배실',
  kind: '사진',
  line: '청년·청소년을 위한 액티브한 공간'
}, {
  n: '③',
  name: '새가족부실',
  kind: '사진',
  line: '처음 오신 분들을 맞이하는 공간'
}];
function IntroScreen({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(AppHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "screen__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "\uD568\uAED8 \uC9D3\uB2E4"), /*#__PURE__*/React.createElement("h1", {
    className: "intro__title"
  }, "\uC6B0\uB9AC \uACF5\uAC04\uC758 \uC774\uB984\uC744", /*#__PURE__*/React.createElement("br", null), "\uD568\uAED8 \uC9C0\uC5B4\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    className: "intro__lead"
  }, "\uC0C8\uB85C \uC9D3\uACE0 \uB2E4\uB4EC\uC740 \uC138 \uACF5\uAC04\uC758 \uC774\uB984\uC744 \uAD50\uC6B0 \uC5EC\uB7EC\uBD84\uACFC \uD568\uAED8 \uC9D3\uC2B5\uB2C8\uB2E4. \uC7A0\uAE50\uC774\uBA74 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement(Intro_Image, {
    className: "intro__hero",
    ratio: "16 / 10",
    radius: "xl",
    scrim: true,
    label: "\uBCF8\uB2F9 \uC870\uAC10\uB3C4",
    sublabel: "\uC774\uBBF8\uC9C0\uB97C \uC900\uBE44 \uC911\uC774\uC5D0\uC694"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intro__herocap"
  }, "\uACF5\uBAA8 \uB300\uC0C1 \xB7 \uC138 \uAC1C\uC758 \uACF5\uAC04")), /*#__PURE__*/React.createElement("div", {
    className: "spaces"
  }, INTRO_SPACES.map(s => /*#__PURE__*/React.createElement("div", {
    className: "spacerow",
    key: s.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "spacerow__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "spacerow__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacerow__name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "spacerow__line"
  }, s.line)), /*#__PURE__*/React.createElement("span", {
    className: "spacerow__kind"
  }, s.kind)))))), /*#__PURE__*/React.createElement("div", {
    className: "screen__footer"
  }, /*#__PURE__*/React.createElement(Intro_Button, {
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: onStart
  }, "\uCC38\uC5EC \uC2DC\uC791"), /*#__PURE__*/React.createElement("p", {
    className: "footnote"
  }, "1\uC778\uB2F9 \uCD5C\uB300 2\uAC1C \uC81C\uC548 \xB7 \uC57D 1\uBD84 \uC18C\uC694")));
}
window.IntroScreen = IntroScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/IntroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/LookupScreen.jsx
try { (() => {
/* LookupScreen — 조회. Read-only view of a submission, reached from the
   duplicate notice or the completion screen. */
const {
  Button: Look_Button,
  TextField: Look_Field,
  Badge: Look_Badge,
  Card: Look_Card
} = window.DesignSystem_60a1b7;
const LOOKUP_SPACES = [{
  key: 'main',
  n: '①',
  name: '본당'
}, {
  key: 'chapel',
  n: '②',
  name: '소예배실'
}, {
  key: 'family',
  n: '③',
  name: '새가족부실'
}];
function fmtPhone(p) {
  const d = (p || '').replace(/\D/g, '');
  if (d.length === 11) return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return p || '';
}
function LookupScreen({
  onClose,
  submission
}) {
  const s = submission || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(AppHeader, {
    onBack: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "screen__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "\uB0B4 \uC81C\uCD9C \uB0B4\uC6A9"), /*#__PURE__*/React.createElement("h1", {
    className: "lookup__title"
  }, "\uC81C\uCD9C\uD558\uC2E0 \uB0B4\uC6A9\uC774\uC5D0\uC694"), /*#__PURE__*/React.createElement("div", {
    className: "lookup__meta"
  }, /*#__PURE__*/React.createElement(Look_Badge, {
    variant: "success",
    icon: "check"
  }, "\uC81C\uCD9C \uC644\uB8CC"), /*#__PURE__*/React.createElement("span", {
    className: "lookup__phone"
  }, s.name ? `${s.name} · ` : '', fmtPhone(s.phone))), /*#__PURE__*/React.createElement("div", {
    className: "lookup__list"
  }, LOOKUP_SPACES.map(sp => {
    const v = s.values && s.values[sp.key] || {};
    return /*#__PURE__*/React.createElement(Look_Card, {
      key: sp.key,
      variant: "flat",
      padding: "md",
      className: "lookupcard"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lookupcard__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lookupcard__n"
    }, sp.n), sp.name), /*#__PURE__*/React.createElement("div", {
      className: "lookupcard__names"
    }, /*#__PURE__*/React.createElement(Look_Field, {
      label: "\uC774\uB984",
      readOnly: true,
      value: v.required || '—'
    }), v.optional ? /*#__PURE__*/React.createElement(Look_Field, {
      label: "\uCD94\uAC00 \uC774\uB984",
      readOnly: true,
      value: v.optional
    }) : null));
  })), /*#__PURE__*/React.createElement("p", {
    className: "footnote"
  }, "\uC218\uC815\uC740 \uD604\uC7AC \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC544\uC694. \uBCC0\uACBD\uC774 \uD544\uC694\uD558\uBA74 \uB2F4\uB2F9\uC790\uC5D0\uAC8C \uBB38\uC758\uD574 \uC8FC\uC138\uC694."))), /*#__PURE__*/React.createElement("div", {
    className: "screen__footer"
  }, /*#__PURE__*/React.createElement(Look_Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: onClose
  }, "\uB2EB\uAE30")));
}
window.LookupScreen = LookupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/LookupScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contest/SubmitScreen.jsx
try { (() => {
/* SubmitScreen — STEP 2, 이름 제출. Scroll of three SpaceCards, one per space.
   Required name per space is validated on submit. */
const {
  Button: Sub_Button,
  Notice: Sub_Notice,
  SectionHeader: Sub_Head,
  SpaceCard: Sub_Space
} = window.DesignSystem_60a1b7;
const SUBMIT_SPACES = [{
  key: 'main',
  n: '①',
  name: '본당',
  kind: '신축 · 조감도',
  label: '본당 조감도',
  desc: '새로 지어질 본당입니다. 조감도를 보며 우리 공동체가 오래 부를 이름을 상상해 보세요.'
}, {
  key: 'chapel',
  n: '②',
  name: '소예배실',
  kind: '사진',
  label: '소예배실 사진',
  desc: '청년과 청소년을 위한 액티브한 공간입니다. 활기가 느껴지는 이름을 지어주세요.'
}, {
  key: 'family',
  n: '③',
  name: '새가족부실',
  kind: '사진',
  label: '새가족부실 사진',
  desc: '처음 오신 분들을 따뜻하게 맞이하고 안내하는 공간입니다.'
}];
function SubmitScreen({
  onBack,
  onSubmit
}) {
  const [vals, setVals] = React.useState({});
  const [warn, setWarn] = React.useState(false);
  const setField = (key, slot, v) => setVals(p => ({
    ...p,
    [key]: {
      ...p[key],
      [slot]: v
    }
  }));
  const submit = () => {
    const missing = SUBMIT_SPACES.some(s => !(vals[s.key]?.required || '').trim());
    if (missing) {
      setWarn(true);
      return;
    }
    onSubmit(vals);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(AppHeader, {
    onBack: onBack,
    steps: ['신청자 정보', '이름 제출'],
    current: 1
  }), /*#__PURE__*/React.createElement("div", {
    className: "screen__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Sub_Head, {
    eyebrow: "STEP 2",
    title: "\uC774\uB984\uC744 \uC9C0\uC5B4\uC8FC\uC138\uC694",
    description: "\uAC01 \uACF5\uAC04\uBCC4 1\uAC1C\uB294 \uD544\uC218, 1\uAC1C\uB294 \uC120\uD0DD\uC73C\uB85C \uC81C\uC548\uD560 \uC218 \uC788\uC5B4\uC694."
  }), warn && /*#__PURE__*/React.createElement(Sub_Notice, {
    variant: "warning",
    title: "\uC544\uC9C1 \uBE44\uC5B4 \uC788\uB294 \uACF5\uAC04\uC774 \uC788\uC5B4\uC694"
  }, "\uAC01 \uACF5\uAC04\uBCC4 \uC774\uB984 1\uAC1C\uB294 \uD544\uC218\uC608\uC694. \uBD89\uAC8C \uD45C\uC2DC\uB41C \uCE78\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    className: "spacecards"
  }, SUBMIT_SPACES.map(s => /*#__PURE__*/React.createElement(Sub_Space, {
    key: s.key,
    numeral: s.n,
    name: s.name,
    kind: s.kind,
    imageLabel: s.label,
    imageSublabel: "\uC774\uBBF8\uC9C0\uB97C \uC900\uBE44 \uC911\uC774\uC5D0\uC694",
    description: s.desc,
    requiredValue: vals[s.key]?.required || '',
    optionalValue: vals[s.key]?.optional || '',
    requiredError: warn && !(vals[s.key]?.required || '').trim() ? '이름을 제안해 주세요' : undefined,
    onFieldChange: (slot, v) => setField(s.key, slot, v)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "screen__footer"
  }, /*#__PURE__*/React.createElement(Sub_Button, {
    fullWidth: true,
    iconRight: "check",
    onClick: submit
  }, "\uC81C\uCD9C\uD558\uAE30"), /*#__PURE__*/React.createElement("p", {
    className: "footnote"
  }, "\uC81C\uCD9C \uD6C4\uC5D0\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574 \uC8FC\uC138\uC694.")));
}
window.SubmitScreen = SubmitScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contest/SubmitScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ProgressSteps = __ds_scope.ProgressSteps;

__ds_ns.SpaceCard = __ds_scope.SpaceCard;

})();
