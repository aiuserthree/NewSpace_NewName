import * as React from 'react';

export interface ProgressStep {
  label?: string;
}

export interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ordered steps — plain labels or `{ label }` objects. */
  steps: Array<string | ProgressStep>;
  /** Zero-based index of the active step. @default 0 */
  current?: number;
}

/**
 * Compact multi-step indicator for the contest's 2-step flow.
 */
export function ProgressSteps(props: ProgressStepsProps): JSX.Element;
