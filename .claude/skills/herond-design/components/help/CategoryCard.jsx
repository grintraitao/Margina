import React from 'react';

/**
 * CategoryCard — the help-center homepage card: accent-tinted icon tile,
 * article count, name, description, and an arrow that slides in on hover.
 */
export function CategoryCard({ icon, name, description, count, accent = 'var(--color-primary)', href, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 160,
        padding: 24,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-card)',
        border: `1px solid ${hover ? 'color-mix(in srgb, ' + accent + ' 30%, var(--border-default))' : 'var(--border-default)'}`,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'var(--lift-hover)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base), border-color var(--duration-base)',
        textDecoration: 'none',
        color: 'inherit',
        fontFamily: 'var(--font-sans)',
        cursor: 'pointer',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{
          width: 48, height: 48, borderRadius: 'var(--radius-md)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: `color-mix(in srgb, ${accent} 12%, transparent)`, color: accent,
        }}>{icon}</span>
        {count != null && (
          <span style={{ fontSize: 13, fontWeight: 700, color: accent, opacity: 0.8 }}>{count}</span>
        )}
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', flex: 1 }}>{description}</div>
      <span style={{
        marginTop: 12, fontSize: 18, fontWeight: 700, color: accent,
        opacity: hover ? 1 : 0, transform: hover ? 'translateX(0)' : 'translateX(-4px)',
        transition: 'opacity var(--duration-base), transform var(--duration-base)',
      }}>&rarr;</span>
    </a>
  );
}
