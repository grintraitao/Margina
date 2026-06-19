// Island React: PROTOTYPE ví theo Herond Design System (aurora, dark-first).
// CHỈ phần ĐĂNG NHẬP là Privy thật; số dư/giá/giao dịch là dữ liệu giả (nguyên mẫu).
import { useEffect, useRef, useState } from "react";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { PRIVY_APP_ID, privyConfig } from "../lib/privyConfig";
import "./wallet.css";

// ---- Dữ liệu giả ----
type Tok = { sym: string; name: string; net: string; amt: string; fiat: number; change: number; color: string; glyph: string };
const TOKENS: Tok[] = [
  { sym: "ETH", name: "Ethereum", net: "Ethereum", amt: "0,842", fiat: 2627.3, change: 2.3, color: "#627eea", glyph: "Ξ" },
  { sym: "BTC", name: "Bitcoin", net: "Bitcoin", amt: "0,041", fiat: 2710, change: 1.1, color: "#f7931a", glyph: "₿" },
  { sym: "SOL", name: "Solana", net: "Solana", amt: "38,5", fiat: 5420, change: -2.4, color: "#9945ff", glyph: "◎" },
  { sym: "USDC", name: "USD Coin", net: "Ethereum", amt: "540,00", fiat: 540, change: 0, color: "#2775ca", glyph: "$" },
];
const HISTORY = [
  { kind: "Nhận", det: "Từ 0x9a…1f", amt: "+0,50 ETH", up: true, ic: "receive" },
  { kind: "Gửi", det: "Tới 0x3c…ab", amt: "-120 USDC", up: false, ic: "send" },
  { kind: "Swap", det: "ETH → USDC", amt: "0,1 ETH", up: false, ic: "swap" },
  { kind: "Nhận", det: "Từ sàn", amt: "+200 ARB", up: true, ic: "receive" },
];

function shortAddr(a?: string): string {
  return a ? `${a.slice(0, 6)}…${a.slice(-4)}` : "";
}
function usd(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// ---- Icon Lucide-style ----
const ICONS: Record<string, any> = {
  send: <path d="M12 19V5M5 12l7-7 7 7" />,
  receive: <path d="M12 5v14M19 12l-7 7-7-7" />,
  buy: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  swap: <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />,
  copy: <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
  refresh: <><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  eyeoff: <><path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 10 8 10 8a13.2 13.2 0 0 1-1.7 2.7M6.6 6.6A13.3 13.3 0 0 0 2 12s3 8 10 8a10.9 10.9 0 0 0 5.4-1.4M3 3l18 18" /></>,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  wallet: <><path d="M21 12V8a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h14" /><path d="M3 6v12a2 2 0 0 0 2 2h16v-6" /><path d="M18 12a2 2 0 0 0 0 4h3v-4z" /></>,
  logout: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></>,
};
function Ic({ n, size = 20 }: { n: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[n]}
    </svg>
  );
}

function Act({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button className="hw-act" onClick={onClick}>
      <span className="hw-act-ic"><Ic n={icon} size={19} /></span>
      <span>{label}</span>
    </button>
  );
}

type View = "home" | "swap" | "history" | "settings";
type Sheet = null | "send" | "receive";

