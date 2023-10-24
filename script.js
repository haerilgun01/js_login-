document.getElementById("submitButton").addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jurusan = document.getElementById("jurusan").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;

  const mahasiswa = {
    nama: nama,
    nim: nim,
    jurusan: jurusan,
    email: email,
    nohp: nohp,
  };

  const daftarMahasiswa = document.getElementById("daftarMahasiswa");
  const listItem = document.createElement("li");
  listItem.textContent = `Nama: ${mahasiswa.nama}, NIM: ${mahasiswa.nim}, Jurusan: ${mahasiswa.jurusan}, Email: ${mahasiswa.email}, No. HP: ${mahasiswa.nohp}`;
  daftarMahasiswa.appendChild(listItem);

  document.getElementById("registrationForm").reset();
});
