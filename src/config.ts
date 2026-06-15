// Cấu hình toàn site. Đổi các giá trị ở đây là đủ (không cần sửa chỗ khác).
export const SITE = {
  // Tên trang hiển thị ở header và thẻ <title>.
  name: "Marginalia",
  // Một dòng giới thiệu ngắn dưới tên trang ở trang chủ (để trống "" nếu không muốn).
  tagline: "Nơi đăng các bản dịch tiếng Việt từ những bài luận và blog tiếng Anh.",
  // Mô tả mặc định cho SEO khi trang không có mô tả riêng.
  description:
    "Bản dịch tiếng Việt các bài luận, blog về công nghệ, crypto, UX và kinh doanh. Đọc-trước-tiên, không quảng cáo.",
  // Domain dùng cho sitemap, RSS, OG, canonical.
  // Mặc định là subdomain Cloudflare Pages; đổi nếu tên project khác hoặc dùng domain riêng.
  url: "https://margina.pages.dev",
  // Người vận hành site (tuỳ chọn). Để trống nếu không muốn hiển thị.
  curator: "",
  locale: "vi",
  // Màu nhấn mặc định khi một bài không khai báo `accent`.
  defaultAccent: "#5a4a86",
  // Ảnh OG mặc định cho bài không có hero (đặt trong /public).
  defaultOgImage: "/og-default.png",
} as const;

// Nhãn tiếng Việt cho các thẻ chủ đề (tuỳ chọn; thẻ không có ở đây vẫn hiển thị nguyên văn).
export const TAG_LABELS: Record<string, string> = {
  Crypto: "Crypto",
  UX: "UX",
  "Kinh doanh": "Kinh doanh",
  AI: "AI",
  "Công nghệ": "Công nghệ",
};
