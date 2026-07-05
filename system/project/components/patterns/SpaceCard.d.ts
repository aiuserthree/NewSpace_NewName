import * as React from 'react';

/**
 * Props for the signature per-space naming block.
 *
 * @startingPoint section="Patterns" subtitle="Image-forward space naming block" viewport="440x620"
 */
export interface SpaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Numeral badge over the image (① ② ③). */
  numeral?: React.ReactNode;
  /** Space name, set large in the display serif over the image. */
  name?: string;
  /** Small kind pill (e.g. "신축 · 조감도", "사진"). */
  kind?: React.ReactNode;
  /** Guiding description for the naming direction. */
  description?: React.ReactNode;
  /** Rendering / photo URL. Omit to show the labelled placeholder. */
  src?: string;
  /** Placeholder headline when there is no src. */
  imageLabel?: string;
  /** Placeholder sub-line. */
  imageSublabel?: string;
  /** Image aspect ratio. @default '4 / 3' */
  ratio?: string;
  /** Controlled value of the required name field. */
  requiredValue?: string;
  /** Controlled value of the optional name field. */
  optionalValue?: string;
  /** Change handler: (slot: 'required' | 'optional', value: string). Makes fields controlled. */
  onFieldChange?: (slot: 'required' | 'optional', value: string) => void;
  requiredPlaceholder?: string;
  optionalPlaceholder?: string;
  /** Error under the required field. */
  requiredError?: React.ReactNode;
  /** Show the optional second-name field. @default true */
  showOptional?: boolean;
  /** Read-only display of submitted names (조회 screen). */
  readOnly?: boolean;
}

/**
 * Signature per-space naming block: image + serif name + guiding copy + inputs.
 *
 * @startingPoint section="Patterns" subtitle="Image-forward space naming block" viewport="440x620"
 */
export function SpaceCard(props: SpaceCardProps): JSX.Element;
