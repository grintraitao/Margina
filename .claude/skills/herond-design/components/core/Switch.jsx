import React from 'react';

/**
 * Switch — on/off toggle. On state uses the brand primary.
 */
export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, style = {} }) {
  const dims = {
    sm: { w: 34, h: 20, knob: 14 },
    md: { w: 42, h: 24, knob: 18 },
  };
  const d = dims[size] || dims.md;
  const pad = (d.h - d.knob) / 2;

  const toggle = () => { if (!disabled && onChange) onChange(!checked); };

  const sw = (
    <span
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      style={{
        width: d.w,
        height: d.h,
        flex: 'none',
        borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--color-primary)' : 'var(--gray-300)',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--duration-base) var(--ease-out)',
      }}
    >
      <span style={{
        position: 'absolute',
        top: pad,
        left: checked ? d.w - d.knob - pad : pad,
        width: d.knob,
        height: d.knob,
        borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
        transition: 'left var(--duration-base) var(--ease-out)',
      }} />
    </span>
  );

  if (!label) return <span style={style}>{sw}</span>;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)', ...style }}>
      {sw}
      <span>{label}</span>
    </label>
  );
}
