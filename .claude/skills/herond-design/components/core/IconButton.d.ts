import * as React from 'react';

/** Icon-only button for toolbars and chrome. */
export interface IconButtonProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** @default "ghost" */
  variant?: 'ghost' | 'solid' | 'soft';
  /** Fully round (pill). @default false */
  round?: boolean;
  /** Active/selected state. @default false */
  active?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
