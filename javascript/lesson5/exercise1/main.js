var texte = document.getElementById("texte");

texte.innerHTML = "Lorem";

function afficher() {
    texte.style.display = "block";
}

function cache() {
    texte.style.display = "none";
}

function couleur () { 
    var color = ["blue", "red", "yellow", "green"];
    document.getElementById("texte").style.color = color [Math.floor(Math.random()*4)]
}
