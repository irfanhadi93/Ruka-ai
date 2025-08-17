// ruka.js
function kirimPesan() {
  const input = document.getElementById("user-input");
  const pesan = input.value.trim();
  if (pesan === "") return;

  tampilkanPesan("Kamu", pesan, "user");         // dari pesan.js
  input.value = "";

  const jawaban = getJawaban(pesan);             // dari respon.js
  setTimeout(() => {
    tampilkanPesan("Ruka", jawaban, "bot");      // dari pesan.js
  }, 500);
}