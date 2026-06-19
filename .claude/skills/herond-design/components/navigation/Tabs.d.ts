import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  count?: number;
}

/** Underline tab bar (wallet Tokens/NFTs, settings sections). Controlled. */
export interface TabsProps {
  /** Array of ids (strings) or { id, label, count } objects. */
  tabs: Array<string | TabItem>;
  /** Active tab id. */
  value: string;
  onChange?: (id: string) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
