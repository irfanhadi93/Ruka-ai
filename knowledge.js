// === knowledge.js ===
const rukaMemory = [
  {
    keyword: ["kamu siapa", "siapa kamu", "siapa nama kamu", "siapa nama mu"],
    response: "Aku Ruka, asisten kreatif buatan IrfanHadi 😊"
  },
  {
    keyword: ["tujuan kamu", "kamu dibuat untuk apa", "fungsi kamu apa"],
    response: "Aku dibuat untuk bantu kamu belajar, bereksperimen, dan jadi teman kreatif kamu!"
  },
  {
    keyword: ["apa itu ruka", "ruka itu apa"],
    response: "Ruka adalah chatbot sederhana yang terus belajar dari obrolan 😊"
  }
];

// Fungsi untuk mencari jawaban dari pengetahuan dasar
function jawabTentangDiri(teks) {
  if (!teks) return null;

  // Normalisasi teks
  teks = teks.toLowerCase().replace(/[^\w\s]/g, "");

  for (const item of rukaMemory) {
    const keywords = Array.isArray(item.keyword) ? item.keyword : [item.keyword];
    for (const kata of keywords) {
      if (new RegExp(`\\b${kata}\\b`).test(teks)) {
        return item.response;
      }
    }
  }
  return null; // Kalau tidak ditemukan
}