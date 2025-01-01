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
        alert(`berhasil! user id: ${userId}, zone id: ${zoneId}`);
    } else {
        alert('gagal! pastikan user id dan zone id sudah diisi.');
    }
});