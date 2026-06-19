import * as React from 'react';

/** A single asset row in the wallet portfolio (icon, name, balance, delta). */
export interface TokenRowProps {
  /** Token logo URL, a React node, or omitted (falls back to symbol text). */
  icon?: string | React.ReactNode;
  symbol?: string;
  name?: string;
  /** e.g. "SOL on Solana Mainnet Beta" */
  network?: React.ReactNode;
  /** Token amount, e.g. "36.27 SOL" */
  amount?: React.ReactNode;
  /** Fiat value, e.g. "$4,260.66" */
  fiat?: React.ReactNode;
  /** Price change — number (percent) or string like "+1.4%". */
  change?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function TokenRow(props: TokenRowProps): JSX.Element;
