import * as React from 'react';
import type { IconName } from '../core/Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'soft';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the primary action control.
 *
 * @startingPoint section="Forms" subtitle="Clay primary action + variants" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Visual weight. `primary` = clay fill (one per view). @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'lg' — lg is the mobile-first full-width action size */
  size?: ButtonSize;
  /** Stretch to fill the container (default action style on mobile). */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Shows a spinner and blocks interaction. */
  loading?: boolean;
  /** Leading glyph — an Icon name or a node. */
  iconLeft?: IconName | React.ReactNode;
  /** Trailing glyph — an Icon name or a node. */
  iconRight?: IconName | React.ReactNode;
  /** Render as an anchor instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

/**
 * Primary action control for the contest flow (참여 시작 / 다음 / 제출하기).
 *
 * @startingPoint section="Forms" subtitle="Clay primary action + variants" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
