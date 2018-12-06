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
    var random = color [Math.floor(Math.random()*4)];
    document.getElementById("texte").style.color = random;
    console.log(random);
}