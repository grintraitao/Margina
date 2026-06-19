// Herond Help Center — shared UI bits (Navbar, Footer, Logo, Icon)
const { useState, useEffect, useRef } = React;

function LIcon({ n, size = 18, stroke = 2, color, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', n);
    ref.current.appendChild(el);
    if (window.lucide) window.lucide.createIcons({ attrs: { width: size, height: size, 'stroke-width': stroke } });
  }, [n, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', color, ...style }} />;
}

function HCNavbar({ theme, onToggleTheme, onSearch, onHome }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      height: 60, display: 'flex', alignItems: 'center', gap: 16,
      padding: '0 24px',
      background: theme === 'dark' ? 'rgba(15,26,53,0.78)' : 'rgba(255,255,255,0.82)',
      backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <a onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', textDecoration: 'none' }}>
        <img src="../../assets/logo.svg" alt="Herond" style={{ width: 30, height: 30 }} />
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>Herond <span style={{ fontWeight: 600, color: 'var(--text-tertiary)' }}>Help Center</span></span>
      </a>

      <button onClick={onSearch} style={{
        marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8,
        height: 36, padding: '0 12px', minWidth: 220,
        borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)',
        background: 'var(--surface-sunken)', color: 'var(--text-tertiary)',
        fontFamily: 'var(--font-sans)', fontSize: 13, cursor: 'pointer',
      }}>
        <LIcon n="search" size={15} />
        <span style={{ flex: 1, textAlign: 'left' }}>Search docs…</span>
        <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border-default)', borderRadius: 4, padding: '1px 5px' }}>⌘K</span>
      </button>

      <button onClick={onToggleTheme} aria-label="Toggle theme" style={{
        width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)', border: 'none', background: 'transparent',
        color: 'var(--icon-default)', cursor: 'pointer',
      }}>
        <LIcon n={theme === 'dark' ? 'sun' : 'moon'} size={18} />
      </button>

      <a href="https://herond.org/download" target="_blank" rel="noreferrer" style={{
        height: 36, display: 'inline-flex', alignItems: 'center', padding: '0 16px',
        borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)', color: 'var(--color-on-primary)',
        fontWeight: 600, fontSize: 13, textDecoration: 'none',
      }}>Download</a>
    </header>
  );
}

const HC_FOOTER_COLS = [
  { title: 'Help Center', links: ['Desktop Browser', 'Herond Wallet', 'Account & Services', 'Herond Shield', 'Personalization'] },
  { title: 'Community', links: ['Facebook', 'X (Twitter)', 'Discord', 'Telegram'] },
  { title: 'Resources', links: ['Download Herond', 'herond.org', 'Contact Support'] },
  { title: 'Legal', links: ['Terms of Use', 'Website Privacy Policy', 'Browser Privacy Policy'] },
];

function HCFooter() {
  return (
    <footer style={{ background: 'var(--herond-abyss)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px 28px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {HC_FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((l) => (
                  <a key={l} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', cursor: 'pointer' }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, marginTop: 32, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          Copyright © 2026 Herond Browser.
        </div>
      </div>
    </footer>
  );
}

window.LIcon = LIcon;
window.HCNavbar = HCNavbar;
window.HCFooter = HCFooter;
