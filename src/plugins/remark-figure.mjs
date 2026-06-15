import { visit } from "unist-util-visit";

/**
 * Hình + chú thích bằng Markdown thuần: một đoạn chỉ chứa duy nhất một ảnh,
 * dùng phần "title" của ảnh làm chú thích.
 *
 *   ![alt mô tả](./images/so-do.png "Chú thích tiếng Việt. Nguồn: ...")
 *
 * -> <figure class="figure"><img …><figcaption>Chú thích…</figcaption></figure>
 *
 * Ảnh tương đối vẫn được Astro tối ưu hoá khi build (giữ nguyên node image).
 */
export function remarkFigure() {
  return (tree) => {
    visit(tree, "paragraph", (node) => {
      if (node.children.length !== 1) return;
      const img = node.children[0];
      if (!img || img.type !== "image") return;

      const caption = img.title;
      const data = node.data || (node.data = {});
      data.hName = "figure";
      data.hProperties = { className: ["figure"] };

      if (caption) {
        // Tránh title hiển thị lại thành tooltip; chỉ dùng làm figcaption.
        img.title = null;
        node.children.push({
          type: "paragraph",
          data: { hName: "figcaption" },
          children: [{ type: "text", value: caption }],
        });
      }
    });
  };
}
