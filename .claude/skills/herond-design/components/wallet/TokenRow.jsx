import React from 'react';

/**
 * TokenRow — a single asset row in the wallet portfolio list.
 * Token icon, name + network, balance + fiat value, optional price delta.
 */
export function TokenRow({
  icon,
  symbol,
  name,
  network,
  amount,
  fiat,
  change,
  onClick,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const up = typeof change === 'number' ? change >= 0 : String(change || '').trim().startsWith('+');

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        background: hover ? 'var(--surface-hover)' : 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--duration-fast)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      <span style={{
        width: 38, height: 38, flex: 'none', borderRadius: '50%',
        background: 'var(--surface-sunken)', display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        fontWeight: 700, fontSize: 13, color: 'var(--text-secondary)',
      }}>
        {typeof icon === 'string'
          ? <img src={icon} alt={symbol} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : (icon || (symbol || '').slice(0, 3))}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{name || symbol}</div>
        <div style={{ fontSize: 12, color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {network}
        </div>
      </div>

      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{fiat}</div>
        <div style={{ fontSize: 12, color: 'var(--text-tertiary)', display: 'flex', gap: 6, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{amount}</span>
          {change != null && change !== '' && (
            <span style={{ color: up ? 'var(--color-up)' : 'var(--color-down)', fontWeight: 600 }}>
              {typeof change === 'number' ? `${up ? '+' : ''}${change}%` : change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
