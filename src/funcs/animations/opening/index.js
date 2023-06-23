import { tunggu } from "../../tunggu/index.js";
import { toggleClass } from "../../toggle/index.js";
import { opening, img, p, h1, bukaUndangan, } from "../../elemets/index.js";

export const animasiOpening = _ => {
    (async _ => {

        toggleClass(opening, 'return');

        await tunggu(500);
        
        for (let i = 0; i < p.length; i++) {

            await tunggu(150);

            if (i === 3) toggleClass(img, 'return');

            toggleClass(p[i], 'return');

        }

        await tunggu(300);

        h1.forEach(h1 => toggleClass(h1, 'return'));
        toggleClass(bukaUndangan, 'return');

    })();
}