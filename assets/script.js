// credit to qwerasd for the scripts, that i've been making modifications to

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
    clearModals()
}

function showPage(hash) {
    document.title = hash.slice(1) + " | l-m-b";
    const page = document.getElementById(hash.slice(1));
    if (page) {
        const clone = document.createElement('section');
        clone.appendChild(document.importNode(page.content, true));
        clone.id = 'active-page';

        document.body.appendChild(clone);
    }
    window.scrollTo(0, 0);
};

function modalFunction(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
        const showModal = document.createElement('section');
        const innerModal = document.createElement('div');
        showModal.appendChild(innerModal);
        innerModal.appendChild(document.importNode(modal.content, true))
        showModal.id = 'active-modal';
        innerModal.className = 'modal-content'

        document.body.appendChild(showModal);
    }
}

function clearModals() {
    const openModal = document.getElementById('active-modal')
    if (openModal) {
        openModal.remove();
    }
}
