import { toggleClass } from "../../toggle/index.js";

export const animasiLokasi = _ => {
    const lokasi = document.querySelector('.lokasi');
    toggleClass(lokasi, 'return');
}