# DEVLOG, Marginalia

Nhật ký kỹ thuật để trace lại quyết định và nâng cấp về sau. Bổ sung mục mới lên đầu phần "Lịch sử".

---

## Tổng quan

- **Sản phẩm:** Marginalia, website tĩnh xuất bản các **bản dịch tiếng Việt** từ blog/luận tiếng Anh. Đọc-trước-tiên, tối giản.
- **Stack:** Astro 5 (output tĩnh), Content Collections (Markdown). Thêm React + Privy (cho ví, xem dưới).
- **Repo:** github.com/grintraitao/Margina. **Domain:** margina.xyz.
- **Deploy:** Cloudflare **Workers Builds** (Git-connected), phục vụ `dist/` dạng **static assets** (`wrangler.jsonc`). Push lên `main` là tự build + deploy.
- **Quy tắc nội dung:** không dùng gạch ngang dài (— –); luôn ghi nguồn; giữ nguyên câu chữ bản dịch. `npm run check:dashes` để kiểm.

## Cấu trúc

```
src/
  config.ts            # tên trang (Marginalia), domain, mô tả
  content.config.ts    # schema frontmatter (Zod): title/subtitle/author/source/date/tags/
                        #   rating(0-5, tuỳ chọn)/summary(bool)/accent/hero/draft
  content/posts/       # mỗi bài 1 file .md (+ images/<slug>/)
  components/          # FeaturedCard, PostRow, Pagination, TableOfContents, ThemeToggle,
                       #   ShareButton, ReadingProgress, Attribution, RelatedPosts, Rating,
                       #   WalletMenu.tsx + wallet.css (ví Privy, theo Herond DS)
  layouts/             # BaseLayout (script điều khiển trung tâm + gắn ví), PostLayout
  lib/privyConfig.ts   # cấu hình + App ID Privy
  pages/               # [...page] (trang chủ + phân trang), posts/[...slug], tags/[tag],
                       #   tac-gia/[author], luu-tru, rss.xml, robots.txt, search-index.json, 404
  plugins/             # remark: callout/quote (:::box, :::quote{cite}) + figure-từ-ảnh
  utils/               # date, reading, tags, toc
  styles/global.css    # design system reading-first (paper, serif, accent theo bài)
scripts/               # check-dashes, make-og, extract-images (tách ảnh base64 từ HTML)
.claude/skills/herond-design/   # skill design system Herond (aurora) cho phần ví
```

## Quy trình thêm bài

1. Tạo `src/content/posts/<slug>.md` với frontmatter (xem README). Ảnh để `images/<slug>/`.
2. Cú pháp: `:::box`, `:::quote{cite="..."}`, ảnh `![alt](./...png "caption")`, footnote `[^1]`, bảng GFM, h2/h3 sinh mục lục.
3. `summary: true` nếu là bản tóm lược/diễn giải (đổi câu ghi nguồn). `rating: 4.5` nếu muốn chấm điểm.
4. Chuyển từ file HTML cũ: `node scripts/extract-images.mjs <file.html> <slug>` (tách ảnh base64 + xuất HTML rút gọn để soạn lại). Nhớ bỏ artifact lạ (vd. `[cite: 1]` của Gemini) và đổi en-dash thành dấu phẩy.
5. `npm run check:dashes`, `npm run build`, rồi commit + push `main`.

## Ví Privy (theo Herond Design System)

