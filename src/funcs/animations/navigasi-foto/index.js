import { tunggu } from "../../tunggu/index.js";
import { toggleClass } from "../../toggle/index.js";
import { foto } from "../../elemets/index.js";
import { bulet } from "../../elemets/index.js";

let i = 0;

export const animasiNavigasiFoto = async (tambah = false) => {
    bulet.forEach(b =>  b.classList.remove('active'));
    
    tambah ? i++ : i--;

    i < 0 ? i = 4 : false;
    i > 4 ? i = 0 : false;

    toggleClass(foto, 'ilang');
    await tunggu(300);

    bulet.forEach(b => {
        if (b.classList.contains(`${i}`)) b.classList.add('active');
    })

    foto.setAttribute('src', `src/assets/images/pictures/${i}.jpg`);

    await tunggu(300);
    toggleClass(foto, 'ilang');
}