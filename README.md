# Marginalia

Website tĩnh để xuất bản các **bản dịch tiếng Việt** từ những bài luận và blog tiếng Anh
(công nghệ, crypto, UX, kinh doanh, AI). Đọc-trước-tiên, tối giản, nhanh, không quảng cáo.

Dựng bằng [Astro](https://astro.build). Mỗi bài là một file Markdown; thêm bài mới chỉ bằng
cách thêm một file, không phải sửa code.

- Mã nguồn: <https://github.com/grintraitao/Margina>
- Domain: <https://margina.xyz> (Cloudflare Pages)

---

## Bắt đầu

Yêu cầu Node 20.3+ (hoặc 22, xem `.nvmrc`).

```bash
npm install            # cài lần đầu
npm run dev            # xem ở http://localhost:4321
npm run build          # build ra thư mục dist/
npm run preview        # xem thử bản đã build
npm run check:dashes   # kiểm tra không còn dấu gạch ngang dài trong nội dung
```

---

## Thêm một bài mới

Tạo một file `.md` trong [`src/content/posts/`](src/content/posts/). Hết. Trang chủ, trang thẻ,
trang tác giả, lưu trữ, RSS, sitemap và tìm kiếm đều tự cập nhật.

Ảnh của bài để trong `src/content/posts/images/<slug>/` và tham chiếu bằng đường dẫn tương đối;
ảnh sẽ được tối ưu tự động khi build.

### Frontmatter

```yaml
---
title: "Tiêu đề tiếng Việt"             # bắt buộc
subtitle: "Phụ đề 1 đến 2 dòng"          # tuỳ chọn
originalTitle: "Original English title"   # tuỳ chọn
author: "Tên tác giả gốc"                # tuỳ chọn (thiếu sẽ hiện placeholder)
sourceUrl: "https://link-bai-goc"        # tuỳ chọn (thiếu sẽ hiện placeholder)
sourceName: "Tên nơi đăng"               # tuỳ chọn
date: 2026-06-15                          # bắt buộc, dùng để sắp xếp
year: 2026                                # tuỳ chọn (năm nguyên tác)
readingTime: "10 phút"                   # tuỳ chọn (thiếu sẽ tự tính)
tags: ["Crypto", "AI"]                   # tuỳ chọn
rating: 4.5                               # tuỳ chọn, điểm chủ quan thang 5 (cho số lẻ)
accent: "#5a4a86"                         # màu nhấn riêng của bài
hero:                                      # tuỳ chọn
  src: "./images/<slug>/hero.png"
  alt: "Mô tả ảnh"
  caption: "Chú thích. Nguồn: ..."
draft: false                              # true để ẩn khỏi trang chủ/build
---
```

> **Khối ghi nguồn cuối bài luôn hiển thị.** Nếu thiếu `author` hoặc `sourceUrl`, chỗ đó hiện
> placeholder ("(chưa rõ)", "(đang cập nhật)") chứ không biến mất.

### Cú pháp thân bài

Markdown thường, cộng thêm:

- **Khung callout** (đoạn dài hoặc cần nhấn):

  ```
  :::box
  Nội dung đoạn cần đóng khung.
  :::
  ```

- **Trích dẫn kèm tên người nói**:

  ```
  :::quote{cite="Tên người nói"}
  Câu trích dẫn.
  :::
  ```

- **Hình kèm chú thích** (một đoạn chỉ chứa một ảnh, dùng phần title làm chú thích):

  ```
  ![mô tả ảnh](./images/<slug>/so-do.png "Chú thích tiếng Việt. Nguồn: ...")
  ```

- **Footnote**:

  ```
  Câu có chú thích.[^1]

  [^1]: Nội dung chú thích ở cuối bài.
  ```

- **Mục lục** tự sinh từ các tiêu đề `## ` (h2) và `### ` (h3).

### Quy tắc nội dung

- **Không dùng dấu gạch ngang dài** (— hoặc –). Thay bằng dấu phẩy, hai chấm, hoặc viết lại câu.
  Chạy `npm run check:dashes` để kiểm.
- Luôn ghi nguồn: tác giả gốc, năm, link bài gốc. Đây là bản dịch có dẫn nguồn, không mạo nhận
  là nguyên tác.
- Giữ nguyên câu chữ bản dịch, không tự ý biên tập lại.

---

## Chuyển một bài từ file HTML (có ảnh base64)

```bash
node scripts/extract-images.mjs <duong-dan.html> <slug>
```

Lệnh tách ảnh base64 ra `src/content/posts/images/<slug>/` và xuất HTML đã rút gọn vào
`scripts/tmp/<slug>.cleaned.html` để soạn lại thành Markdown.

---

## Tính năng

- Trang chủ kiểu tạp chí: bài mới nhất nổi bật + danh sách gọn, có **phân trang**.
- **Tìm kiếm** toàn văn phía client (tiêu đề, phụ đề, tác giả, trích đoạn); phím tắt `/`.
- Lọc theo **thẻ** (`/tags/...`), **trang tác giả** (`/tac-gia/...`), **lưu trữ theo năm** (`/luu-tru`).
- Trang bài: mục lục tự sinh, thanh tiến độ đọc, **chỉnh bề rộng Vừa/Rộng**, dark mode, nút lên
  đầu trang, popover xem nhanh footnote, bài liên quan, sao chép/chia sẻ, điểm đánh giá chủ quan.
- Hình và callout **tràn rộng** hơn cột chữ; cột chữ giữ bề rộng dễ đọc.
- Chuyển trang mượt bằng **View Transitions**.
- SEO: Open Graph/Twitter card, RSS, sitemap, `lang="vi"`. Mỗi bài có **màu nhấn** riêng.

---

## Cấu hình

Sửa trong [`src/config.ts`](src/config.ts):

- `name` — tên trang (header, thẻ `<title>`).
- `tagline`, `description` — giới thiệu và mô tả SEO mặc định.
- `url` — domain chính thức (dùng cho sitemap, RSS, OG, canonical).

---

## Cấu trúc

```
src/
  config.ts            # tên trang, domain, mô tả
  content.config.ts    # schema frontmatter (Zod)
  content/posts/       # mỗi bài một file .md (+ images/<slug>/)
  components/           # FeaturedCard, PostRow, Pagination, TableOfContents, ThemeToggle,
                        #   WidthToggle, ShareButton, ReadingProgress, Attribution,
                        #   RelatedPosts, Rating
  layouts/             # BaseLayout (script điều khiển trung tâm), PostLayout
  pages/               # [...page] (trang chủ + phân trang), posts/[...slug], tags/[tag],
                        #   tac-gia/[author], luu-tru, rss.xml, robots.txt,
                        #   search-index.json, 404
  plugins/             # remark: callout/quote + figure-từ-ảnh
  utils/               # date, reading, tags, toc
  styles/global.css    # hệ thống thiết kế + độ rộng/breakout + dark mode
scripts/               # check-dashes, make-og, extract-images
public/                # favicon, og-default.png
```

---

## Deploy (Cloudflare Pages)

Mỗi lần push lên nhánh `main`, Cloudflare tự build và deploy.

1. Cloudflare → Workers & Pages → Create → Pages → **Connect to Git** → chọn repo `Margina`.
2. Build: preset **Astro**, command `npm run build`, output `dist`, production branch `main`.
3. Custom domain: đưa `margina.xyz` vào Cloudflare (đổi nameserver), rồi tab **Custom domains**
   của project → thêm `margina.xyz` (tự cấp SSL).

Vì là site tĩnh thuần, có thể deploy ở bất kỳ host tĩnh nào khác (Netlify, Vercel, GitHub Pages);
chỉ cần build ra `dist/` và đặt `url` đúng trong `src/config.ts`.

> Khi thư viện lên tới hàng nghìn bài, có thể thay tìm kiếm JSON bằng Pagefind (index tĩnh, toàn văn).
