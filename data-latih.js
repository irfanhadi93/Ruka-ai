// dataLatih.js

const dataLatih = [
  {
    keyword: ["halo", "hai", "hei"],
    response: "Halo juga! 😊"
  },
  {
    keyword: ["apa kabar", "kabarmu gimana", "gimana kabarnya"],
    response: "Aku baik, semoga kamu juga ya!"
  },
  {
    keyword: ["terima kasih", "makasih", "makasii"],
    response: "Sama-sama! Senang bisa bantu 😊"
  },
  {
    keyword: ["selamat pagi", "pagi"],
    response: "Selamat pagi! Semoga harimu menyenangkan ☀️"
  },
  {
    keyword: ["selamat malam", "malam"],
    response: "Selamat malam! Jangan lupa istirahat ya 🌙"
  }
];

// Fungsi pencocokan dari data latih
function jawabDariDataLatih(teks) {
  for (const item of dataLatih) {
    const keywords = Array.isArray(item.keyword) ? item.keyword : [item.keyword];
    for (const kata of keywords) {
      if (teks.includes(kata)) {
        return item.response;
      }
    }
  }
  return null; // ⛔️ Tanpa fallback
}