import * as React from 'react';

/** Small status / count pill keyed to semantic tones. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "primary" */
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'violet' | 'neutral';
  /** @default "soft" */
  variant?: 'solid' | 'soft' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
