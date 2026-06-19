/* @ds-bundle: {"format":3,"namespace":"HerondDesignSystem_043536","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CategoryCard","sourcePath":"components/help/CategoryCard.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"NetworkPill","sourcePath":"components/wallet/NetworkPill.jsx"},{"name":"TokenRow","sourcePath":"components/wallet/TokenRow.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a0d3c6c5b3ac","components/core/Badge.jsx":"1d88d6684eb2","components/core/Button.jsx":"7611ed83cf66","components/core/Card.jsx":"67f03f428538","components/core/IconButton.jsx":"0e11856260d9","components/core/Switch.jsx":"07706ad72efa","components/forms/Input.jsx":"75674abe5760","components/help/CategoryCard.jsx":"6c928ef82cd4","components/navigation/Tabs.jsx":"0506b030c31c","components/wallet/NetworkPill.jsx":"4a75e0cbce11","components/wallet/TokenRow.jsx":"b2459b4215ff","ui_kits/help-center/Chrome.jsx":"a19cd2e44e4a","ui_kits/help-center/Pages.jsx":"4c973cfa9cc4","ui_kits/help-center/data.js":"d411b0c9475f","ui_kits/herond-wallet/WalletPanel.jsx":"f99a72438937","ui_kits/herond-wallet/data.js":"d117f31395de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HerondDesignSystem_043536 = window.HerondDesignSystem_043536 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — user / account identicon. Falls back to a gradient initials chip.
 */
