import { getCollection } from "astro:content";
import { formatDate } from "../utils/date";

// Chỉ mục tìm kiếm tĩnh: tiêu đề, phụ đề, tác giả, thẻ, và trích đoạn đầu thân bài.
export async function GET() {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const data = posts.map((p) => {
    const excerpt = (p.body || "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/[#>*_`~\[\]()!:-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 400);
    const text = [p.data.title, p.data.subtitle, p.data.author, p.data.tags.join(" "), excerpt]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return {
      title: p.data.title,
      url: `/posts/${p.id}`,
      meta: [p.data.author, formatDate(p.data.date)].filter(Boolean).join(" · "),
      text,
    };
  });

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
