// Herond Wallet — the in-browser wallet sidebar panel
const { useState: useStateW } = React;

function ActionButton({ icon, label, onClick }) {
  const [hover, setHover] = useStateW(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, border: 'none', background: 'none', cursor: 'pointer', flex: 1,
    }}>
      <span style={{
        width: 46, height: 46, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: hover ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)',
        color: hover ? '#fff' : 'var(--color-primary)',
        border: '1px solid ' + (hover ? 'transparent' : 'rgba(255,255,255,0.10)'),
        transition: 'all var(--duration-base)',
      }}>
        <window.HWIcon n={icon} size={19} />
      </span>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>{label}</span>
    </button>
  );
}

function WalletPanel() {
  const { NetworkPill, TokenRow, Tabs, Avatar, IconButton, Badge, Button } = window.HerondDesignSystem_043536;
  const [tab, setTab] = useStateW('tokens');
  const [hidden, setHidden] = useStateW(false);
  const [sheet, setSheet] = useStateW(null); // 'send' | null

  return (
    <div style={{
      width: 380, height: 720, borderRadius: 'var(--radius-xl)', overflow: 'hidden', position: 'relative',
      background: 'var(--herond-cosmic)', border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-sans)',
    }}>
      {/* aurora wash */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260, background: 'var(--aurora-glow)', pointerEvents: 'none' }} />

      {/* Beta banner */}
      <div style={{ position: 'relative', textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--herond-ozone)', padding: '8px', background: 'rgba(0,179,237,0.08)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        You're early — welcome to the Beta!
      </div>

      {/* Header */}
      <div style={{ position: 'relative', padding: '14px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name="A1" ring size={32} />
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>Account 1</span>
          <window.HWIcon n="copy" size={14} color="var(--text-tertiary)" />
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
            <IconButton size="sm" ariaLabel="refresh"><window.HWIcon n="refresh-cw" size={16} /></IconButton>
            <IconButton size="sm" ariaLabel="settings"><window.HWIcon n="settings" size={16} /></IconButton>
          </div>
        </div>

        {/* Balance */}
        <div style={{ marginTop: 20, display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1px', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
            {hidden ? '••••••' : '$21,091'}<span style={{ color: 'var(--text-tertiary)' }}>{hidden ? '' : '.91'}</span>
          </span>
          <span onClick={() => setHidden(!hidden)} style={{ cursor: 'pointer' }}>
            <window.HWIcon n={hidden ? 'eye-off' : 'eye'} size={18} color="var(--text-tertiary)" />
          </span>
        </div>
        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Badge tone="success" variant="soft">▲ $349.45</Badge>
          <span style={{ fontSize: 13, color: 'var(--color-up)', fontWeight: 600 }}>+1.68%</span>
        </div>

        {/* Actions */}
        <div style={{ marginTop: 22, display: 'flex', gap: 4 }}>
          <ActionButton icon="arrow-up" label="Send" onClick={() => setSheet('send')} />
          <ActionButton icon="arrow-down" label="Receive" onClick={() => setSheet('receive')} />
          <ActionButton icon="dollar-sign" label="Buy" />
          <ActionButton icon="repeat" label="Swap" />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ position: 'relative', padding: '20px 16px 0' }}>
        <Tabs value={tab} onChange={setTab} tabs={[{ id: 'tokens', label: 'Tokens' }, { id: 'nfts', label: 'NFTs' }]} />
      </div>

      {/* List */}
      <div style={{ position: 'relative', flex: 1, overflowY: 'auto', padding: '8px 10px 16px' }}>
        {tab === 'tokens'
          ? window.HW_TOKENS.map((t) => (
              <TokenRow key={t.symbol} icon={<window.Coin color={t.color} glyph={t.glyph} />} symbol={t.symbol} name={t.name} network={t.network} amount={t.amount} fiat={t.fiat} change={t.change} onClick={() => {}} />
            ))
          : (
            <div style={{ padding: '48px 20px', textAlign: 'center', color: 'var(--text-tertiary)' }}>
              <window.HWIcon n="image" size={30} color="var(--text-tertiary)" style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 14 }}>No NFTs yet</div>
            </div>
          )}
      </div>

      {/* Bottom nav */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-around', padding: '10px 0 14px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--herond-midnight)' }}>
        {[['layout-grid', true], ['compass', false], ['repeat', false], ['clock', false], ['settings', false]].map(([n, active], i) => (
          <span key={i} style={{ color: active ? 'var(--color-primary)' : 'var(--text-tertiary)', cursor: 'pointer' }}><window.HWIcon n={n} size={20} /></span>
        ))}
      </div>

      {sheet && <SendSheet kind={sheet} onClose={() => setSheet(null)} />}
    </div>
  );
}

function SendSheet({ kind, onClose }) {
  const { Button, Input, Avatar } = window.HerondDesignSystem_043536;
  const [addr, setAddr] = useStateW('');
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 10, background: 'rgba(10,18,40,0.6)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'flex-end' }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: '100%', background: 'var(--herond-midnight)', borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)',
        border: '1px solid rgba(255,255,255,0.08)', padding: 20, animation: 'hwSlide var(--duration-slow) var(--ease-out)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
          <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', textTransform: 'capitalize' }}>{kind}</span>
          <span onClick={onClose} style={{ marginLeft: 'auto', cursor: 'pointer' }}><window.HWIcon n="x" size={18} color="var(--text-tertiary)" /></span>
        </div>
        {kind === 'send' ? (
          <React.Fragment>
            <Input label="Recipient address" placeholder="0x… or .eth" value={addr} onChange={(e) => setAddr(e.target.value)} leadingIcon={<window.HWIcon n="wallet" size={16} />} />
            <div style={{ height: 14 }} />
            <Input label="Amount" placeholder="0.00" trailingSlot={<span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)' }}>MAX</span>} />
            <div style={{ height: 18 }} />
            <Button variant="primary" fullWidth pill>Review transaction</Button>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: 'center', padding: '6px 0 8px' }}>
            <div style={{ width: 150, height: 150, margin: '0 auto', borderRadius: 'var(--radius-md)', background: 'repeating-conic-gradient(#0F1A35 0% 25%, #fff 0% 50%) 50%/14px 14px', border: '6px solid #fff' }} />
            <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>0x71C7…f9E3</div>
            <div style={{ height: 16 }} />
            <Button variant="secondary" fullWidth pill leadingIcon={<window.HWIcon n="copy" size={15} />}>Copy address</Button>
          </div>
        )}
      </div>
    </div>
  );
}

window.WalletPanel = WalletPanel;
