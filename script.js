// notif user id
// ambil elemen input dan tombol
const userIdInput = document.querySelector('input[placeholder="Masukkan User ID"]');
const zoneIdInput = document.querySelector('input[placeholder="Zone ID"]');
const submitBtn = document.querySelector('.btn-primary');

submitBtn.addEventListener('click', function () {
    // ambil nilai dari input
    const userId = userIdInput.value.trim();
    const zoneId = zoneIdInput.value.trim();

    // cek apakah kedua input sudah diisi
    if (userId && zoneId) {
        alert(`Berhasil! User ID: ${userId}, Zone ID: ${zoneId}`);
    } else {
        alert('Gagal! Pastikan User ID dan Zone ID Sudah Diisi.');
    }
})
// user id end

// login daftar akun
// fungsi untuk menampilkan notifikasi sukses atau gagal
function submitForm(event) {
    event.preventDefault(); // mencegah halaman refresh

    // ambil nilai dari input email dan password
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // validasi sederhana untuk email dan password
    if (email && password) {
        alert('Akun Berhasil Didaftarkan!');
        window.location.href = 'index.html'; // ke beranda
    } else {
        alert('Gagal Mendaftarkan Akun. Pastikan Semua Sudah Terisi.');
    }
}

// tambahkan event listener ke form
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
// login daftar akun end
