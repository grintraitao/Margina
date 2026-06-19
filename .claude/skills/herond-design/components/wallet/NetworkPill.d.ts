import * as React from 'react';

/** Rounded network/account selector pill from the wallet header. */
export interface NetworkPillProps {
  label: React.ReactNode;
  /** Up to 3 colors rendered as overlapping chain/account dots. */
  dots?: string[];
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function NetworkPill(props: NetworkPillProps): JSX.Element;
