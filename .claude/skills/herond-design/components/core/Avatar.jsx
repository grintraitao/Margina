import React from 'react';

/**
 * Avatar — user / account identicon. Falls back to a gradient initials chip.
 */
export function Avatar({ src, name = '', size = 36, ring = false, square = false, style = {} }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <span style={{
      width: size,
      height: size,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: square ? 'var(--radius-md)' : 'var(--radius-pill)',
      background: src ? '#fff' : 'var(--aurora-cool)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.4,
      overflow: 'hidden',
      boxShadow: ring ? 'var(--glow-ring)' : 'none',
      ...style,
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </span>
  );
}
