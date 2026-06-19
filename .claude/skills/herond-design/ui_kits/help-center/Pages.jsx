// Herond Help Center — pages (Home, Article) + Search overlay
const { useState: useStateP } = React;

function HCHome({ onOpenCategory, onOpenArticle }) {
  const { CategoryCard } = window.HerondDesignSystem_043536;
  return (
    <main>
      {/* Hero */}
      <header style={{ position: 'relative', overflow: 'hidden', padding: '76px 24px 60px', textAlign: 'center', background: 'var(--bg-page)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--aurora-glow)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <h1 style={{ fontSize: 42, fontWeight: 700, letterSpacing: '-1px', color: 'var(--text-primary)', margin: '0 0 12px' }}>How can we help you?</h1>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-tertiary)', margin: 0 }}>Defend · Discover · Decentralize</p>
        </div>
      </header>

      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>
        {/* Categories */}
        <section style={{ padding: '48px 0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {window.HC_CATEGORIES.map((c) => (
              <CategoryCard
                key={c.name}
                name={c.name}
                count={c.count}
                accent={c.accent}
                description={c.desc}
                icon={<window.LIcon n={c.icon} size={24} stroke={1.8} />}
                onClick={(e) => { e.preventDefault(); onOpenCategory(c); }}
              />
            ))}
          </div>
        </section>

        {/* Popular */}
        <section style={{ padding: '8px 0 48px' }}>
          <h2 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 16px 2px', color: 'var(--text-tertiary)' }}>Popular Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {window.HC_POPULAR.map((a, i) => (
              <PopularRow key={i} a={a} onClick={() => onOpenArticle(a)} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '16px 0 56px' }}>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 12px' }}>Can't find what you're looking for? Our team is here to help.</p>
          <a href="mailto:support@herond.org" style={{ display: 'inline-block', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600, fontSize: 14, padding: '8px 24px', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-sm)' }}>Contact Support</a>
        </div>
      </div>
    </main>
  );
}

function PopularRow({ a, onClick }) {
  const [hover, setHover] = useStateP(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      padding: '14px 18px', borderRadius: 'var(--radius-md)', textDecoration: 'none', cursor: 'pointer',
      border: '1px solid ' + (hover ? 'color-mix(in srgb, var(--color-primary) 22%, var(--border-subtle))' : 'var(--border-subtle)'),
      background: hover ? 'var(--surface-hover)' : 'var(--surface-card)', transition: 'all var(--duration-fast)',
    }}>
      <span style={{ fontSize: 14, fontWeight: 500, color: hover ? 'var(--color-primary)' : 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.title}</span>
      <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-tertiary)', flexShrink: 0 }}>{a.category}</span>
    </a>
  );
}

function HCArticle({ article, onHome }) {
  const { Badge } = window.HerondDesignSystem_043536;
  const a = article && article.steps ? article : window.HC_ARTICLE;
  const cat = (article && article.category) || a.category;
  const title = (article && article.title) || a.title;
  return (
    <main style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '230px 1fr', gap: 40, alignItems: 'start' }}>
      {/* Sidebar */}
      <aside style={{ position: 'sticky', top: 76, paddingTop: 40 }}>
        {window.HC_CATEGORIES.slice(0, 4).map((c) => (
          <div key={c.name} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--text-secondary)', padding: '6px 12px', borderLeft: '3px solid ' + c.accent }}>{c.name}</div>
            <div style={{ borderLeft: '1px solid var(--border-default)', marginLeft: 7, marginTop: 4 }}>
              {[1, 2, 3].map((n) => {
                const activeRow = c.name === cat && n === 1;
                return (
                  <div key={n} style={{
                    fontSize: 13, padding: '6px 12px 6px 16px',
                    color: activeRow ? 'var(--color-primary)' : 'var(--text-secondary)',
                    fontWeight: activeRow ? 600 : 400,
                    borderLeft: activeRow ? '2px solid var(--color-primary)' : '2px solid transparent', marginLeft: -1,
                    cursor: 'pointer',
                  }}>{activeRow ? title : c.name + ' article ' + n}</div>
                );
              })}
            </div>
          </div>
        ))}
      </aside>

      {/* Article body */}
      <article style={{ paddingTop: 40, paddingBottom: 56, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 16 }}>
          <span onClick={onHome} style={{ cursor: 'pointer' }}>Help Center</span>
          <window.LIcon n="chevron-right" size={14} />
          <span style={{ color: 'var(--text-secondary)' }}>{cat}</span>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--text-primary)', margin: '0 0 10px' }}>{title}</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 28px' }}>{a.description}</p>

        {a.steps.map((s, i) => (
          <section key={i} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 10px' }}>{s.h}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{s.body}</p>
            {s.tip && (
              <div style={{ marginTop: 14, display: 'flex', gap: 10, padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'color-mix(in srgb, var(--color-success) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--color-success) 28%, transparent)' }}>
                <window.LIcon n="lightbulb" size={18} color="var(--color-success)" style={{ flex: 'none', marginTop: 1 }} />
                <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{s.tip}</div>
              </div>
            )}
          </section>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Was this article helpful?</span>
          <Badge tone="success" variant="outline">Yes</Badge>
          <Badge tone="neutral" variant="outline">No</Badge>
        </div>
      </article>
    </main>
  );
}

function HCSearch({ open, onClose, onOpenArticle }) {
  const [q, setQ] = useStateP('');
  if (!open) return null;
  const results = window.HC_POPULAR.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(10,18,40,0.55)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', paddingTop: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 560, maxWidth: '90vw', height: 'fit-content', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <window.LIcon n="search" size={18} color="var(--icon-default)" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the help center…" style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-primary)' }} />
          <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', border: '1px solid var(--border-default)', borderRadius: 4, padding: '2px 6px' }}>ESC</span>
        </div>
        <div style={{ maxHeight: 320, overflowY: 'auto', padding: 8 }}>
          {results.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-tertiary)', fontSize: 14 }}>No results for "{q}"</div>}
          {results.map((a, i) => (
            <div key={i} onClick={() => { onOpenArticle(a); onClose(); }} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <window.LIcon n="file-text" size={16} color="var(--icon-default)" />
              <span style={{ flex: 1, fontSize: 14, color: 'var(--text-primary)' }}>{a.title}</span>
              <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{a.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.HCHome = HCHome;
window.HCArticle = HCArticle;
window.HCSearch = HCSearch;
