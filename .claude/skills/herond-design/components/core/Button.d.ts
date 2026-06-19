import * as React from 'react';

/**
 * Primary action button for Herond. Solid Blue Sky by default; supports
 * outline, ghost and danger variants, three sizes, and a pill shape.
 *
 * @startingPoint section="Core" subtitle="Brand button — all variants & sizes" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded (matches wallet CTAs). @default false */
  pill?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
