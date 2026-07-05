import * as React from 'react';

export type CardVariant = 'raised' | 'flat' | 'sunken';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'raised' — soft warm shadow lifting off the paper */
  variant?: CardVariant;
  /** Internal padding token. @default 'md' */
  padding?: CardPadding;
  /** Lift + pointer on hover for clickable cards. */
  interactive?: boolean;
  /** Element/tag to render. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Base surface container for grouped content.
 */
export function Card(props: CardProps): JSX.Element;