function Avatar({
  src,
  name = '',
  size = 36,
  ring = false,
  square = false,
  style = {}
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small status / count indicator. Solid, soft, or outline tones
 * keyed to semantic colors.
 */
function Badge({
  children,
  tone = 'primary',
  variant = 'soft',
  size = 'md',
  dot = false,
  style = {}
}) {
  const palette = {
    primary: 'var(--color-primary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    violet: 'var(--herond-violet)',
    neutral: 'var(--gray-500)'
  };
  const c = palette[tone] || palette.primary;
  const sizes = {
    sm: {
      fontSize: 10,
      padding: dot ? '3px 8px 3px 6px' : '2px 7px',
      h: 18
    },
    md: {
      fontSize: 11,
      padding: dot ? '4px 10px 4px 8px' : '3px 9px',
      h: 22
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: c,
      color: '#fff',
      border: '1px solid transparent'
    },
    soft: {
      background: 'color-mix(in srgb, ' + c + ' 14%, transparent)',
      color: c,
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: c,
      border: '1px solid color-mix(in srgb, ' + c + ' 45%, transparent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Herond Button — primary action control.
 * Variants map to the brand: solid primary (Blue Sky), secondary (outline),
 * ghost (text), and danger (Pink). Pill option matches the wallet's rounded CTAs.
 */
function Button({
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
    sm: {
      fontSize: 13,
      padding: '7px 14px',
      height: 32,
      gap: 6,
      icon: 15
    },
    md: {
      fontSize: 14,
      padding: '9px 18px',
      height: 40,
      gap: 8,
      icon: 17
    },
    lg: {
      fontSize: 15,
      padding: '12px 24px',
      height: 48,
      gap: 9,
      icon: 19
    }
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
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    danger: {
      background: 'var(--color-danger)',
      color: '#fff'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-hover)'
    },
    secondary: {
      background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)'
    },
    ghost: {
      background: 'var(--surface-hover)',
      color: 'var(--text-primary)'
    },
    danger: {
      background: '#e93363'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      transform: !disabled && active ? 'scale(0.97)' : 'scale(1)',
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the core surface primitive. Soft radius, subtle border, optional
 * hover lift (the help-center category-card behaviour) and aurora-glow accent.
 */
function Card({
  children,
  padding = 24,
  interactive = false,
  glow = false,
  as = 'div',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover && interactive ? 'var(--lift-hover)' : 'none',
      borderColor: hover && interactive ? 'color-mix(in srgb, var(--color-primary) 25%, var(--border-default))' : 'var(--border-default)',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base)',
      cursor: interactive ? 'pointer' : 'default',
      position: 'relative',
      overflow: glow ? 'hidden' : 'visible',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      ...style
    }
  }, rest), glow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'var(--aurora-glow)',
      opacity: hover && interactive ? 1 : 0.6,
      transition: 'opacity var(--duration-base)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/round icon-only control used throughout the wallet
 * toolbar and browser chrome.
 */
function IconButton({
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
  const sizes = {
    sm: 30,
    md: 36,
    lg: 44
  };
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const variants = {
    ghost: {
      background: active ? 'var(--surface-hover)' : 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--icon-default)'
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    soft: {
      background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
      color: 'var(--color-primary)'
    }
  };
  const hoverBg = !disabled && hover ? {
    ghost: {
      background: 'var(--surface-hover)',
      color: 'var(--icon-strong)'
    },
    solid: {
      background: 'var(--color-primary-hover)'
    },
    soft: {
      background: 'color-mix(in srgb, var(--color-primary) 20%, transparent)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/**
 * Switch — on/off toggle. On state uses the brand primary.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style = {}
}) {
  const dims = {
    sm: {
      w: 34,
      h: 20,
      knob: 14
    },
    md: {
      w: 42,
      h: 24,
      knob: 18
    }
  };
  const d = dims[size] || dims.md;
  const pad = (d.h - d.knob) / 2;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const sw = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
      width: d.w,
      height: d.h,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-primary)' : 'var(--gray-300)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: pad,
      left: checked ? d.w - d.knob - pad : pad,
      width: d.knob,
      height: d.knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, sw);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, sw, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional leading icon, label and helper/error text.
 */
function Input({
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
  const sizes = {
    sm: {
      h: 36,
      fs: 13,
      px: 12
    },
    md: {
      h: 44,
      fs: 14,
      px: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
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
      opacity: disabled ? 0.6 : 1
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--icon-default)',
      flex: 'none'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: 'var(--text-primary)'
    }
  }, rest)), trailingSlot && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: 'none'
    }
  }, trailingSlot)), (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 5,
      color: error ? 'var(--color-danger)' : 'var(--text-tertiary)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/help/CategoryCard.jsx
try { (() => {
/**
 * CategoryCard — the help-center homepage card: accent-tinted icon tile,
 * article count, name, description, and an arrow that slides in on hover.
 */
function CategoryCard({
  icon,
  name,
  description,
  count,
  accent = 'var(--color-primary)',
  href,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `color-mix(in srgb, ${accent} 12%, transparent)`,
      color: accent
    }
  }, icon), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: accent,
      opacity: 0.8
    }
  }, count)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 12,
      fontSize: 18,
      fontWeight: 700,
      color: accent,
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateX(0)' : 'translateX(-4px)',
      transition: 'opacity var(--duration-base), transform var(--duration-base)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/help/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline tab bar (wallet "Tokens / NFTs", browser nav).
 * Controlled via `value` + `onChange`.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  size = 'md',
  style = {}
}) {
  const sizes = {
    sm: {
      fs: 13,
      pad: '8px 2px',
      gap: 20
    },
    md: {
      fs: 14,
      pad: '11px 2px',
      gap: 26
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: s.gap,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const labelText = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'string' ? undefined : t.count;
    const activeTab = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onChange && onChange(id),
      style: {
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
        gap: 6
      }
    }, labelText, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: activeTab ? 'var(--color-primary)' : 'var(--text-tertiary)'
      }
    }, count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: 'var(--color-primary)',
        transform: activeTab ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/wallet/NetworkPill.jsx
