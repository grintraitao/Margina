import React from 'react';

/**
 * Badge — small status / count indicator. Solid, soft, or outline tones
 * keyed to semantic colors.
 */
export function Badge({ children, tone = 'primary', variant = 'soft', size = 'md', dot = false, style = {} }) {
  const palette = {
    primary: 'var(--color-primary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    violet: 'var(--herond-violet)',
    neutral: 'var(--gray-500)',
  };
  const c = palette[tone] || palette.primary;
  const sizes = {
    sm: { fontSize: 10, padding: dot ? '3px 8px 3px 6px' : '2px 7px', h: 18 },
    md: { fontSize: 11, padding: dot ? '4px 10px 4px 8px' : '3px 9px', h: 22 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    solid: { background: c, color: '#fff', border: '1px solid transparent' },
    soft: { background: 'color-mix(in srgb, ' + c + ' 14%, transparent)', color: c, border: '1px solid transparent' },
    outline: { background: 'transparent', color: c, border: '1px solid color-mix(in srgb, ' + c + ' 45%, transparent)' },
  };

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.2px',
      padding: s.padding,
      height: s.h,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: c, flex: 'none' }} />}
      {children}
    </span>
  );
}
