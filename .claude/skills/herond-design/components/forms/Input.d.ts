import * as React from 'react';

/**
 * Text input with optional icon, label, helper and error states.
 *
 * @startingPoint section="Forms" subtitle="Text field with label & helper" viewport="700x150"
 */
export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  /** Error message; turns the field danger-red. */
  error?: React.ReactNode;
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingSlot?: React.ReactNode;
  disabled?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** @default true */
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
