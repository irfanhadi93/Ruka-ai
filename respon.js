// respon.js

let modeBelajar = false;
let pertanyaanBelumTerjawab = "";

function getJawaban(pesan) {
  const teks = pesan.toLowerCase();

  // Jika sedang dalam mode belajar → simpan jawaban dari user
  if (modeBelajar) {
    simpanKeMemori(pertanyaanBelumTerjawab, teks);
    modeBelajar = false;
    return "Terima kasih! Sekarang aku ingat jawabannya 😊";
  }

  // Coba dari knowledge (tentang jati diri Ruka)
  const dariKnowledge = jawabTentangDiri(teks);
  if (dariKnowledge) return dariKnowledge;

  // Coba dari data latih (sapaan ringan, dll)
  const dariLatih = jawabDariDataLatih(teks);
  if (dariLatih) return dariLatih;

  // Coba dari mirip (memori belajar + data latih)
  const dariMirip = cariJawabanMirip(teks);
  if (dariMirip) return dariMirip;

  // Jika semua gagal, aktifkan mode belajar
  modeBelajar = true;
  pertanyaanBelumTerjawab = teks;
  return "Aku belum tahu jawabannya. Kamu bisa kasih jawabannya?";
}