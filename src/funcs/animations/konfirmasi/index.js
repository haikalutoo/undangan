import { toggleClass } from "../../toggle/index.js";

export const animasiKonfirmasi = _ => {
    const konfirmasi = document.querySelector('.konfirmasi');
    toggleClass(konfirmasi, 'return');
}