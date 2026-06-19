import React from 'react';

/**
 * Input — text field with optional leading icon, label and helper/error text.
 */
export function Input({
  value,
  onChange,
  placeholder,
  label,
  helper,
  error,
  type = 'text',
  leadingIcon = null,
  trailingSlot = null,
  disabled = false,
  size = 'md',
  fullWidth = true,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = { sm: { h: 36, fs: 13, px: 12 }, md: { h: 44, fs: 14, px: 14 } };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--color-danger)' : (focus ? 'var(--border-focus)' : 'var(--border-default)');

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto', fontFamily: 'var(--font-sans)', ...style }}>
      {label && (
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>{label}</label>
      )}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: s.h,
        padding: `0 ${s.px}px`,
        background: disabled ? 'var(--surface-sunken)' : 'var(--bg-elevated)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--duration-base), box-shadow var(--duration-base)',
        opacity: disabled ? 0.6 : 1,
      }}>
        {leadingIcon && <span style={{ display: 'inline-flex', color: 'var(--icon-default)', flex: 'none' }}>{leadingIcon}</span>}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: s.fs,
            color: 'var(--text-primary)',
          }}
          {...rest}
        />
        {trailingSlot && <span style={{ display: 'inline-flex', flex: 'none' }}>{trailingSlot}</span>}
      </div>
      {(helper || error) && (
        <div style={{ fontSize: 12, marginTop: 5, color: error ? 'var(--color-danger)' : 'var(--text-tertiary)' }}>{error || helper}</div>
      )}
    </div>
  );
}
