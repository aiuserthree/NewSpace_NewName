import * as React from 'react';

export type SectionAlign = 'left' | 'center';
export type SectionSize = 'sm' | 'md' | 'lg';

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Small uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Serif headline. */
  title?: React.ReactNode;
  /** Supporting paragraph below the title. */
  description?: React.ReactNode;
  /** Large accent numeral (① ② ③ or 1, 2, 3) shown above the eyebrow. */
  numeral?: React.ReactNode;
  /** @default 'left' */
  align?: SectionAlign;
  /** Title scale. @default 'md' */
  size?: SectionSize;
  /** Heading tag for the title. @default 'h2' */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Eyebrow + serif title + description block that opens each screen/section.
 */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
