function infoButton() {
    //moves the page
    document.getElementById("page").classList.remove("two");
    document.getElementById("page").classList.remove("three");
    //changes buttons
    document.getElementById("info").classList.add("sel");
    document.getElementById("css").classList.remove("sel");
    document.getElementById("js").classList.remove("sel");
}

function cssButton() {
    //moves the page
    document.getElementById("page").classList.add("two");
    document.getElementById("page").classList.remove("three");
    //changes buttons
    document.getElementById("info").classList.remove("sel");
    document.getElementById("css").classList.add("sel");
    document.getElementById("js").classList.remove("sel");
}

function jsButton() {
    //moves the page
    document.getElementById("page").classList.add("three");
    document.getElementById("page").classList.remove("two");
    //changes buttons
    document.getElementById("info").classList.remove("sel");
    document.getElementById("css").classList.remove("sel");
    document.getElementById("js").classList.add("sel");
}