// hitungkemiripan.js
function hitungKemiripan(teks1, teks2) {
  // Normalisasi: lowercase + hapus tanda baca
  teks1 = teks1.toLowerCase().replace(/[^\w\s]/g, "");
  teks2 = teks2.toLowerCase().replace(/[^\w\s]/g, "");

  // Pecah jadi set kata unik
  const kata1 = new Set(teks1.split(/\s+/));
  const kata2 = new Set(teks2.split(/\s+/));

  // Cari irisan
  const cocok = [...kata1].filter(k => kata2.has(k));

  // Skor antara 0 - 1
  return cocok.length / Math.max(kata1.size, kata2.size);
}