// Tách ảnh base64 trong file HTML ra thành file, và xuất bản HTML đã rút gọn để đọc.
// Dùng: node scripts/extract-images.mjs <input.html> <slug>
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const [, , inPath, slug] = process.argv;
if (!inPath || !slug) {
  console.error("Cần: <input.html> <slug>");
  process.exit(1);
}

let html = readFileSync(inPath, "utf8");
const outDir = `src/content/posts/images/${slug}`;
mkdirSync(outDir, { recursive: true });

let n = 0;
html = html.replace(
  /data:image\/(png|jpeg|jpg|webp|gif);base64,([A-Za-z0-9+/=\s]+)/g,
  (_m, ext, b64) => {
    n++;
    const buf = Buffer.from(b64.replace(/\s+/g, ""), "base64");
    const e = ext === "jpeg" ? "jpg" : ext;
    const name = `hinh-${n}.${e}`;
    writeFileSync(`${outDir}/${name}`, buf);
    return `./images/${slug}/${name}`;
  },
);

mkdirSync("scripts/tmp", { recursive: true });
writeFileSync(`scripts/tmp/${slug}.cleaned.html`, html);
console.log(`✓ ${slug}: tách ${n} ảnh -> ${outDir}, HTML rút gọn -> scripts/tmp/${slug}.cleaned.html`);
