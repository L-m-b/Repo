// credit to qwerasd for the scripts,
// that i made some small modifications to

window.addEventListener('load', hashFunction);
window.addEventListener('hashchange', hashFunction);

function hashFunction() {
    showPage(window.location.hash);
}

function showPage(hash) {
    if (hash) {
        document.title = hash.slice(1) + " | sleekz.github.io";
        const page = document.getElementById(hash.slice(1));
        const openPage = document.getElementById('active-page');
        if (page) {
            const clone = document.createElement('section');
            clone.appendChild(document.importNode(page.content, true));
            clone.id = 'active-page';

            document.body.appendChild(clone);

        }
        if (openPage) {
            openPage.remove();
        }
        window.scrollTo(0, 0);
    }
    else {
        document.title = "Information | sleekz.github.io";
    }
}

showPage(window.location.hash);