function Wallet() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("home");
  const [sheet, setSheet] = useState<Sheet>(null);
  const [tab, setTab] = useState<"tokens" | "nfts">("tokens");
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");
  const [swapAmt, setSwapAmt] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  const addr = user?.wallet?.address as `0x${string}` | undefined;

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (sheet) setSheet(null);
        else setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, sheet]);

  useEffect(() => {
    if (!open) {
      setView("home");
      setSheet(null);
      setToast("");
    }
  }, [open]);

  if (!ready) return <button className="hw-trigger ghost" disabled>Đang tải…</button>;
  if (!authenticated)
    return (
      <button className="hw-trigger ghost" onClick={() => login()}>
        Đăng nhập ví
      </button>
    );

  const total = TOKENS.reduce((s, t) => s + t.fiat, 0);
  const prev = TOKENS.reduce((s, t) => s + t.fiat / (1 + t.change / 100), 0);
  const delta = total - prev;
  const changePct = prev > 0 ? (delta / prev) * 100 : 0;
  const totalStr = usd(total);
  const dot = totalStr.lastIndexOf(".");
  const dollars = dot >= 0 ? totalStr.slice(0, dot) : totalStr;
  const cents = dot >= 0 ? totalStr.slice(dot) : "";

  function proto(msg = "Tính năng nguyên mẫu, chưa hoạt động thật.") {
    setToast(msg);
    setTimeout(() => setToast(""), 1900);
  }
  async function copyAddr() {
    if (!addr) return;
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* bỏ qua */
    }
  }

  const swapTo = swapAmt && !isNaN(Number(swapAmt)) ? (Number(swapAmt) * 3120.5).toLocaleString("en-US", { maximumFractionDigits: 2 }) : "0.00";

  return (
    <div className="hw-menu" ref={wrapRef}>
      <button className="hw-trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="dialog">
        <span className="hw-ava-sm" />
        {shortAddr(addr) || "Ví"}
      </button>

      {open && (
        <div className="hw-pop" role="dialog" aria-label="Ví Herond">
          <div className="hw-aurora" />
          <div className="hw-banner">Nguyên mẫu · chỉ đăng nhập là thật</div>

          <div className="hw-scroll">
            {/* ===== HOME ===== */}
            {view === "home" && (
              <>
                <div className="hw-body">
                  <div className="hw-head">
                    <span className="hw-ava" />
                    <span className="hw-acc">Tài khoản 1</span>
                    <button className="hw-iconbtn" onClick={copyAddr} aria-label="Sao chép địa chỉ"><Ic n="copy" size={15} /></button>
                    {copied && <span className="hw-copied">đã chép</span>}
                    <div className="hw-head-actions">
                      <button className="hw-iconbtn" onClick={() => proto("Làm mới: nguyên mẫu.")} aria-label="Làm mới"><Ic n="refresh" size={16} /></button>
                      <button className="hw-iconbtn" onClick={() => setView("settings")} aria-label="Cài đặt"><Ic n="settings" size={16} /></button>
                    </div>
                  </div>

                  <div className="hw-balance">
                    <span className="hw-bal-amt">{hidden ? "••••••" : dollars}<span className="cents">{hidden ? "" : cents}</span></span>
                    <button className="hw-eye" onClick={() => setHidden((h) => !h)} aria-label="Ẩn/hiện số dư"><Ic n={hidden ? "eyeoff" : "eye"} size={18} /></button>
                  </div>
                  <div className="hw-change">
                    <span className={"hw-pill " + (delta >= 0 ? "up" : "down")}>{delta >= 0 ? "▲" : "▼"} {usd(Math.abs(delta))}</span>
                    <span className={delta >= 0 ? "up" : "down"}>{delta >= 0 ? "+" : ""}{changePct.toFixed(2)}%</span>
                  </div>

                  <div className="hw-actions">
                    <Act icon="send" label="Gửi" onClick={() => setSheet("send")} />
                    <Act icon="receive" label="Nhận" onClick={() => setSheet("receive")} />
                    <Act icon="buy" label="Mua" onClick={() => proto("Mua: nguyên mẫu, chưa nối onramp.")} />
                    <Act icon="swap" label="Swap" onClick={() => setView("swap")} />
                  </div>

                  <div className="hw-tabs">
                    <button className={"hw-tab " + (tab === "tokens" ? "active" : "")} onClick={() => setTab("tokens")}>Token</button>
                    <button className={"hw-tab " + (tab === "nfts" ? "active" : "")} onClick={() => setTab("nfts")}>NFT</button>
                  </div>
                </div>

                <div className="hw-list">
                  {tab === "tokens" ? (
                    TOKENS.map((t) => (
                      <button className="hw-row" key={t.sym} onClick={() => proto(`Chi tiết ${t.sym}: nguyên mẫu.`)}>
                        <span className="hw-coin" style={{ background: t.color }}>{t.glyph}</span>
                        <div className="hw-row-mid">
                          <div className="hw-row-sym">{t.sym}</div>
                          <div className="hw-row-net">{t.amt} {t.sym} · {t.net}</div>
                        </div>
                        <div className="hw-row-right">
                          <div className="hw-row-fiat">{usd(t.fiat)}</div>
                          <div className={"hw-row-ch " + (t.change >= 0 ? "up" : "down")}>{t.change >= 0 ? "+" : ""}{t.change.toFixed(1)}%</div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="hw-empty">Chưa có NFT nào</div>
                  )}
                </div>
              </>
            )}

            {/* ===== SWAP ===== */}
            {view === "swap" && (
              <div className="hw-pane">
                <div className="hw-pane-title">Swap</div>
                <div className="hw-swapbox">
                  <span className="hw-label">Từ</span>
                  <div className="hw-swaprow">
                    <select className="hw-select" defaultValue="ETH">{TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select>
                    <input value={swapAmt} onChange={(e) => setSwapAmt(e.target.value)} placeholder="0.0" inputMode="decimal" />
                  </div>
                </div>
                <div className="hw-swaparrow"><Ic n="swap" size={16} /></div>
                <div className="hw-swapbox">
                  <span className="hw-label">Tới</span>
                  <div className="hw-swaprow">
                    <select className="hw-select" defaultValue="USDC">{TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select>
                    <input value={swapTo} readOnly />
                  </div>
                </div>
                <div className="hw-rate">Tỷ giá (giả): 1 ETH ≈ 3.120,50 USDC</div>
                <button className="hw-btn primary" onClick={() => proto("Swap: nguyên mẫu, chưa nối DEX.")}>Swap</button>
              </div>
            )}

            {/* ===== HISTORY ===== */}
            {view === "history" && (
              <div className="hw-pane">
                <div className="hw-pane-title">Lịch sử</div>
                {HISTORY.map((h, i) => (
                  <div className="hw-hrow" key={i}>
                    <span className="hw-hic"><Ic n={h.ic} size={16} /></span>
                    <div className="hw-hmid">
                      <div className="hw-hkind">{h.kind}</div>
                      <div className="hw-hdet">{h.det}</div>
                    </div>
                    <div className={"hw-hamt " + (h.up ? "up" : "down")}>{h.amt}</div>
                  </div>
                ))}
              </div>
            )}

            {/* ===== SETTINGS ===== */}
            {view === "settings" && (
              <div className="hw-pane">
                <div className="hw-pane-title">Cài đặt</div>
                <button className="hw-srow" onClick={copyAddr}><span className="hw-sic"><Ic n="copy" size={17} /></span>Sao chép địa chỉ<span className="hw-sval">{copied ? "✓" : shortAddr(addr)}</span></button>
                <button className="hw-srow" onClick={() => proto("Đổi mạng: nguyên mẫu.")}><span className="hw-sic"><Ic n="globe" size={17} /></span>Mạng<span className="hw-sval">Đa mạng ›</span></button>
                <button className="hw-srow" onClick={() => proto("Đơn vị: nguyên mẫu.")}><span className="hw-sic"><Ic n="buy" size={17} /></span>Đơn vị hiển thị<span className="hw-sval">USD ›</span></button>
                <button className="hw-srow" onClick={() => proto("Xuất khoá: nguyên mẫu (không lộ khoá thật).")}><span className="hw-sic"><Ic n="wallet" size={17} /></span>Xuất khoá ví<span className="hw-sval">›</span></button>
                <button className="hw-srow danger" onClick={() => logout()}><span className="hw-sic"><Ic n="logout" size={17} /></span>Đăng xuất<span className="hw-sval">›</span></button>
              </div>
            )}
          </div>

          {/* ===== BOTTOM NAV ===== */}
          <nav className="hw-nav">
            <button className={"hw-navbtn " + (view === "home" ? "active" : "")} onClick={() => setView("home")}><Ic n="grid" size={20} /><span>Ví</span></button>
            <button className={"hw-navbtn " + (view === "swap" ? "active" : "")} onClick={() => setView("swap")}><Ic n="swap" size={20} /><span>Swap</span></button>
            <button className={"hw-navbtn " + (view === "history" ? "active" : "")} onClick={() => setView("history")}><Ic n="clock" size={20} /><span>Lịch sử</span></button>
            <button className={"hw-navbtn " + (view === "settings" ? "active" : "")} onClick={() => setView("settings")}><Ic n="settings" size={20} /><span>Cài đặt</span></button>
          </nav>

          {/* ===== SHEET (gửi/nhận) ===== */}
          {sheet && (
            <div className="hw-sheet-overlay" onClick={() => setSheet(null)}>
              <div className="hw-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="hw-sheet-head">
                  <span className="hw-sheet-title">{sheet === "send" ? "Gửi" : "Nhận"}</span>
                  <button className="hw-iconbtn" style={{ marginLeft: "auto" }} onClick={() => setSheet(null)} aria-label="Đóng"><Ic n="x" size={18} /></button>
                </div>
                {sheet === "send" ? (
                  <>
                    <div className="hw-field"><label className="hw-label">Token</label><select className="hw-select">{TOKENS.map((t) => <option key={t.sym}>{t.sym}</option>)}</select></div>
                    <div className="hw-field"><label className="hw-label">Địa chỉ nhận</label><input className="hw-input" placeholder="0x… hoặc tên .eth" spellCheck={false} /></div>
                    <div className="hw-field"><label className="hw-label">Số lượng</label><input className="hw-input" placeholder="0.00" inputMode="decimal" /></div>
                    <button className="hw-btn primary" onClick={() => { proto("Gửi: nguyên mẫu, chưa gửi thật."); setSheet(null); }}>Xem lại giao dịch</button>
                  </>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div className="hw-qr" />
                    <div className="hw-addr" style={{ marginTop: 14 }}>{addr}</div>
                    <div style={{ height: 14 }} />
                    <button className="hw-btn secondary" onClick={copyAddr}>{copied ? "Đã sao chép ✓" : "Sao chép địa chỉ"}</button>
                    <div className="hw-proto-note">Địa chỉ EVM dùng chung cho mọi mạng.</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {toast && <div className="hw-toast">{toast}</div>}
        </div>
      )}
    </div>
  );
}

export default function WalletMenu() {
  if (!PRIVY_APP_ID) {
    return (
      <span className="hw-trigger ghost" title="Đặt PUBLIC_PRIVY_APP_ID trong .env">
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
