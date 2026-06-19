import React from 'react';

/**
 * NetworkPill — the rounded selector used in the wallet header for
 * "All Networks" / "All accounts". Shows stacked dots + label + chevron.
 */
export function NetworkPill({ label, dots = [], onClick, active = false, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 40,
        padding: '0 14px 0 10px',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${active || hover ? 'var(--color-primary)' : 'var(--border-default)'}`,
        background: 'var(--bg-elevated)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-primary)',
        transition: 'border-color var(--duration-base)',
        ...style,
      }}
    >
      {dots.length > 0 && (
        <span style={{ display: 'inline-flex' }}>
          {dots.slice(0, 3).map((c, i) => (
            <span key={i} style={{
              width: 18, height: 18, borderRadius: '50%', background: c,
              border: '2px solid var(--bg-elevated)', marginLeft: i === 0 ? 0 : -7,
            }} />
          ))}
        </span>
      )}
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--icon-default)' }}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
