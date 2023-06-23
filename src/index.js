import { tunggu } from "./funcs/tunggu/index.js";
import { animasiOpening } from "./funcs/animations/opening/index.js";
import { animasiUndangan } from "./funcs/animations/undangan/index.js";
import { animasiLokasi } from "./funcs/animations/lokasi/index.js";
import { animasiFoto } from "./funcs/animations/foto/index.js";
import { animasiNavigasiFoto } from "./funcs/animations/navigasi-foto/index.js";
import { animasiKonfirmasi } from "./funcs/animations/konfirmasi/index.js";

import { bukaUndangan, navigasiHome, navigasiFoto, navigasiLokasi, navigasiKonfirmasi } from "./funcs/elemets/index.js";

import { audio } from "./funcs/elemets/index.js";

window.onload = async _ => {
    await tunggu(1000);
    animasiOpening();
}

document.onclick = async ({ target }) => {

    // UNDANGAN
    if (
        target === bukaUndangan ||
        target === bukaUndangan.firstElementChild ||
        target === bukaUndangan.lastElementChild
    ) {
        audio.play();
        animasiOpening();
        animasiUndangan();
    }

    // HOME
    if (
        target === navigasiHome ||
        target === navigasiHome.firstElementChild ||
        target === navigasiHome.lastElementChild
    ) 
    {
        animasiOpening();
        animasiUndangan();
    }

    // LOKASI
    if (
        target === navigasiLokasi ||
        target === navigasiLokasi.firstElementChild ||
        target === navigasiLokasi.lastElementChild ||
        target.classList.contains('lokasi-close')
    ) {
        animasiUndangan();
        animasiLokasi();
    }

    // FOTO
    if (
        target === navigasiFoto ||
        target === navigasiFoto.firstElementChild ||
        target === navigasiFoto.lastElementChild ||
        target.classList.contains('foto-close')
    ) {
        animasiUndangan();
        animasiFoto();
    }

    // NAVIGASI FOTO
    (_ => {
        if (target.classList.contains('kiri')) return animasiNavigasiFoto(false);
        if (target.classList.contains('kanan')) return animasiNavigasiFoto(true);
    })();

    // KONFIRMASI
    if (
        target === navigasiKonfirmasi ||
        target === navigasiKonfirmasi.firstElementChild ||
        target === navigasiKonfirmasi.lastElementChild ||
        target.classList.contains('konfirmasi-close')
    ) {
        animasiUndangan();
        animasiKonfirmasi();
    }
}