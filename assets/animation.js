function infoButton() {
    //title
    document.title = "Info | sleekz.github.io"
    //page
    document.getElementById("p1").classList.remove("hidden");
    document.getElementById("p2").classList.add("hidden");
    document.getElementById("p3").classList.add("hidden");
    //buttons
    document.getElementById("info").classList.add("sel");
    document.getElementById("css").classList.remove("sel");
    document.getElementById("js").classList.remove("sel");
}

function cssButton() {
    //title
    document.title = "Themes | sleekz.github.io"
    //page
    document.getElementById("p1").classList.add("hidden");
    document.getElementById("p2").classList.remove("hidden");
    document.getElementById("p3").classList.add("hidden");
    //buttons
    document.getElementById("info").classList.remove("sel");
    document.getElementById("css").classList.add("sel");
    document.getElementById("js").classList.remove("sel");
}

function jsButton() {
    //title
    document.title = "Plugins | sleekz.github.io"
    //page
    document.getElementById("p1").classList.add("hidden");
    document.getElementById("p2").classList.add("hidden");
    document.getElementById("p3").classList.remove("hidden");
    //buttons
    document.getElementById("info").classList.remove("sel");
    document.getElementById("css").classList.remove("sel");
    document.getElementById("js").classList.add("sel");
}