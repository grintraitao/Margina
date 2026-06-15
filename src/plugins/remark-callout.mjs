import { visit } from "unist-util-visit";

/**
 * Cú pháp container directive cho thân bài:
 *
 *   :::box
 *   Đoạn dài / đoạn đắt cần đóng khung.
 *   :::
 *
 *   :::quote{cite="Tên người nói"}
 *   Câu trích dẫn.
 *   :::
 *
 * `:::box`   -> <aside class="callout">…</aside>
 * `:::quote` -> <blockquote class="pquote">… <cite>Tên</cite></blockquote>
 *
 * Không dùng dấu gạch ngang dài trước tên người nói (yêu cầu nội dung của site).
 */
export function remarkCallout() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "containerDirective") return;

      if (node.name === "box") {
        const data = node.data || (node.data = {});
        data.hName = "aside";
        data.hProperties = { className: ["callout"] };
        return;
      }

      if (node.name === "quote") {
        const data = node.data || (node.data = {});
        data.hName = "blockquote";
        data.hProperties = { className: ["pquote"] };

        const cite = node.attributes && node.attributes.cite;
        if (cite) {
          node.children.push({
            type: "paragraph",
            data: { hName: "cite", hProperties: { className: ["pquote-cite"] } },
            children: [{ type: "text", value: cite }],
          });
        }
        return;
      }
    });
  };
}
