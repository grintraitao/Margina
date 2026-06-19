import type { PrivyClientConfig } from "@privy-io/react-auth";

// App ID công khai, nạp qua biến môi trường PUBLIC_.
export const PRIVY_APP_ID = import.meta.env.PUBLIC_PRIVY_APP_ID as string | undefined;

// Prototype: chỉ dùng Privy cho ĐĂNG NHẬP. Các phần khác là UI nguyên mẫu (dữ liệu giả).
export const privyConfig: PrivyClientConfig = {
  appearance: { theme: "light", accentColor: "#e2641f" },
  embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
  loginMethods: ["email", "wallet"],
};
