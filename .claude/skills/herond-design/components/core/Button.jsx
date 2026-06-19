import React from 'react';

/**
 * Herond Button — primary action control.
 * Variants map to the brand: solid primary (Blue Sky), secondary (outline),
 * ghost (text), and danger (Pink). Pill option matches the wallet's rounded CTAs.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  disabled = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 13, padding: '7px 14px', height: 32, gap: 6, icon: 15 },
    md: { fontSize: 14, padding: '9px 18px', height: 40, gap: 8, icon: 17 },
    lg: { fontSize: 15, padding: '12px 24px', height: 48, gap: 9, icon: 19 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    border: '1px solid transparent',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-out), opacity var(--duration-base)',
    opacity: disabled ? 0.45 : 1,
    userSelect: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
    danger: {
      background: 'var(--color-danger)',
      color: '#fff',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--color-primary-hover)' },
    secondary: { background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)' },
    ghost: { background: 'var(--surface-hover)', color: 'var(--text-primary)' },
    danger: { background: '#e93363' },
  }[variant] : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        ...base,
        ...variants[variant],
        ...hoverStyle,
        transform: !disabled && active ? 'scale(0.97)' : 'scale(1)',
        ...style,
      }}
      {...rest}
    >
      {leadingIcon && <span style={{ display: 'inline-flex' }}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ display: 'inline-flex' }}>{trailingIcon}</span>}
    </button>
  );
}
