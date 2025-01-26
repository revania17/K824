// login daftar akun
// fungsi untuk menampilkan notifikasi sukses atau gagal
function submitForm(event) {
    event.preventDefault(); // mencegah halaman refresh

    // ambil nilai dari input email dan password
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // validasi email dan password
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
