import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkDirective from "remark-directive";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { remarkCallout } from "./src/plugins/remark-callout.mjs";
import { remarkFigure } from "./src/plugins/remark-figure.mjs";
import { SITE } from "./src/config.ts";

// https://astro.build
export default defineConfig({
  site: SITE.url,
  trailingSlash: "ignore",
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  integrations: [mdx(), sitemap()],
  markdown: {
    gfm: true, // footnote [^1], bảng, ...
    remarkPlugins: [remarkDirective, remarkCallout, remarkFigure],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { className: ["heading-anchor"], ariaHidden: "true", tabIndex: -1 },
          content: { type: "text", value: "#" },
        },
      ],
    ],
  },
});