- **Trạng thái:** PROTOTYPE. **Chỉ phần ĐĂNG NHẬP là Privy thật**; số dư/giá/gửi/swap/lịch sử là **dữ liệu giả** (UI nguyên mẫu, không gọi on-chain, không tiền thật).
- **UI:** theo skill `herond-design` (aurora dark, Plus Jakarta Sans, primary Ozone #00b3ED), file riêng `src/components/wallet.css` (prefix `hw-`). Có popup: số dư, 4 nút Gửi/Nhận/Mua/Swap, tabs Token/NFT, bottom nav, sheet gửi/nhận.
- **App ID:** Privy App ID là **định danh công khai** (giống Firebase key), được commit thẳng trong `src/lib/privyConfig.ts` (mặc định) nên bản live cũng chạy. Bảo mật dựa vào **Allowed origins** trong dashboard Privy.
- **BẮT BUỘC để login chạy trên domain:** thêm `https://margina.xyz` (+ `http://localhost:4321`) vào Privy Dashboard → Allowed origins.
- **Ẩn/hiện ví:** `BaseLayout` render ví khi `PRIVY_APP_ID` có giá trị (`showWallet`). Muốn tắt ví trên prod: bỏ App ID mặc định (để rỗng) thì ví tự ẩn và Privy không bị bundle.

## ⚠ Gotchas quan trọng (BUILD/DEPLOY trên Cloudflare)

Cloudflare Workers Builds dùng **Node 22 + npm 10.9.2** và chạy **`npm ci`** (clean-install, strict theo lockfile). Ba lỗi đã gặp và cách tránh:

1. **Lockfile phải tạo bằng npm 10**, không phải npm 11. Máy dev mặc định npm 11 sinh lock mà `npm ci` của npm 10 coi là lệch (`Missing: ... from lock file`) → build fail.
   → Sau khi đổi dependencies, chạy: **`npx npm@10 install`** để tạo lại lock đúng chuẩn npm 10, rồi mới push.
2. **Bug npm optional-dependencies (#4828) + Rollup/Sharp.** Lock sinh trên macOS thiếu gói nhị phân Linux, build báo `Cannot find module @rollup/rollup-linux-x64-gnu`.
   → Đã thêm vào `package.json > optionalDependencies`: `@rollup/rollup-linux-x64-gnu`, `@img/sharp-linux-x64`, `@img/sharp-libvips-linux-x64` (phiên bản phải khớp rollup/sharp đang dùng). Nếu nâng rollup/sharp, cập nhật version các gói này.
3. **Worker chỉ-có-static-assets KHÔNG nhận biến runtime** ("Variables cannot be added..."). Biến cần cho build (`PUBLIC_*`) phải đặt ở **Build variables** trong cấu hình Workers Builds, KHÔNG phải "Variables and Secrets" (runtime). (Hiện ta né hẳn việc này bằng cách commit App ID công khai vào code.)

Kiểm chứng nhanh trước khi push: `npx npm@10 ci && npm run build` phải xanh.

## Việc có thể nâng cấp sau

- Ví: nối phần thật (số dư/giá qua viem+CoinGecko; gửi qua `useSendTransaction`; swap qua 0x/1inch). Cân nhắc backend (Cloudflare Function) nếu cần giữ secret.
- Tìm kiếm: nếu lên hàng nghìn bài, thay JSON index bằng Pagefind.
- OG image tự sinh cho bài không hero (astro-og-canvas).
- Ghim `packageManager`/CI để khỏi dính bẫy npm 10 vs 11.

## Lịch sử (mốc chính)

- **2026-06:** Dựng site (design system Mục 5), 5 bài dịch, trang chủ/lưu trữ/tác giả/thẻ, RSS/sitemap/OG, dark mode, tìm kiếm, mục lục, View Transitions. Deploy Cloudflare + margina.xyz.
- **2026-06:** Thêm tính năng `rating` (điểm chủ quan) và `summary` (bản tóm lược).
- **2026-06:** Học/dựng **ví Privy** đa giai đoạn (Sepolia → mainnet đa mạng → prototype) rồi tách sang nhánh `wallet-experiment`; cuối cùng thiết kế lại theo **Herond DS** và merge vào `main`. Gỡ 3 lỗi build Cloudflare (npm10 lock, rollup-linux optionalDeps, biến build). Commit App ID công khai để ví lên prod.
- **2026-06:** Refactor: gỡ CSS ví cũ đã chết khỏi `global.css`; thêm DEVLOG; logo Marginalia riêng theo style aurora.
