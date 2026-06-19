import * as React from 'react';

/** Account / user avatar; gradient initials fallback when no image. */
export interface AvatarProps {
  src?: string;
  /** Used for initials fallback + alt text. */
  name?: string;
  /** Diameter in px. @default 36 */
  size?: number;
  /** Cyan glow ring (active account). @default false */
  ring?: boolean;
  /** Rounded square instead of circle. @default false */
  square?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
