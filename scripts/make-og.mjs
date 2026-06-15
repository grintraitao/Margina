// Sinh ảnh OG mặc định (public/og-default.png, 1200x630) bằng sharp (đã có sẵn theo Astro).
// Chỉ dùng hình khối, không phụ thuộc font, nên luôn render ổn. Chạy: node scripts/make-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const ACCENT = "#5a4a86";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4f2ee"/>
  <g>
    <rect x="210" y="120" width="780" height="420" rx="24" fill="#ffffff"
      stroke="rgba(0,0,0,0.08)" stroke-width="2"/>
    <rect x="210" y="120" width="10" height="420" rx="5" fill="${ACCENT}"/>
    <rect x="270" y="180" width="520" height="34" rx="8" fill="#222"/>
    <rect x="270" y="246" width="640" height="16" rx="8" fill="#c9c5bd"/>
    <rect x="270" y="282" width="600" height="16" rx="8" fill="#c9c5bd"/>
    <rect x="270" y="318" width="620" height="16" rx="8" fill="#c9c5bd"/>
    <rect x="270" y="372" width="560" height="80" rx="12" fill="${ACCENT}" fill-opacity="0.10"/>
    <rect x="270" y="372" width="6" height="80" rx="3" fill="${ACCENT}"/>
    <rect x="300" y="396" width="480" height="14" rx="7" fill="${ACCENT}" fill-opacity="0.55"/>
    <rect x="300" y="424" width="430" height="14" rx="7" fill="${ACCENT}" fill-opacity="0.4"/>
  </g>
</svg>`;

const out = fileURLToPath(new URL("../public/og-default.png", import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log("✓ Đã tạo public/og-default.png");
