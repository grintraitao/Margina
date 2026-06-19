import type { PrivyClientConfig } from "@privy-io/react-auth";

// App ID Privy là định danh CÔNG KHAI (giống Firebase API key, vốn nằm trong code client;
// bảo mật dựa vào danh sách Allowed origins trong dashboard Privy, không phải giấu ID).
// Ưu tiên biến môi trường; nếu không có thì dùng giá trị mặc định để bản live cũng chạy.
export const PRIVY_APP_ID =
  (import.meta.env.PUBLIC_PRIVY_APP_ID as string | undefined) || "cmqgf90bl00nt0cjsmzc65obh";

// Prototype: chỉ dùng Privy cho ĐĂNG NHẬP. Các phần khác là UI nguyên mẫu (dữ liệu giả).
export const privyConfig: PrivyClientConfig = {
  appearance: { theme: "light", accentColor: "#e2641f" },
  embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
  loginMethods: ["email", "wallet"],
};
