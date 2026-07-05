import * as React from 'react';

export type IconName =
  | 'arrow-right' | 'arrow-left' | 'arrow-down'
  | 'check' | 'check-circle'
  | 'chevron-down' | 'chevron-right'
  | 'x' | 'phone' | 'image' | 'pencil' | 'share'
  | 'info' | 'alert-circle' | 'alert-triangle'
  | 'sparkles' | 'map-pin' | 'loader';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Which glyph to render (curated Lucide subset). */
  name: IconName;
  /** Square pixel size. @default 20 */
  size?: number;
  /** Stroke width in the 24×24 grid. @default 2 */
  strokeWidth?: number;
  /** Accessible label. When set the icon is exposed to AT; otherwise it is aria-hidden. */
  label?: string;
}

/**
 * Inline SVG icon from the curated Lucide set. Inherits `currentColor`.
 */
export function Icon(props: IconProps): JSX.Element;