try { (() => {
/**
 * NetworkPill — the rounded selector used in the wallet header for
 * "All Networks" / "All accounts". Shows stacked dots + label + chevron.
 */
function NetworkPill({
  label,
  dots = [],
  onClick,
  active = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, dots.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, dots.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: c,
      border: '2px solid var(--bg-elevated)',
      marginLeft: i === 0 ? 0 : -7
    }
  }))), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      color: 'var(--icon-default)'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })));
}
Object.assign(__ds_scope, { NetworkPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/NetworkPill.jsx", error: String((e && e.message) || e) }); }

// components/wallet/TokenRow.jsx
try { (() => {
/**
 * TokenRow — a single asset row in the wallet portfolio list.
 * Token icon, name + network, balance + fiat value, optional price delta.
 */
function TokenRow({
  icon,
  symbol,
  name,
  network,
  amount,
  fiat,
  change,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const up = typeof change === 'number' ? change >= 0 : String(change || '').trim().startsWith('+');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--surface-hover)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: symbol,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : icon || (symbol || '').slice(0, 3)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, name || symbol), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, network)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fiat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      display: 'flex',
      gap: 6,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, amount), change != null && change !== '' && /*#__PURE__*/React.createElement("span", {
    style: {
      color: up ? 'var(--color-up)' : 'var(--color-down)',
      fontWeight: 600
    }
  }, typeof change === 'number' ? `${up ? '+' : ''}${change}%` : change))));
}
Object.assign(__ds_scope, { TokenRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wallet/TokenRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-center/Chrome.jsx
try { (() => {
// Herond Help Center — shared UI bits (Navbar, Footer, Logo, Icon)
const {
  useState,
  useEffect,
  useRef
} = React;
function LIcon({
  n,
  size = 18,
  stroke = 2,
  color,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', n);
    ref.current.appendChild(el);
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
  }, [n, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}
function HCNavbar({
  theme,
  onToggleTheme,
  onSearch,
  onHome
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: theme === 'dark' ? 'rgba(15,26,53,0.78)' : 'rgba(255,255,255,0.82)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Herond",
    style: {
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-0.3px',
      color: 'var(--text-primary)'
    }
  }, "Herond ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-tertiary)'
    }
  }, "Help Center"))), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      minWidth: 220,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    n: "search",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left'
    }
  }, "Search docs\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      border: '1px solid var(--border-default)',
      borderRadius: 4,
      padding: '1px 5px'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      width: 36,
      height: 36,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      background: 'transparent',
      color: 'var(--icon-default)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    n: theme === 'dark' ? 'sun' : 'moon',
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://herond.org/download",
    target: "_blank",
    rel: "noreferrer",
    style: {
      height: 36,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      fontWeight: 600,
      fontSize: 13,
      textDecoration: 'none'
    }
  }, "Download"));
}
const HC_FOOTER_COLS = [{
  title: 'Help Center',
  links: ['Desktop Browser', 'Herond Wallet', 'Account & Services', 'Herond Shield', 'Personalization']
}, {
  title: 'Community',
  links: ['Facebook', 'X (Twitter)', 'Discord', 'Telegram']
}, {
  title: 'Resources',
  links: ['Download Herond', 'herond.org', 'Contact Support']
}, {
  title: 'Legal',
  links: ['Terms of Use', 'Website Privacy Policy', 'Browser Privacy Policy']
}];
function HCFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--herond-abyss)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    }
  }, HC_FOOTER_COLS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: 14
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingTop: 20,
      marginTop: 32,
      fontSize: 13,
      color: 'rgba(255,255,255,0.3)'
    }
  }, "Copyright \xA9 2026 Herond Browser.")));
}
window.LIcon = LIcon;
window.HCNavbar = HCNavbar;
window.HCFooter = HCFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-center/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-center/Pages.jsx
try { (() => {
// Herond Help Center — pages (Home, Article) + Search overlay
const {
  useState: useStateP
} = React;
function HCHome({
  onOpenCategory,
  onOpenArticle
}) {
  const {
    CategoryCard
  } = window.HerondDesignSystem_043536;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '76px 24px 60px',
      textAlign: 'center',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--aurora-glow)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 42,
      fontWeight: 700,
      letterSpacing: '-1px',
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, "How can we help you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      margin: 0
    }
  }, "Defend \xB7 Discover \xB7 Decentralize"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, window.HC_CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryCard, {
    key: c.name,
    name: c.name,
    count: c.count,
    accent: c.accent,
    description: c.desc,
    icon: /*#__PURE__*/React.createElement(window.LIcon, {
      n: c.icon,
      size: 24,
      stroke: 1.8
    }),
    onClick: e => {
      e.preventDefault();
      onOpenCategory(c);
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 0 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      margin: '0 0 16px 2px',
      color: 'var(--text-tertiary)'
    }
  }, "Popular Articles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 8
    }
  }, window.HC_POPULAR.map((a, i) => /*#__PURE__*/React.createElement(PopularRow, {
    key: i,
    a: a,
    onClick: () => onOpenArticle(a)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '16px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '0 0 12px'
    }
  }, "Can't find what you're looking for? Our team is here to help."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@herond.org",
    style: {
      display: 'inline-block',
      color: 'var(--color-primary)',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: 14,
      padding: '8px 24px',
      border: '1px solid var(--color-primary)',
      borderRadius: 'var(--radius-sm)'
    }
  }, "Contact Support"))));
}
function PopularRow({
  a,
  onClick
}) {
  const [hover, setHover] = useStateP(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      cursor: 'pointer',
      border: '1px solid ' + (hover ? 'color-mix(in srgb, var(--color-primary) 22%, var(--border-subtle))' : 'var(--border-subtle)'),
      background: hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      transition: 'all var(--duration-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: hover ? 'var(--color-primary)' : 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--text-tertiary)',
      flexShrink: 0
    }
  }, a.category));
}
function HCArticle({
  article,
  onHome
}) {
  const {
    Badge
  } = window.HerondDesignSystem_043536;
  const a = article && article.steps ? article : window.HC_ARTICLE;
  const cat = article && article.category || a.category;
  const title = article && article.title || a.title;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1060,
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '230px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 76,
      paddingTop: 40
    }
  }, window.HC_CATEGORIES.slice(0, 4).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: 'var(--text-secondary)',
      padding: '6px 12px',
      borderLeft: '3px solid ' + c.accent
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-default)',
      marginLeft: 7,
      marginTop: 4
    }
  }, [1, 2, 3].map(n => {
    const activeRow = c.name === cat && n === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        fontSize: 13,
        padding: '6px 12px 6px 16px',
        color: activeRow ? 'var(--color-primary)' : 'var(--text-secondary)',
        fontWeight: activeRow ? 600 : 400,
        borderLeft: activeRow ? '2px solid var(--color-primary)' : '2px solid transparent',
        marginLeft: -1,
        cursor: 'pointer'
      }
    }, activeRow ? title : c.name + ' article ' + n);
  }))))), /*#__PURE__*/React.createElement("article", {
    style: {
      paddingTop: 40,
      paddingBottom: 56,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-tertiary)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, "Help Center"), /*#__PURE__*/React.createElement(window.LIcon, {
    n: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, cat)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.5px',
      color: 'var(--text-primary)',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: '0 0 28px'
    }
  }, a.description), a.steps.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '0 0 10px'
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.body), s.tip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 10,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'color-mix(in srgb, var(--color-success) 10%, transparent)',
      border: '1px solid color-mix(in srgb, var(--color-success) 28%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(window.LIcon, {
    n: "lightbulb",
    size: 18,
    color: "var(--color-success)",
    style: {
      flex: 'none',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, s.tip)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 36,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Was this article helpful?"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "outline"
  }, "Yes"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "outline"
  }, "No"))));
}
function HCSearch({
  open,
  onClose,
  onOpenArticle
}) {
  const [q, setQ] = useStateP('');
  if (!open) return null;
  const results = window.HC_POPULAR.filter(a => a.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(10,18,40,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 560,
      maxWidth: '90vw',
      height: 'fit-content',
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(window.LIcon, {
    n: "search",
    size: 18,
    color: "var(--icon-default)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search the help center\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-tertiary)',
      border: '1px solid var(--border-default)',
      borderRadius: 4,
      padding: '2px 6px'
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 320,
      overflowY: 'auto',
      padding: 8
    }
  }, results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 14
    }
  }, "No results for \"", q, "\""), results.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => {
      onOpenArticle(a);
      onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(window.LIcon, {
    n: "file-text",
    size: 16,
    color: "var(--icon-default)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, a.category))))));
}
window.HCHome = HCHome;
window.HCArticle = HCArticle;
window.HCSearch = HCSearch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-center/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/help-center/data.js
try { (() => {
// Herond Help Center — data
window.HC_CATEGORIES = [{
  name: 'Desktop Browser',
  icon: 'monitor',
  accent: '#3373F6',
  count: 12,
  desc: 'Installation, features & browsing guides'
}, {
  name: 'Herond Wallet',
  icon: 'wallet',
  accent: '#6b33fa',
  count: 10,
  desc: 'Create, manage & secure your wallet'
}, {
  name: 'Account & Services',
  icon: 'user-circle',
  accent: '#00b3ED',
  count: 8,
  desc: 'Sign in, sync & account settings'
}, {
  name: 'Herond Shield',
  icon: 'shield-check',
  accent: '#ff4070',
  count: 11,
  desc: 'Privacy, ad-blocking & security'
}, {
  name: 'Herond Ecosystem',
  icon: 'globe',
  accent: '#00CCC0',
  count: 5,
  desc: 'Explore the Herond ecosystem'
}, {
  name: 'Personalization',
  icon: 'palette',
  accent: '#EC4899',
  count: 5,
  desc: 'Themes, extensions & customization'
}];
window.HC_POPULAR = [{
  title: 'How to Install Herond Browser',
  category: 'Desktop Browser'
}, {
  title: 'How to Create Your Wallet on Desktop',
  category: 'Herond Wallet'
}, {
  title: 'What is a Herond Account?',
  category: 'Account & Services'
}, {
  title: 'How do I use Herond Shield?',
  category: 'Herond Shield'
}, {
  title: 'How to Swap Coins in Herond Wallet',
  category: 'Herond Wallet'
}, {
  title: 'Set Herond as your Default Browser',
  category: 'Desktop Browser'
}, {
  title: 'What is Account Abstraction?',
  category: 'Herond Wallet'
}, {
  title: 'What does TOR Integration mean?',
  category: 'Herond Shield'
}];

// A sample article rendered in the article view
window.HC_ARTICLE = {
  title: 'How to Create Your Wallet on Desktop',
  category: 'Herond Wallet',
  description: 'Set up your non-custodial wallet on Herond Desktop in minutes.',
  steps: [{
    h: 'Step 1 · Open Herond Browser and Access the Wallet',
    body: 'Open Herond Browser, then click the Wallet icon in the top-right corner. This opens the Wallet Sidebar where you can manage your wallet and accounts.'
  }, {
    h: 'Step 2 · Create Your Herond Keyless Wallet',
    body: 'When the sidebar appears, tap Log in to Herond and choose Create Wallet. Herond will generate a secure key using MPC-TSS technology — no seed phrase needed.'
  }, {
    h: 'Step 3 · Set a Strong Password',
    body: 'Set a device password to protect your wallet on this device. Your password stays on your device only — Herond never stores it.',
    tip: 'Use at least 10 characters, mix upper/lower case, numbers and symbols, and avoid simple patterns.'
  }, {
    h: 'Step 4 · Wait for Setup to Complete',
    body: 'Herond prepares your wallet. After a few seconds you reach the success screen — tap Get Started to open your wallet homepage.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/help-center/data.js", error: String((e && e.message) || e) }); }

// ui_kits/herond-wallet/WalletPanel.jsx
try { (() => {
// Herond Wallet — the in-browser wallet sidebar panel
const {
  useState: useStateW
} = React;
function ActionButton({
  icon,
  label,
  onClick
}) {
  const [hover, setHover] = useStateW(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)',
      color: hover ? '#fff' : 'var(--color-primary)',
      border: '1px solid ' + (hover ? 'transparent' : 'rgba(255,255,255,0.10)'),
      transition: 'all var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, label));
}
function WalletPanel() {
  const {
    NetworkPill,
    TokenRow,
    Tabs,
    Avatar,
    IconButton,
    Badge,
    Button
  } = window.HerondDesignSystem_043536;
  const [tab, setTab] = useStateW('tokens');
  const [hidden, setHidden] = useStateW(false);
  const [sheet, setSheet] = useStateW(null); // 'send' | null

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      height: 720,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--herond-cosmic)',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 260,
      background: 'var(--aurora-glow)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--herond-ozone)',
      padding: '8px',
      background: 'rgba(0,179,237,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }
  }, "You're early \u2014 welcome to the Beta!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '14px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "A1",
    ring: true,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, "Account 1"), /*#__PURE__*/React.createElement(window.HWIcon, {
    n: "copy",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    ariaLabel: "refresh"
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: "refresh-cw",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    ariaLabel: "settings"
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: "settings",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: '-1px',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, hidden ? '••••••' : '$21,091', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, hidden ? '' : '.91')), /*#__PURE__*/React.createElement("span", {
    onClick: () => setHidden(!hidden),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: hidden ? 'eye-off' : 'eye',
    size: 18,
    color: "var(--text-tertiary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "soft"
  }, "\u25B2 $349.45"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-up)',
      fontWeight: 600
    }
  }, "+1.68%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(ActionButton, {
    icon: "arrow-up",
    label: "Send",
    onClick: () => setSheet('send')
  }), /*#__PURE__*/React.createElement(ActionButton, {
    icon: "arrow-down",
    label: "Receive",
    onClick: () => setSheet('receive')
  }), /*#__PURE__*/React.createElement(ActionButton, {
    icon: "dollar-sign",
    label: "Buy"
  }), /*#__PURE__*/React.createElement(ActionButton, {
    icon: "repeat",
    label: "Swap"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'tokens',
      label: 'Tokens'
    }, {
      id: 'nfts',
      label: 'NFTs'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      overflowY: 'auto',
      padding: '8px 10px 16px'
    }
  }, tab === 'tokens' ? window.HW_TOKENS.map(t => /*#__PURE__*/React.createElement(TokenRow, {
    key: t.symbol,
    icon: /*#__PURE__*/React.createElement(window.Coin, {
      color: t.color,
      glyph: t.glyph
    }),
    symbol: t.symbol,
    name: t.name,
    network: t.network,
    amount: t.amount,
    fiat: t.fiat,
    change: t.change,
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 20px',
      textAlign: 'center',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: "image",
    size: 30,
    color: "var(--text-tertiary)",
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "No NFTs yet"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0 14px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'var(--herond-midnight)'
    }
  }, [['layout-grid', true], ['compass', false], ['repeat', false], ['clock', false], ['settings', false]].map(([n, active], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: active ? 'var(--color-primary)' : 'var(--text-tertiary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: n,
    size: 20
  })))), sheet && /*#__PURE__*/React.createElement(SendSheet, {
    kind: sheet,
    onClose: () => setSheet(null)
  }));
}
function SendSheet({
  kind,
  onClose
}) {
  const {
    Button,
    Input,
    Avatar
  } = window.HerondDesignSystem_043536;
  const [addr, setAddr] = useStateW('');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 10,
      background: 'rgba(10,18,40,0.6)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: 'var(--herond-midnight)',
      borderTopLeftRadius: 'var(--radius-xl)',
      borderTopRightRadius: 'var(--radius-xl)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: 20,
      animation: 'hwSlide var(--duration-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      textTransform: 'capitalize'
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(window.HWIcon, {
    n: "x",
    size: 18,
    color: "var(--text-tertiary)"
  }))), kind === 'send' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Recipient address",
    placeholder: "0x\u2026 or .eth",
    value: addr,
    onChange: e => setAddr(e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(window.HWIcon, {
      n: "wallet",
      size: 16
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Amount",
    placeholder: "0.00",
    trailingSlot: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--color-primary)'
      }
    }, "MAX")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    pill: true
  }, "Review transaction")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '6px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 150,
      margin: '0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'repeating-conic-gradient(#0F1A35 0% 25%, #fff 0% 50%) 50%/14px 14px',
      border: '6px solid #fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "0x71C7\u2026f9E3"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    pill: true,
    leadingIcon: /*#__PURE__*/React.createElement(window.HWIcon, {
      n: "copy",
      size: 15
    })
  }, "Copy address"))));
}
window.WalletPanel = WalletPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/herond-wallet/WalletPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/herond-wallet/data.js
try { (() => {
// Herond Wallet — data + shared helpers
const {
  useState,
  useEffect,
  useRef
} = React;
window.HW_TOKENS = [{
  symbol: 'SOL',
  name: 'Solana',
  network: 'SOL on Solana Mainnet Beta',
  amount: '36.27 SOL',
  fiat: '$4,260.66',
  change: 1.4,
  color: '#000',
  glyph: 'S'
}, {
  symbol: 'ETH',
  name: 'Ethereum',
  network: 'ETH on Ethereum Mainnet',
  amount: '2.98 ETH',
  fiat: '$10,983.00',
  change: 2.3,
  color: '#627EEA',
  glyph: 'Ξ'
}, {
  symbol: 'BTC',
  name: 'Bitcoin',
  network: 'BTC on Bitcoin',
  amount: '0.0404 BTC',
  fiat: '$4,102.76',
  change: -1.7,
  color: '#F7931A',
  glyph: '₿'
}, {
  symbol: 'USDT',
  name: 'Tether',
  network: 'USDT on Ethereum',
  amount: '833.64 USDT',
  fiat: '$833.64',
  change: 0.0,
  color: '#26A17B',
  glyph: '₮'
}, {
  symbol: 'MATIC',
  name: 'Polygon',
  network: 'MATIC on Polygon',
  amount: '210.5 MATIC',
  fiat: '$181.03',
  change: 4.1,
  color: '#8247E5',
  glyph: 'M'
}, {
  symbol: 'BAT',
  name: 'Basic Attention',
  network: 'BAT on Ethereum',
  amount: '1,204 BAT',
  fiat: '$330.85',
  change: -0.4,
  color: '#FF5000',
  glyph: 'B'
}];
function HWIcon({
  n,
  size = 18,
  stroke = 2,
  color,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', n);
    ref.current.appendChild(el);
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
  }, [n, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}

// A round coin badge used as TokenRow icon
function Coin({
  color,
  glyph
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 17
    }
  }, glyph);
}
window.HWIcon = HWIcon;
window.Coin = Coin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/herond-wallet/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.NetworkPill = __ds_scope.NetworkPill;

__ds_ns.TokenRow = __ds_scope.TokenRow;

})();
