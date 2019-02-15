// credit to qwerasd for the scripts,
// that i made some small modifications to

window.addEventListener('hashchange', hashFunction);

function hashFunction() {
    showPage(window.location.hash);
    document.title = window.location.hash.slice(1) || "Information";
}

function showPage(hash) {
    if (hash) {
        const page = document.getElementById(hash.slice(1));
        const openPage = document.getElementById('active-page');
        if (page) {
            const clone = document.createElement('section');
            clone.appendChild(document.importNode(page.content, true));
            clone.id = 'active-page';

            startCarousels(clone);

            document.body.appendChild(clone);

            const elems = Array.from(clone.querySelectorAll('[data-src]'));
            
            if (elems.length) {
                document.body.classList.add('load');
                loadSrces(elems, _ => setTimeout(_ => document.body.classList.remove('load'), 100));
            }
        }
        if (openPage) {
            openPage.remove();
        }
        window.scrollTo(0, 0);
    }
}

showPage(window.location.hash);

function startCarousels (page) {
    Array.from(page.querySelectorAll('.carousel')).forEach(carousel => {

        const controls = carousel.getElementsByClassName('control');

        controls[0].addEventListener('click', _ => {
            carouselBack(carousel);
        });

        controls[1].addEventListener('click', _ => {
            carouselFwds(carousel);
        });

        carousel.firstElementChild.classList.add('current');
        const video = carousel.firstElementChild.getElementsByTagName('video')[0];
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    });

    Array.from(document.getElementsByClassName('carousel')).forEach(carousel => {
        const controls = carousel.getElementsByClassName('control');
    });
}

function stopCarousels (page) {
    Array.from(page.querySelectorAll('.carousel')).forEach(carousel => {
        const current = carousel.getElementsByClassName('current')[0];
        const video = current.getElementsByTagName('video')[0];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
}


function carouselBack(carousel) {
    carousel.classList.add('reverse');
    let current = carousel.getElementsByClassName('current')[0];
    const old = current;
    while (current.previousElementSibling) {
        current = current.previousElementSibling;
        if (current.classList && current.classList.contains('item')) {
            old.classList.remove('current');
            const video = old.getElementsByTagName('video')[0];
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            current.classList.add('current');
            const newVideo = current.getElementsByTagName('video')[0];
            if (newVideo) newVideo.play();
            return;
        }
    }
}

function carouselFwds(carousel) {
    let current = carousel.getElementsByClassName('current')[0];
    const old = current;
    while (current.nextElementSibling) {
        current = current.nextElementSibling;
        if (current.classList && current.classList.contains('item')) {
            old.classList.remove('current');
            const video = old.getElementsByTagName('video')[0];
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            current.classList.add('current');
            const newVideo = current.getElementsByTagName('video')[0];
            if (newVideo) newVideo.play();
            return;
        }
    }
}



const loadedSrces = [];

function loadSrces(elems, cb) {
    if (!elems.length) return cb();
    const elem = elems.shift();
    const src = elem.getAttribute('data-src');
    if (elem.tagName === 'img' && !loadedSrces.includes(src)) {
        const dl = new Image();
        dl.onload = dl.onerror = _ => {
            elem.src = src;
            elem.removeAttribute('data-src');
            loadedSrces.push(src);
            loadSrces(elems, cb);
        }
        dl.src = src;
    } else {
        elem.src = src;
        elem.removeAttribute('data-src');
        elem.onload = elem.onerror = _ => {
            loadSrces(elems, cb);
        }
    }
}


function init() {
    document.body.classList.remove('init');
}


function waitForDocumentComplete () {
    document.readyState === 'complete' ? init() : setTimeout(waitForDocumentComplete, 50);
}

waitForDocumentComplete();
