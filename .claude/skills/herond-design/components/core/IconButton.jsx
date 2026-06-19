import React from 'react';

/**
 * IconButton — square/round icon-only control used throughout the wallet
 * toolbar and browser chrome.
 */
export function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  round = false,
  active = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = { sm: 30, md: 36, lg: 44 };
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const variants = {
    ghost: {
      background: active ? 'var(--surface-hover)' : 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--icon-default)',
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
    },
    soft: {
      background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
      color: 'var(--color-primary)',
    },
  };

  const hoverBg = !disabled && hover ? {
    ghost: { background: 'var(--surface-hover)', color: 'var(--icon-strong)' },
    solid: { background: 'var(--color-primary-hover)' },
    soft: { background: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' },
  }[variant] : {};

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        width: dim,
        height: dim,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background var(--duration-base), color var(--duration-base), transform var(--duration-fast)',
        transform: press ? 'scale(0.92)' : 'scale(1)',
        ...variants[variant],
        ...hoverBg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
