// Island React: PROTOTYPE ví đầy đủ (Portfolio · Gửi · Swap · Lịch sử · Cài đặt).
// CHỈ phần ĐĂNG NHẬP là Privy thật. Mọi số liệu/giao dịch khác là DỮ LIỆU GIẢ (nguyên mẫu),
// không gọi on-chain, không đụng tiền thật. Render bằng <WalletMenu client:only="react" />.
import { useEffect, useRef, useState } from "react";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { PRIVY_APP_ID, privyConfig } from "../lib/privyConfig";

// ---- Dữ liệu giả cho nguyên mẫu ----
type Tok = { sym: string; name: string; amount: number; price: number; change: number };
const MOCK_TOKENS: Tok[] = [
  { sym: "ETH", name: "Ethereum", amount: 0.842, price: 3120.5, change: 2.3 },
  { sym: "USDC", name: "USD Coin", amount: 540, price: 1, change: 0 },
  { sym: "ARB", name: "Arbitrum", amount: 320, price: 0.92, change: -1.4 },
  { sym: "OP", name: "Optimism", amount: 75, price: 1.85, change: 4.1 },
];
const MOCK_HISTORY = [
  { kind: "Nhận", detail: "Từ 0x9a…1f", amount: "+0,50 ETH", usd: "+$1.560", up: true },
  { kind: "Gửi", detail: "Tới 0x3c…ab", amount: "-120 USDC", usd: "-$120", up: false },
  { kind: "Swap", detail: "ETH → USDC", amount: "0,10 ETH", usd: "$312", up: true },
  { kind: "Nhận", detail: "Từ sàn", amount: "+200 ARB", usd: "+$184", up: true },
];

