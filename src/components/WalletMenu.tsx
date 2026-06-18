// Island React: ví đa mạng phong cách Phantom (tổng USD, số dư từng mạng, gửi/nhận/nạp).
// MẠNG THẬT (mainnet + L2): mọi giao dịch tiêu tiền thật, không hoàn tác được.
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { PrivyProvider, usePrivy, useSendTransaction, useFundWallet } from "@privy-io/react-auth";
import { createPublicClient, http, formatEther, parseEther, isAddress } from "viem";
import { PRIVY_APP_ID, privyConfig, CHAINS, DEFAULT_CHAIN_KEY } from "../lib/privyConfig";

// Một client chỉ-đọc cho mỗi mạng (đọc số dư).
const clients: Record<string, ReturnType<typeof createPublicClient>> = {};
for (const c of CHAINS) clients[c.key] = createPublicClient({ chain: c.chain, transport: http() });

function shortAddr(a?: string): string {
  return a ? `${a.slice(0, 6)}…${a.slice(-4)}` : "";
}
function usdFmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const ICON = { width: 22, height: 22, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const SendIcon = () => (<svg {...ICON} viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>);
const ReceiveIcon = () => (<svg {...ICON} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" /></svg>);
const FundIcon = () => (<svg {...ICON} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>);
const LogoutIcon = () => (<svg {...ICON} viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>);

type View = "home" | "send" | "receive";
type Price = { usd: number; change: number };

function Menu() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { sendTransaction } = useSendTransaction();
  const { fundWallet } = useFundWallet();

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("home");
  const [balances, setBalances] = useState<Record<string, string | null>>({});
  const [prices, setPrices] = useState<Record<string, Price>>({});
  const [loading, setLoading] = useState(false);
  const [sendKey, setSendKey] = useState(DEFAULT_CHAIN_KEY);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [txHash, setTxHash] = useState("");
  const [txChainKey, setTxChainKey] = useState(DEFAULT_CHAIN_KEY);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const addr = user?.wallet?.address as `0x${string}` | undefined;

  async function refreshAll() {
    if (!addr) return;
    setLoading(true);
    // Giá USD (gộp các coingeckoId cần thiết vào một lần gọi).
    try {
      const ids = [...new Set(CHAINS.map((c) => c.coingeckoId))].join(",");
      const r = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
      );
      const j = await r.json();
      const pm: Record<string, Price> = {};
      for (const id of Object.keys(j)) pm[id] = { usd: j[id].usd, change: j[id].usd_24h_change ?? 0 };
      setPrices(pm);
    } catch {
      /* giữ giá cũ */
    }
    // Số dư mọi mạng song song.
    const entries = await Promise.all(
      CHAINS.map(async (c) => {
        try {
          const wei = await clients[c.key].getBalance({ address: addr });
          return [c.key, formatEther(wei)] as const;
        } catch {
          return [c.key, null] as const;
        }
      }),
    );
    setBalances(Object.fromEntries(entries));
    setLoading(false);
  }

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
      setStatus("");
      setTxHash("");
    }
  }, [open]);

  useEffect(() => {
    if (open && addr) refreshAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, addr]);

  if (!ready) {
    return (
      <button className="wallet-btn" disabled>
        Đang tải…
      </button>
    );
  }
  if (!authenticated) {
    return (
      <button className="wallet-btn" onClick={() => login()}>
        Đăng nhập ví
      </button>
    );
  }

  // Tính tổng USD + biến động 24h (trung bình theo giá trị).
  function chainUsd(key: string, coingeckoId: string): number | null {
    const b = balances[key];
    const p = prices[coingeckoId];
    if (b == null || !p) return null;
    return Number(b) * p.usd;
  }
  let totalUsd = 0;
  let totalPrev = 0;
  let haveAny = false;
  for (const c of CHAINS) {
    const u = chainUsd(c.key, c.coingeckoId);
    if (u != null) {
      haveAny = true;
      totalUsd += u;
      const ch = prices[c.coingeckoId]?.change ?? 0;
      totalPrev += u / (1 + ch / 100);
    }
  }
  const changePct = haveAny && totalPrev > 0 ? ((totalUsd - totalPrev) / totalPrev) * 100 : null;
  const delta = haveAny ? totalUsd - totalPrev : null;

  const sendChain = CHAINS.find((c) => c.key === sendKey)!;
  const sendSymbol = sendChain.chain.nativeCurrency.symbol;
  const txExplorer = CHAINS.find((c) => c.key === txChainKey)!.explorer;

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

  async function onSend(e: FormEvent) {
    e.preventDefault();
    setStatus("");
    setTxHash("");
    if (!isAddress(to)) {
      setStatus("Địa chỉ nhận không hợp lệ.");
      return;
    }
    let value: bigint;
    try {
      value = parseEther(amount);
    } catch {
      setStatus(`Số ${sendSymbol} không hợp lệ.`);
      return;
    }
    try {
      setSending(true);
      setStatus("Đang gửi, xác nhận trong cửa sổ Privy…");
      const res = await sendTransaction({ to: to as `0x${string}`, value, chainId: sendChain.chain.id });
      setTxHash(res.hash);
      setTxChainKey(sendKey);
      setStatus("Đã gửi thành công!");
      setAmount("");
      refreshAll();
    } catch (err) {
      setStatus("Lỗi: " + (err instanceof Error ? err.message : "không gửi được"));
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="wallet-menu" ref={wrapRef}>
      <button
        className="wallet-btn is-auth"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <span className="wb-dot" />
        {shortAddr(addr) || "Ví"}
      </button>

      {open && (
        <div className="wallet-pop ph" role="dialog" aria-label="Ví">
          <div className="ph-top">
            <div className="ph-account">
              <span className="ph-avatar" />
              <div className="ph-acc-text">
                <strong>Tài khoản</strong>
                <button className="ph-addr-mini" onClick={copyAddr} title="Sao chép địa chỉ">
                  {copied ? "đã chép ✓" : shortAddr(addr)}
                </button>
              </div>
            </div>
            <span className="ph-net">Đa mạng</span>
          </div>

          <p className="ph-warn">⚠ Mạng thật, tiền thật. Giao dịch không hoàn tác được.</p>

          <div className="ph-balance">
            <div className="ph-amount">{haveAny ? usdFmt(totalUsd) : "…"}</div>
            {changePct != null && delta != null && (
              <div className={"ph-change " + (delta >= 0 ? "up" : "down")}>
                {delta >= 0 ? "+" : "-"}
                {usdFmt(Math.abs(delta))} ({delta >= 0 ? "+" : ""}
                {changePct.toFixed(2)}%)
              </div>
            )}
            <button className="ph-refresh" onClick={refreshAll} disabled={loading}>
              {loading ? "đang tải…" : "làm mới"}
            </button>
          </div>

          <div className="ph-actions">
            <button
              className={"ph-tile" + (view === "send" ? " active" : "")}
              onClick={() => setView((v) => (v === "send" ? "home" : "send"))}
            >
              <SendIcon />
              <span>Gửi</span>
            </button>
            <button
              className={"ph-tile" + (view === "receive" ? " active" : "")}
              onClick={() => setView((v) => (v === "receive" ? "home" : "receive"))}
            >
              <ReceiveIcon />
              <span>Nhận</span>
            </button>
            <button className="ph-tile" onClick={() => addr && fundWallet({ address: addr })}>
              <FundIcon />
              <span>Nạp</span>
            </button>
            <button className="ph-tile" onClick={() => logout()}>
              <LogoutIcon />
              <span>Thoát</span>
            </button>
          </div>

          {view === "home" && (
            <div className="ph-list">
              {CHAINS.map((c) => {
                const b = balances[c.key];
                const u = chainUsd(c.key, c.coingeckoId);
                const sym = c.chain.nativeCurrency.symbol;
                return (
                  <div className="ph-token" key={c.key}>
                    <span className="ph-token-ic">{sym.slice(0, 1)}</span>
                    <div className="ph-token-name">
                      <strong>{c.label}</strong>
                      <span>{b == null ? "…" : `${Number(b).toFixed(5)} ${sym}`}</span>
                    </div>
                    <div className="ph-token-val">{u == null ? "—" : usdFmt(u)}</div>
                  </div>
                );
              })}
            </div>
          )}

          {view === "send" && (
            <form className="ph-send" onSubmit={onSend}>
              <label className="ph-field">
                Mạng gửi
                <select value={sendKey} onChange={(e) => setSendKey(e.target.value)}>
                  {CHAINS.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label} ({c.chain.nativeCurrency.symbol})
                    </option>
                  ))}
                </select>
              </label>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Địa chỉ nhận 0x..."
                spellCheck={false}
              />
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Số ${sendSymbol} (vd. 0.001)`}
                inputMode="decimal"
              />
              <button type="submit" className="ph-primary" disabled={sending}>
                {sending ? "Đang gửi…" : `Gửi ${sendSymbol}`}
              </button>
              {status && <p className="ph-status">{status}</p>}
              {txHash && (
                <p className="ph-status">
                  <a href={`${txExplorer}/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                    Xem giao dịch ↗
                  </a>
                </p>
              )}
            </form>
          )}

          {view === "receive" && (
            <div className="ph-receive">
              <p className="ph-recv-label">Địa chỉ của bạn (dùng chung cho mọi mạng EVM)</p>
              <code>{addr}</code>
              <button className="ph-primary" onClick={copyAddr}>
                {copied ? "Đã sao chép ✓" : "Sao chép địa chỉ"}
              </button>
            </div>
          )}
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
      <Menu />
    </PrivyProvider>
  );
}
