import type { PrivyClientConfig } from "@privy-io/react-auth";
import type { Chain } from "viem";
import { mainnet, base, arbitrum, optimism, polygon } from "viem/chains";

// App ID công khai, nạp qua biến môi trường PUBLIC_.
export const PRIVY_APP_ID = import.meta.env.PUBLIC_PRIVY_APP_ID as string | undefined;

export interface ChainCfg {
  key: string;
  chain: Chain;
  label: string;
  coingeckoId: string; // để lấy giá USD token gas của mạng
  explorer: string;
}

// Các mạng hỗ trợ (đều là MẠNG THẬT, tiền thật).
// Base / Arbitrum / Optimism / Polygon gas rất rẻ → hợp test giá trị nhỏ.
export const CHAINS: ChainCfg[] = [
  { key: "base", chain: base, label: "Base", coingeckoId: "ethereum", explorer: "https://basescan.org" },
  { key: "arbitrum", chain: arbitrum, label: "Arbitrum", coingeckoId: "ethereum", explorer: "https://arbiscan.io" },
  { key: "optimism", chain: optimism, label: "Optimism", coingeckoId: "ethereum", explorer: "https://optimistic.etherscan.io" },
  { key: "polygon", chain: polygon, label: "Polygon", coingeckoId: "matic-network", explorer: "https://polygonscan.com" },
  { key: "mainnet", chain: mainnet, label: "Ethereum", coingeckoId: "ethereum", explorer: "https://etherscan.io" },
];

export const DEFAULT_CHAIN_KEY = "base";

export const privyConfig: PrivyClientConfig = {
  appearance: { theme: "light", accentColor: "#e2641f" },
  embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
  loginMethods: ["email", "wallet"],
  defaultChain: base,
  supportedChains: CHAINS.map((c) => c.chain),
};
