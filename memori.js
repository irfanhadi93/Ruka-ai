// memori.js

// Backup lokal
let memoriBelajar = [];

if (localStorage.getItem("rukaMemori")) {
  try {
    memoriBelajar = JSON.parse(localStorage.getItem("rukaMemori")) || [];
  } catch (e) {
    memoriBelajar = [];
  }
}

// Simpan ke localStorage
function simpanLocal(data) {
  memoriBelajar.push(data);
  localStorage.setItem("rukaMemori", JSON.stringify(memoriBelajar));
}

// Simpan ke Firebase
function simpanFirebase(data) {
  const memoriRef = db.ref("rukaMemori"); // pake var db dari firebase.js
  memoriRef.push(data); // push biar auto-ID
}

// Ambil dari Firebase
async function ambilFirebase() {
  try {
    const snapshot = await db.ref("rukaMemori").once("value");
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      return [];
    }
  } catch (e) {
    console.error("Gagal ambil dari Firebase:", e);
    return [];
  }
}

// Fungsi utama: simpan pertanyaan & jawaban
function simpanKeMemori(pertanyaan, jawaban) {
  const dataBaru = {
    keyword: [pertanyaan.toLowerCase()],
    response: jawaban
  };

  // simpan ke local
  simpanLocal(dataBaru);

  // coba simpan online
  try {
    simpanFirebase(dataBaru);
  } catch (e) {
    console.error("Gagal simpan ke Firebase:", e);
  }
}

// Fungsi ambil memori gabungan (online + local backup)
async function ambilMemori() {
  const online = await ambilFirebase();
  return online.length ? online : memoriBelajar;
}