// Herond Wallet — data + shared helpers
const { useState, useEffect, useRef } = React;

window.HW_TOKENS = [
  { symbol: 'SOL', name: 'Solana', network: 'SOL on Solana Mainnet Beta', amount: '36.27 SOL', fiat: '$4,260.66', change: 1.4, color: '#000', glyph: 'S' },
  { symbol: 'ETH', name: 'Ethereum', network: 'ETH on Ethereum Mainnet', amount: '2.98 ETH', fiat: '$10,983.00', change: 2.3, color: '#627EEA', glyph: 'Ξ' },
  { symbol: 'BTC', name: 'Bitcoin', network: 'BTC on Bitcoin', amount: '0.0404 BTC', fiat: '$4,102.76', change: -1.7, color: '#F7931A', glyph: '₿' },
  { symbol: 'USDT', name: 'Tether', network: 'USDT on Ethereum', amount: '833.64 USDT', fiat: '$833.64', change: 0.0, color: '#26A17B', glyph: '₮' },
  { symbol: 'MATIC', name: 'Polygon', network: 'MATIC on Polygon', amount: '210.5 MATIC', fiat: '$181.03', change: 4.1, color: '#8247E5', glyph: 'M' },
  { symbol: 'BAT', name: 'Basic Attention', network: 'BAT on Ethereum', amount: '1,204 BAT', fiat: '$330.85', change: -0.4, color: '#FF5000', glyph: 'B' },
];

function HWIcon({ n, size = 18, stroke = 2, color, style }) {
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

// A round coin badge used as TokenRow icon
function Coin({ color, glyph }) {
  return (
    <span style={{ width: 38, height: 38, borderRadius: '50%', background: color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17 }}>{glyph}</span>
  );
}

window.HWIcon = HWIcon;
window.Coin = Coin;
