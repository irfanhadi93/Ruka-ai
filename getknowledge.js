// === getknowledge.js ===
// Fungsi untuk menjawab pertanyaan tentang jati diri

function jawabTentangDiri(pesan) {
  const teks = pesan.toLowerCase();

  for (const item of rukaMemory) {
    if (item.keyword.some(k => teks.includes(k))) {
      return item.response;
    }
  }

  return null; // Kalau tidak ditemukan
}