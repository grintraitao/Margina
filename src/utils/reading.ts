// Ước lượng thời gian đọc từ nội dung Markdown thô.
// Dùng cho card trang chủ và làm mặc định ở trang bài (frontmatter `readingTime` ghi đè).
const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(markdown: string | undefined): string {
  if (!markdown) return "1 phút";
  // Bỏ cú pháp markdown thô thường gặp để đếm chữ sát hơn.
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ") // code block
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // ảnh
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ") // link (giữ chữ? đơn giản bỏ)
    .replace(/[#>*_`~|:-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} phút`;
}
