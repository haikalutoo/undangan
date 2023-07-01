/* ELEMENTS */
const opening = document.querySelector(".opening"),
   img = document.querySelector(".opening img"),
   p = document.querySelectorAll(".opening p"),
   pria = document.querySelector(".opening .ryevo"),
   dan = document.querySelector(".opening .dan"),
   wanita = document.querySelector(".opening .nadia"),
   h1 = [pria, dan, wanita],
   bukaUndangan = document.querySelector(".opening .buka-undangan"),
   foto = document.querySelector(".foto img"),
   bulet = document.querySelectorAll(".foto .bulet"),
   navigasiHome = document.querySelector(".navigasi-home"),
   navigasiLokasi = document.querySelector(".navigasi-lokasi"),
   navigasiFoto = document.querySelector(".navigasi-foto"),
   navigasiKonfirmasi = document.querySelector(".navigasi-konfirmasi"),
   audio = document.getElementById("audio");
/* TOGGLE CLASS */
const toggleClass = (element, className = "") =>
   element.classList.toggle(className);
/* TUNGGU */
const tunggu = (milidetik) => {
   return new Promise((resolve) => {
      setTimeout((_) => {
         resolve();
      }, milidetik);
   });
};
/* URL PARAMETER */
const urlParam = new URLSearchParams(window.location.search);
/* ANIMASI */
// OPENING
const animasiOpening = (_) => {
   (async (_) => {
      toggleClass(opening, "return");
      await tunggu(500);
      for (let i = 0; i < p.length; i++) {
         await tunggu(150);

         if (i === 3) toggleClass(img, "return");

         toggleClass(p[i], "return");
      }
      await tunggu(300);
      h1.forEach((h1) => toggleClass(h1, "return"));
      toggleClass(bukaUndangan, "return");
   })();
};
// UNDANGAN
const animasiUndangan = (_) => {
   const undangan = document.querySelector(".undangan");
   toggleClass(undangan, "return");
};
// LOKASI
const animasiLokasi = (_) => {
   const lokasi = document.querySelector(".lokasi");
   toggleClass(lokasi, "return");
};
// FOTO
const animasiFoto = (_) => {
   const foto = document.querySelector(".foto");
   toggleClass(foto, "return");
};
// NAVIGASI FOTO
let i = 0;
const animasiNavigasiFoto = async (tambah = false) => {
   bulet.forEach((b) => b.classList.remove("active"));
   tambah ? i++ : i--;
   i < 0 ? (i = 4) : false;
   i > 4 ? (i = 0) : false;
   toggleClass(foto, "ilang");
   await tunggu(300);
   bulet.forEach((b) => {
      if (b.classList.contains(`${i}`)) b.classList.add("active");
   });
   foto.setAttribute("src", `src/assets/images/pictures/${i}.jpg`);

   await tunggu(300);
   toggleClass(foto, "ilang");
};
// KONFIRMASI
const animasiKonfirmasi = (_) => {
   const konfirmasi = document.querySelector(".konfirmasi");
   toggleClass(konfirmasi, "return");
};
/* UNTUK */
((_) => {
   const nama = document.querySelector(".nama");
   const untuk = urlParam.get("untuk")
      ? urlParam.get("untuk").replace("+", "%20")
      : "";

   nama.innerHTML = untuk
      ? untuk
      : "Untuk memasukkan nama tulis ?untuk=nama diakhir url";
})();
class HandleAlert {
   constructor(alertKonten) {
      this.alertKonten = alertKonten;
   }
   alert(pesan = "", warna = "") {
      this.alertKonten.innerHTML = `
                <div class="alert ${warna} muncul">
                    <p>${pesan}</p>
                    <i class="bi bi-x alert-close"></i>
                </div>
            `;
   }
   click(target) {
      if (target.classList.contains("alert-close")) {
         this.alertKonten.firstElementChild.classList.remove("muncul");
      }
   }
}
class HandleForm extends HandleAlert {
   constructor(form) {
      super(form.firstElementChild);
      this.form = form;
      this.nama = this.form.nama;
      this.pesan = this.form.pesan;
      this.kehadiran = document.getElementsByName("kehadiran");
      this.button = this.form.lastElementChild;
   }
   #url =
      "https://script.google.com/macros/s/AKfycbxnJiIVzIaqT_4PqpxYATJnh9yKDENpaNIL-44K6tvyEK1Tt96DHEnmW6yNWW8ydDI/exec";
   submit() {
      if (this.nama.value.length < 3 || this.pesan.value.length < 3) {
         return this.alert("Isi semua form minimal 3 karakter!", "kuning");
      }
      if (!this.kehadiran[0].checked && !this.kehadiran[1].checked) {
         return this.alert("Pilih kehadiran", "kuning");
      }
      if (sessionStorage.getItem("kirim") === "terkirim") {
         return this.alert("Anda sudah mengirimkan pesan!", "merah");
      }
      if (this.form.classList.contains("submit")) return;

      ((_) => {
         this.form.classList.toggle("submit");
         this.button.innerHTML = '<span class="loader-dua"></span>';
      })();

      (async (_) => {
         try {
            await fetch(this.#url, {
               method: "POST",
               body: new FormData(this.form),
            });
            sessionStorage.setItem("kirim", "terkirim");
            this.button.innerHTML = "Kirim";
            this.alert("Terima kasih! pesan anda sudah kami terima", "ijo");
            this.form.reset();
            return;
         } catch (error) {
            this.alert("Error, gagal mengirim pesan!", "merah");
            this.button.innerHTML = "Kirim";
            this.form.classList.remove("ok");
            return;
         }
      })();
   }
}
const handleForm = new HandleForm(document.querySelector(".konfirmasi form"));
/* EVENTS */
// LOAD
window.onload = async (_) => {
   await tunggu(1000);
   animasiOpening();
};
// READYSTATE
document.onreadystatechange = (_) => {
   if (document.readyState !== "complete") {
      return (document.getElementById("loader").innerHTML =
         '<span class="loader"></span>');
   }
   return (document.getElementById("loader").innerHTML = "");
};
// SUBMIT
document.onsubmit = (e) => {
   e.preventDefault();
   handleForm.submit();
};
// CLICK
document.onclick = ({ target }) => {
   // UNDANGAN
   if (
      target === bukaUndangan ||
      target === bukaUndangan.firstElementChild ||
      target === bukaUndangan.lastElementChild
   ) {
      audio.play();
      animasiOpening();
      animasiUndangan();
      return;
   }
   // HOME
   if (
      target === navigasiHome ||
      target === navigasiHome.firstElementChild ||
      target === navigasiHome.lastElementChild
   ) {
      animasiOpening();
      animasiUndangan();
      return;
   }
   // LOKASI
   if (
      target === navigasiLokasi ||
      target === navigasiLokasi.firstElementChild ||
      target === navigasiLokasi.lastElementChild ||
      target.classList.contains("lokasi-close")
   ) {
      animasiUndangan();
      animasiLokasi();
      return;
   }
   // FOTO
   if (
      target === navigasiFoto ||
      target === navigasiFoto.firstElementChild ||
      target === navigasiFoto.lastElementChild ||
      target.classList.contains("foto-close")
   ) {
      animasiUndangan();
      animasiFoto();
      return;
   }
   // NAVIGASI FOTO
   ((_) => {
      if (target.classList.contains("kiri")) return animasiNavigasiFoto(false);
      if (target.classList.contains("kanan")) return animasiNavigasiFoto(true);
   })();
   // KONFIRMASI
   if (
      target === navigasiKonfirmasi ||
      target === navigasiKonfirmasi.firstElementChild ||
      target === navigasiKonfirmasi.lastElementChild ||
      target.classList.contains("konfirmasi-close")
   ) {
      animasiUndangan();
      animasiKonfirmasi();
      return;
   }
   // FORM
   handleForm.click(target);
};
