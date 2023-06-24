(_ => {
    /* ELEMENTS */
    const opening = document.querySelector('.opening'),
    img = document.querySelector('.opening img'),
    p = document.querySelectorAll('.opening p'),
    pria = document.querySelector('.opening .ryevo'),
    dan = document.querySelector('.opening .dan'),
    wanita = document.querySelector('.opening .nadia'),
    h1 = [pria, dan, wanita],
    bukaUndangan = document.querySelector('.opening .buka-undangan'),
    foto = document.querySelector('.foto img'),
    bulet = document.querySelectorAll('.foto .bulet'),
    navigasiHome = document.querySelector('.navigasi-home'),
    navigasiLokasi = document.querySelector('.navigasi-lokasi'),
    navigasiFoto = document.querySelector('.navigasi-foto'),
    navigasiKonfirmasi = document.querySelector('.navigasi-konfirmasi'),
    audio = document.getElementById('audio');
    
    /* TOGGLE CLASS */
    const toggleClass = (element, className = '') => element.classList.toggle(className);
    
    /* TUNGGU */
    const tunggu = milidetik => {
        return new Promise(resolve => {
            setTimeout(_ => {
                resolve();
            }, milidetik);
        });
    }

    /* URL PARAMETER */
    const urlParam = new URLSearchParams(window.location.search);
    
    /* ANIMASI */
    // OPENING
    const animasiOpening = _ => {
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
    
    // UNDANGAN
    const animasiUndangan = _ => {
        const undangan = document.querySelector('.undangan');
        toggleClass(undangan, 'return');
    }
    
    // LOKASI
    const animasiLokasi = _ => {
        const lokasi = document.querySelector('.lokasi');
        toggleClass(lokasi, 'return');
    }
    
    // FOTO
    const animasiFoto = _ => {
        const foto = document.querySelector('.foto');
        toggleClass(foto, 'return');
    }
    // NAVIGASI FOTO
    let i = 0;
    
    const animasiNavigasiFoto = async (tambah = false) => {
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
    
    // KONFIRMASI
    const animasiKonfirmasi = _ => {
        const konfirmasi = document.querySelector('.konfirmasi');
        toggleClass(konfirmasi, 'return');
    }

    /* UNTUK */
    const nama = document.querySelector('.nama');
    const untuk = urlParam.get('untuk') ? urlParam.get('untuk').replace('+', '%20') : '';

    nama.innerHTML = untuk ? untuk : 'Untuk memasukkan nama tulis ?untuk=nama diakhir url';
    
    /* EVENTS */
    // LOAD
    window.onload = async _ => {
        await tunggu(1000);
        animasiOpening();
    }
    // READYSTATE
    document.onreadystatechange = _ => {
        if (document.readyState !== 'complete') {
            return document.getElementById('loader').innerHTML = '<span class="loader"></span>';
        }
        return document.getElementById('loader').innerHTML = '';
    }
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
        ) 
        {
            animasiOpening();
            animasiUndangan();
            return;
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
            return;
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
            return;
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
            return;
        }
    }
})();