function shortAddr(a?: string): string {
  return a ? `${a.slice(0, 6)}…${a.slice(-4)}` : "";
}
function usd(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const IC = { width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const NAV = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const SendI = () => (<svg {...IC} viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>);
const SwapI = () => (<svg {...IC} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v13m0 0-3-3m3 3 3-3M17 20V7m0 0 3 3m-3-3-3 3" /></svg>);
const RecvI = () => (<svg {...IC} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" /></svg>);
const BuyI = () => (<svg {...IC} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>);
const HomeNav = () => (<svg {...NAV} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>);
const SwapNav = () => (<svg {...NAV} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v13m0 0-3-3m3 3 3-3M17 20V7m0 0 3 3m-3-3-3 3" /></svg>);
const ClockNav = () => (<svg {...NAV} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
const GearNav = () => (<svg {...NAV} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>);
const BackI = () => (<svg {...IC} viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>);

type View = "home" | "swap" | "history" | "settings" | "send" | "receive";

function Wallet() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("home");
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  const [swapAmt, setSwapAmt] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  const addr = user?.wallet?.address as `0x${string}` | undefined;

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setView("home");
      setNotice("");
    }
  }, [open]);

  if (!ready) return <button className="wallet-btn" disabled>Đang tải…</button>;
  if (!authenticated)
    return (
      <button className="wallet-btn" onClick={() => login()}>
        Đăng nhập ví
      </button>
    );

  const total = MOCK_TOKENS.reduce((s, t) => s + t.amount * t.price, 0);
  const prev = MOCK_TOKENS.reduce((s, t) => s + (t.amount * t.price) / (1 + t.change / 100), 0);
  const delta = total - prev;
  const changePct = prev > 0 ? (delta / prev) * 100 : 0;

  function proto(msg = "Tính năng nguyên mẫu, chưa hoạt động thật.") {
    setNotice(msg);
    setTimeout(() => setNotice(""), 1900);
  }
  async function copyAddr() {
    if (!addr) return;
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {
      /* bỏ qua */
    }
  }

  const swapTo = swapAmt && !isNaN(Number(swapAmt)) ? (Number(swapAmt) * MOCK_TOKENS[0].price).toFixed(2) : "0.00";

  return (
    <div className="wallet-menu" ref={wrapRef}>
      <button className="wallet-btn is-auth" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="dialog">
        <span className="wb-dot" />
        {shortAddr(addr) || "Ví"}
      </button>

      {open && (
        <div className="wallet-pop ph wproto" role="dialog" aria-label="Ví">
          {/* Header */}
          <div className="ph-top">
            <div className="ph-account">
              <span className="ph-avatar" />
              <div className="ph-acc-text">
                <strong>Tài khoản 1</strong>
                <button className="ph-addr-mini" onClick={copyAddr} title="Sao chép địa chỉ">
                  {copied ? "đã chép ✓" : shortAddr(addr)}
                </button>
              </div>
            </div>
            <span className="wp-proto-badge">nguyên mẫu</span>
          </div>

          {notice && <div className="wp-notice">{notice}</div>}

          {/* ===== HOME / PORTFOLIO ===== */}
          {view === "home" && (
            <>
              <div className="ph-balance">
                <div className="ph-amount">{usd(total)}</div>
                <div className={"ph-change " + (delta >= 0 ? "up" : "down")}>
                  {delta >= 0 ? "+" : "-"}{usd(Math.abs(delta))} ({delta >= 0 ? "+" : ""}{changePct.toFixed(2)}%)
                </div>
              </div>
              <div className="ph-actions">
                <button className="ph-tile" onClick={() => setView("send")}><SendI /><span>Gửi</span></button>
                <button className="ph-tile" onClick={() => setView("swap")}><SwapI /><span>Swap</span></button>
                <button className="ph-tile" onClick={() => setView("receive")}><RecvI /><span>Nhận</span></button>
                <button className="ph-tile" onClick={() => proto("Mua: nguyên mẫu, chưa nối onramp.")}><BuyI /><span>Mua</span></button>
              </div>
              <div className="ph-list">
                {MOCK_TOKENS.map((t) => (
                  <button className="ph-token" key={t.sym} onClick={() => proto(`Chi tiết ${t.sym}: nguyên mẫu.`)}>
                    <span className="ph-token-ic">{t.sym.slice(0, 1)}</span>
                    <div className="ph-token-name">
                      <strong>{t.name}</strong>
                      <span>{t.amount.toLocaleString("vi-VN")} {t.sym}</span>
                    </div>
                    <div className="ph-token-right">
                      <span className="ph-token-val">{usd(t.amount * t.price)}</span>
                      <span className={"ph-token-ch " + (t.change >= 0 ? "up" : "down")}>
                        {t.change >= 0 ? "+" : ""}{t.change.toFixed(1)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ===== SEND ===== */}
          {view === "send" && (
            <div className="wp-pane">
              <div className="wp-pane-head"><button className="wp-back" onClick={() => setView("home")}><BackI /></button><h2>Gửi</h2></div>
              <form onSubmit={(e) => { e.preventDefault(); proto("Gửi: nguyên mẫu, chưa gửi thật."); }} className="ph-send">
                <label className="ph-field">Token
                  <select defaultValue="ETH">{MOCK_TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select>
                </label>
                <input placeholder="Địa chỉ nhận 0x..." spellCheck={false} />
                <input placeholder="Số lượng" inputMode="decimal" />
                <button type="submit" className="ph-primary">Gửi (nguyên mẫu)</button>
              </form>
            </div>
          )}

          {/* ===== RECEIVE ===== */}
          {view === "receive" && (
            <div className="wp-pane">
              <div className="wp-pane-head"><button className="wp-back" onClick={() => setView("home")}><BackI /></button><h2>Nhận</h2></div>
              <div className="ph-receive">
                <div className="wp-qr" aria-hidden="true">QR</div>
                <p className="ph-recv-label">Địa chỉ của bạn</p>
                <code>{addr}</code>
                <button className="ph-primary" onClick={copyAddr}>{copied ? "Đã sao chép ✓" : "Sao chép địa chỉ"}</button>
              </div>
            </div>
          )}

          {/* ===== SWAP ===== */}
          {view === "swap" && (
            <div className="wp-pane">
              <div className="wp-pane-head"><button className="wp-back" onClick={() => setView("home")}><BackI /></button><h2>Swap</h2></div>
              <div className="wp-swap">
                <div className="wp-swap-box">
                  <span className="wp-swap-label">Từ</span>
                  <div className="wp-swap-row">
                    <select defaultValue="ETH">{MOCK_TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select>
                    <input value={swapAmt} onChange={(e) => setSwapAmt(e.target.value)} placeholder="0.0" inputMode="decimal" />
                  </div>
                </div>
                <div className="wp-swap-arrow"><SwapI /></div>
                <div className="wp-swap-box">
                  <span className="wp-swap-label">Tới</span>
                  <div className="wp-swap-row">
                    <select defaultValue="USDC">{MOCK_TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select>
                    <input value={swapTo} readOnly />
                  </div>
                </div>
                <p className="wp-swap-rate">Tỷ giá (giả): 1 ETH ≈ {MOCK_TOKENS[0].price.toLocaleString("en-US")} USDC</p>
                <button className="ph-primary" onClick={() => proto("Swap: nguyên mẫu, chưa nối DEX.")}>Swap (nguyên mẫu)</button>
              </div>
            </div>
          )}

          {/* ===== HISTORY ===== */}
          {view === "history" && (
            <div className="wp-pane">
              <h2 className="wp-pane-title">Lịch sử</h2>
              <div className="wp-history">
                {MOCK_HISTORY.map((h, i) => (
                  <div className="wp-hrow" key={i}>
                    <div className="wp-hleft">
                      <strong>{h.kind}</strong>
                      <span>{h.detail}</span>
                    </div>
                    <div className="wp-hright">
                      <span className={h.up ? "up" : "down"}>{h.amount}</span>
                      <span className="wp-husd">{h.usd}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== SETTINGS ===== */}
          {view === "settings" && (
            <div className="wp-pane">
              <h2 className="wp-pane-title">Cài đặt</h2>
              <div className="wp-settings">
                <button className="wp-srow" onClick={copyAddr}><span>Sao chép địa chỉ</span><span className="wp-sval">{copied ? "✓" : shortAddr(addr)}</span></button>
                <button className="wp-srow" onClick={() => proto("Đổi mạng: nguyên mẫu.")}><span>Mạng</span><span className="wp-sval">Ethereum ›</span></button>
                <button className="wp-srow" onClick={() => proto("Đơn vị tiền: nguyên mẫu.")}><span>Đơn vị hiển thị</span><span className="wp-sval">USD ›</span></button>
                <button className="wp-srow" onClick={() => proto("Xuất khoá: nguyên mẫu (không lộ khoá thật).")}><span>Xuất khoá ví</span><span className="wp-sval">›</span></button>
                <button className="wp-srow danger" onClick={() => logout()}><span>Đăng xuất</span><span className="wp-sval">›</span></button>
              </div>
            </div>
          )}

          {/* ===== BOTTOM NAV ===== */}
          <nav className="wp-nav">
            <button className={"wp-navbtn" + (view === "home" ? " active" : "")} onClick={() => setView("home")}><HomeNav /><span>Ví</span></button>
            <button className={"wp-navbtn" + (view === "swap" ? " active" : "")} onClick={() => setView("swap")}><SwapNav /><span>Swap</span></button>
            <button className={"wp-navbtn" + (view === "history" ? " active" : "")} onClick={() => setView("history")}><ClockNav /><span>Lịch sử</span></button>
            <button className={"wp-navbtn" + (view === "settings" ? " active" : "")} onClick={() => setView("settings")}><GearNav /><span>Cài đặt</span></button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function WalletMenu() {
  if (!PRIVY_APP_ID) {
    return (
      <span className="wallet-btn wallet-missing" title="Đặt PUBLIC_PRIVY_APP_ID trong .env">
        Ví: chưa cấu hình
      </span>
    );
  }
  return (
    <PrivyProvider appId={PRIVY_APP_ID} config={privyConfig}>
      <Wallet />
    </PrivyProvider>
  );
}
