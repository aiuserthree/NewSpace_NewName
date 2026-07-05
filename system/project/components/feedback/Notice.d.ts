import * as React from 'react';
import type { IconName } from '../core/Icon';

export type NoticeVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Props for the inline message banner.
 *
 * @startingPoint section="Feedback" subtitle="Tinted inline message banner" viewport="700x180"
 */
export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'info' — also picks the default glyph */
  variant?: NoticeVariant;
  /** Bold first line. */
  title?: React.ReactNode;
  /** Body text (children). */
  children?: React.ReactNode;
  /** Override the leading glyph. */
  icon?: IconName;
  /** Action slot below the text (e.g. a Button). */
  action?: React.ReactNode;
  /** Show a dismiss button wired to this handler. */
  onClose?: () => void;
}

/**
 * Inline message banner — duplicate-entry notice, completion + info messages.
 *
 * @startingPoint section="Feedback" subtitle="Tinted inline message banner" viewport="700x180"
 */
export function Notice(props: NoticeProps): JSX.Element;
