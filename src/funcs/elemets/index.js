const opening = document.querySelector('.opening');
const img = document.querySelector('.opening img');
const p = document.querySelectorAll('.opening p');
const pria = document.querySelector('.opening .ryevo');
const dan = document.querySelector('.opening .dan');
const wanita = document.querySelector('.opening .nadia');
const h1 = [pria, dan, wanita];
const bukaUndangan = document.querySelector('.opening .buka-undangan');

const foto = document.querySelector('.foto img');
const bulet = document.querySelectorAll('.bulet');

const navigasiHome = document.querySelector('.navigasi-home');
const navigasiLokasi = document.querySelector('.navigasi-lokasi');
const navigasiFoto = document.querySelector('.navigasi-foto');
const navigasiKonfirmasi = document.querySelector('.navigasi-konfirmasi');

const audio = document.getElementById('audio');

export {
    opening, img, p, bukaUndangan, h1,
    foto, bulet,
    navigasiHome, navigasiLokasi, navigasiFoto, navigasiKonfirmasi,
    audio,
}