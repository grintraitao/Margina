import * as React from 'react';

/** Core surface primitive — soft radius, subtle border, optional hover lift. */
export interface CardProps {
  children?: React.ReactNode;
  /** Inner padding in px. @default 24 */
  padding?: number;
  /** Hover lift + shadow + accent border (category-card behaviour). @default false */
  interactive?: boolean;
  /** Render an aurora-glow wash behind content. @default false */
  glow?: boolean;
  /** Element/tag to render. @default "div" */
  as?: any;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
