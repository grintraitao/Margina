import type { MarkdownHeading } from "astro";

// Heading dùng cho mục lục: chỉ h2/h3, bỏ tiêu đề ẩn "Footnotes" do GFM sinh ra.
export function tocHeadings(headings: MarkdownHeading[]): MarkdownHeading[] {
  return headings.filter(
    (h) => (h.depth === 2 || h.depth === 3) && h.slug !== "footnote-label",
  );
}
