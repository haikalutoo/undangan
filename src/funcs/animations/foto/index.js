import { toggleClass } from "../../toggle/index.js";

export const animasiFoto = _ => {
    const foto = document.querySelector('.foto');
    toggleClass(foto, 'return');
}