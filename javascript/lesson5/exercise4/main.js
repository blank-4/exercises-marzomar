var liste = document.createElement("ul");
document.body.appendChild(liste);

function tableau() {
    var tab = ["acceuil", "home", "desk", "back"];
    for (i in tab)
        {
            var newLi = document.createElement("li");
            newLi.innerHTML = tab[i];
            liste.appendChild(newLi);
        }
}

tableau();