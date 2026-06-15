const formatter = new Intl.DateTimeFormat("vi-VN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}

// Dạng máy đọc cho <time datetime="...">
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
