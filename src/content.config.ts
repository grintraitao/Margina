import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Mỗi bài dịch là một file .md (hoặc .mdx) trong src/content/posts.
// Các trường nguồn/tác giả để optional: khối ghi nguồn vẫn luôn hiển thị,
// chỗ nào thiếu sẽ dùng placeholder (xem src/components/Attribution.astro).
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      originalTitle: z.string().optional(),
      author: z.string().optional(),
      sourceUrl: z.string().url().optional(),
      sourceName: z.string().optional(),
      date: z.coerce.date(),
      // Năm nguyên tác (tuỳ chọn). Nếu trống, khối nguồn bỏ qua phần năm.
      year: z.number().optional(),
      // Ghi đè thời gian đọc. Nếu trống, tự tính từ độ dài bài.
      readingTime: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Điểm đánh giá chủ quan của người dịch, thang 5 (cho phép số lẻ, vd. 4.5).
      rating: z.number().min(0).max(5).optional(),
      // Màu nhấn riêng của bài (callout / quote / link / gạch tiêu đề).
      accent: z.string().default("#5a4a86"),
      hero: z
        .object({
          src: image(),
          alt: z.string().default(""),
          caption: z.string().optional(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
