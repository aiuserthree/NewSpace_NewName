import * as React from 'react';
import type { IconName } from '../core/Icon';

export type BadgeVariant =
  | 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  variant?: BadgeVariant;
  /** @default 'sm' */
  size?: BadgeSize;
  /** Leading glyph — an Icon name or node. */
  icon?: IconName | React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Small status pill — 필수 (accent), 선택 (neutral), 완료 (success), 중복 (info).
 */
export function Badge(props: BadgeProps): JSX.Element;
