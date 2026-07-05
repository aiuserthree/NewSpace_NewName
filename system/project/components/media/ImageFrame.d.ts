import * as React from 'react';

export type FrameRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface ImageFrameProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL. When omitted a warm labelled placeholder is shown. */
  src?: string;
  alt?: string;
  /** CSS aspect-ratio string. @default '4 / 3' */
  ratio?: string;
  /** Corner radius token. @default 'lg' */
  radius?: FrameRadius;
  /** Placeholder headline (shown only when there is no src). */
  label?: string;
  /** Placeholder sub-line. */
  sublabel?: string;
  /** Dark bottom gradient so overlaid children stay legible. */
  scrim?: boolean;
  /** Caption rendered below the frame. */
  caption?: React.ReactNode;
  /** object-position for the image. */
  objectPosition?: string;
  /** Content overlaid at the bottom of the frame (space name, numeral…). */
  children?: React.ReactNode;
}

/**
 * Fixed-ratio image holder with a labelled placeholder for missing photos.
 */
export function ImageFrame(props: ImageFrameProps): JSX.Element;
