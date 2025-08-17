// mirip.js

function gabungkanMemoriDenganDataLatih() {
  return [...(memoriBelajar || []), ...(dataLatih || [])];
}

function cariJawabanMirip(teksUser) {
  let skorTertinggi = 0;
  let jawabanTerbaik = null;

  const semua = gabungkanMemoriDenganDataLatih();

  for (const item of semua) {
    const keywords = Array.isArray(item.keyword) ? item.keyword : [item.keyword];
    for (const kata of keywords) {
      const skor = hitungKemiripan(teksUser, kata);
      if (skor > skorTertinggi) {
        skorTertinggi = skor;
        jawabanTerbaik = item.response;
      }
    }
  }

  return skorTertinggi >= 0.6 ? jawabanTerbaik : null; // ⛔️ Tanpa fallback
}