import React from 'react';

/**
 * Card — the core surface primitive. Soft radius, subtle border, optional
 * hover lift (the help-center category-card behaviour) and aurora-glow accent.
 */
export function Card({
  children,
  padding = 24,
  interactive = false,
  glow = false,
  as = 'div',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const El = as;

  return (
    <El
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover && interactive ? 'var(--lift-hover)' : 'none',
        borderColor: hover && interactive ? 'color-mix(in srgb, var(--color-primary) 25%, var(--border-default))' : 'var(--border-default)',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base)',
        cursor: interactive ? 'pointer' : 'default',
        position: 'relative',
        overflow: glow ? 'hidden' : 'visible',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        ...style,
      }}
      {...rest}
    >
      {glow && (
        <span style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'var(--aurora-glow)', opacity: hover && interactive ? 1 : 0.6,
          transition: 'opacity var(--duration-base)',
        }} />
      )}
      <span style={{ position: 'relative', display: 'block' }}>{children}</span>
    </El>
  );
}
