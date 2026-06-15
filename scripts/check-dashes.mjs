// Kiểm tra: nội dung không được dùng dấu gạch ngang dài (— em dash, – en dash).
// Chạy: npm run check:dashes
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../src/content", import.meta.url));
const BAD = /[—–]/; // — và –

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(md|mdx)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
let hits = 0;
for (const file of files) {
  const text = await readFile(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    if (BAD.test(line)) {
      hits++;
      console.log(`${relative(process.cwd(), file)}:${i + 1}  ${line.trim()}`);
    }
  });
}

if (hits > 0) {
  console.error(`\n✗ Tìm thấy ${hits} dòng có dấu gạch ngang dài. Thay bằng dấu phẩy, hai chấm, hoặc viết lại câu.`);
  process.exit(1);
} else {
  console.log(`✓ Không có dấu gạch ngang dài trong ${files.length} file nội dung.`);
}
