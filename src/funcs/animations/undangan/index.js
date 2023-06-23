import { toggleClass } from "../../toggle/index.js";

export const animasiUndangan = _ => {
    const undangan = document.querySelector('.undangan');
    toggleClass(undangan, 'return');
}