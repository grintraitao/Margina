# Website bản dịch

Website tĩnh (Astro) để xuất bản các bài dịch tiếng Việt. Đọc-trước-tiên, tối giản, nhanh.

## Chạy

```bash
npm install      # lần đầu
npm run dev      # xem ở http://localhost:4321
npm run build    # build ra thư mục dist/
npm run preview  # xem thử bản build
npm run check:dashes   # kiểm tra không còn dấu gạch ngang dài trong nội dung
```

## Đổi tên trang và domain

Sửa trong [src/config.ts](src/config.ts): `name` (tên trang), `tagline`, `description`, và `url`
(domain thật, dùng cho sitemap/RSS/OG). Không cần sửa chỗ nào khác.

## Thêm một bài mới

Tạo một file `.md` trong [src/content/posts/](src/content/posts/). Chỉ vậy, không sửa code.

Ảnh của bài để trong `src/content/posts/images/` và tham chiếu bằng đường dẫn tương đối
(`./images/ten-anh.png`); ảnh sẽ được tối ưu tự động khi build.

### Frontmatter

```yaml
---
title: "Tiêu đề tiếng Việt"          # bắt buộc
subtitle: "Phụ đề 1 đến 2 dòng"       # tuỳ chọn
originalTitle: "Original English title" # tuỳ chọn
author: "Tên tác giả gốc"             # tuỳ chọn (thiếu sẽ hiện placeholder)
sourceUrl: "https://link-bai-goc"     # tuỳ chọn (thiếu sẽ hiện placeholder)
sourceName: "tên trang nguồn"         # tuỳ chọn
date: 2026-06-15                       # bắt buộc, dùng để sắp xếp
year: 2026                             # tuỳ chọn (năm nguyên tác)
readingTime: "10 phút"                # tuỳ chọn (thiếu sẽ tự tính)
tags: ["Crypto", "AI"]                # tuỳ chọn
rating: 4.5                            # điểm đánh giá chủ quan, thang 5 (tuỳ chọn, cho số lẻ)
accent: "#5a4a86"                      # màu nhấn riêng của bài
hero:                                  # tuỳ chọn
  src: "./images/hero.png"
  alt: "Mô tả ảnh"
  caption: "Chú thích. Nguồn: ..."
draft: false                           # true để ẩn khỏi trang chủ/build
---
```

> Khối ghi nguồn cuối bài LUÔN hiển thị. Nếu thiếu `author` hoặc `sourceUrl`,
> chỗ đó hiện placeholder ("(chưa rõ)", "(đang cập nhật)") chứ không biến mất.

### Cú pháp thân bài

Markdown thường, cộng thêm:

- **Khung callout** (đoạn dài/đắt):

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
  ![mô tả ảnh](./images/so-do.png "Chú thích tiếng Việt. Nguồn: ...")
  ```

- **Footnote**:

  ```
  Câu có chú thích.[^1]

  [^1]: Nội dung chú thích ở cuối bài.
  ```

- **Mục lục** tự sinh từ các tiêu đề `## ` (h2) và `### ` (h3).

### Quy tắc nội dung

- **Không dùng dấu gạch ngang dài** (— hoặc –). Thay bằng dấu phẩy, hai chấm, hoặc
  viết lại câu. Chạy `npm run check:dashes` để kiểm.
- Luôn ghi nguồn: tác giả gốc, năm, link bài gốc. Đây là bản dịch có dẫn nguồn.

## Tính năng

- Trang chủ kiểu tạp chí: bài mới nhất nổi bật + danh sách gọn, có **phân trang**.
- **Tìm kiếm** toàn văn phía client (tiêu đề, phụ đề, tác giả, trích đoạn), phím tắt `/`.
- Lọc theo **thẻ** (`/tags/...`), **trang tác giả** (`/tac-gia/...`), **lưu trữ theo năm** (`/luu-tru`).
- Trang bài: TOC tự sinh, thanh tiến độ, **chỉnh bề rộng Vừa/Rộng**, dark mode, nút lên đầu trang,
  popover xem nhanh footnote, bài liên quan, sao chép/chia sẻ.
- Hình và callout **tràn rộng** hơn cột chữ; cột chữ giữ bề rộng dễ đọc.
- Chuyển trang mượt bằng **View Transitions**. SEO: OG/Twitter, RSS, sitemap, `lang="vi"`.

## Chuyển một bài từ file HTML (có ảnh base64)

```bash
node scripts/extract-images.mjs <duong-dan.html> <slug>
```

Lệnh này tách ảnh base64 ra `src/content/posts/images/<slug>/` và xuất HTML đã rút gọn vào
`scripts/tmp/<slug>.cleaned.html` để soạn lại thành Markdown.

## Cấu trúc

```
src/
  config.ts            # tên trang, domain, mô tả
  content.config.ts    # schema frontmatter
  content/posts/       # mỗi bài một file .md (+ images/<slug>/)
  components/           # FeaturedCard, PostRow, Pagination, TOC, ThemeToggle, WidthToggle,
                        #   ShareButton, ReadingProgress, Attribution, RelatedPosts
  layouts/             # BaseLayout (script trung tâm), PostLayout
  pages/               # [...page] (trang chủ + phân trang), posts/[...slug],
                        #   tags/[tag], tac-gia/[author], luu-tru, rss.xml, robots.txt,
                        #   search-index.json, 404
  plugins/             # remark callout/quote + figure
  utils/               # date, reading, tags, toc
  styles/global.css    # hệ thống thiết kế (Mục 5) + độ rộng/breakout
scripts/               # check-dashes, make-og (OG mặc định), extract-images
public/                # favicon, og-default.png
```

Deploy: bất kỳ host tĩnh nào (Cloudflare Pages, Netlify, Vercel, GitHub Pages). Nội dung
trong `dist/` sau khi `npm run build`. Nhớ đổi `url` trong `src/config.ts` thành domain thật.

> Khi lên tới hàng nghìn bài, có thể thay tìm kiếm JSON bằng Pagefind (index tĩnh, toàn văn).
