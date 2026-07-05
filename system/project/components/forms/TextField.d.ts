import * as React from 'react';
import type { IconName } from '../core/Icon';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Field label rendered above the control. */
  label?: React.ReactNode;
  /** Appends a "· 필수" marker to the label. */
  required?: boolean;
  /** Appends a "· 선택" marker to the label (ignored when required). */
  optional?: boolean;
  /** Helper text shown below when there is no error. */
  hint?: React.ReactNode;
  /** Error message; turns the control red and overrides hint. */
  error?: React.ReactNode;
  /** Leading glyph inside the control — an Icon name or node. */
  prefix?: IconName | React.ReactNode;
  /** Read-only "tray" style used by the lookup (조회) screen. */
  readOnly?: boolean;
  disabled?: boolean;
}

/**
 * Single-line input for name and phone entry across the contest flow.
 */
export function TextField(props: TextFieldProps): JSX.Element;
