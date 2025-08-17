// pesan.js
function tampilkanPesan(nama, teks, kelas) {
  const chat = document.getElementById("chat-container");

  const p = document.createElement("p");
  p.className = kelas;
  p.innerHTML = `<strong>${nama}:</strong> ${teks}`;

  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight; // auto scroll ke bawah
}