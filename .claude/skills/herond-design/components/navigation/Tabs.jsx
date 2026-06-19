import React from 'react';

/**
 * Tabs — underline tab bar (wallet "Tokens / NFTs", browser nav).
 * Controlled via `value` + `onChange`.
 */
export function Tabs({ tabs = [], value, onChange, size = 'md', style = {} }) {
  const sizes = { sm: { fs: 13, pad: '8px 2px', gap: 20 }, md: { fs: 14, pad: '11px 2px', gap: 26 } };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{
      display: 'flex',
      gap: s.gap,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.id;
        const labelText = typeof t === 'string' ? t : t.label;
        const count = typeof t === 'string' ? undefined : t.count;
        const activeTab = id === value;
        return (
          <button
            key={id}
            onClick={() => onChange && onChange(id)}
            style={{
              position: 'relative',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: s.pad,
              fontFamily: 'var(--font-sans)',
              fontSize: s.fs,
              fontWeight: activeTab ? 700 : 500,
              color: activeTab ? 'var(--text-primary)' : 'var(--text-tertiary)',
              transition: 'color var(--duration-base)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {labelText}
            {count != null && (
              <span style={{ fontSize: 11, fontWeight: 700, color: activeTab ? 'var(--color-primary)' : 'var(--text-tertiary)' }}>{count}</span>
            )}
            <span style={{
              position: 'absolute',
              left: 0, right: 0, bottom: -1,
              height: 2,
              borderRadius: 2,
              background: 'var(--color-primary)',
              transform: activeTab ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform var(--duration-base) var(--ease-out)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
