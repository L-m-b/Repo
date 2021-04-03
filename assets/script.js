window.addEventListener('load', pageFunction);
window.addEventListener('hashchange', pageFunction);

function pageFunction() {
    const openPage = document.getElementById('active-page');
    if (openPage) {
        openPage.remove();
    };
    if (window.location.hash) {
        showPage(window.location.hash);
    }
    else {
        window.location.hash = "Info"
    }
}

function showPage(hash) {
    document.title = hash.slice(1) + " | LMB";
    const page = document.getElementById(hash.slice(1));
    if (page) {
        const clone = document.createElement('section');
        clone.appendChild(document.importNode(page.content, true));
        clone.id = 'active-page';

        document.body.appendChild(clone);
    }
    window.scrollTo(0, 0);
};


