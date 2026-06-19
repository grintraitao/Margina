import * as React from 'react';

/**
 * Help-center category card — accent icon tile, count, name, description,
 * arrow on hover.
 *
 * @startingPoint section="Help Center" subtitle="Category card with hover lift" viewport="360x180"
 */
export interface CategoryCardProps {
  icon?: React.ReactNode;
  name: React.ReactNode;
  description?: React.ReactNode;
  count?: number;
  /** Accent color for icon tile / count / arrow. @default brand primary */
  accent?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function CategoryCard(props: CategoryCardProps): JSX.Element;
