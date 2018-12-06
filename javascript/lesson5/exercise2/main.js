/* * Créez une html dont le body sera vide .

* Dans votre script créez une fonction qui, elle contiendra le code pour les consignes suivantes :

* Créer une div .

* Attribuez lui une taille et une background-color avec JS.

* Lorsque l'on passe la souris sur la div elle devra changer de couleur de fond .
 */


function addElement () { 
    var newDiv = document.createElement("div"); 
    document.body.appendChild(newDiv);
    newDiv.style.backgroundColor= "red";
    newDiv.style.height= "40px";
    newDiv.style.width= "60px";
    newDiv.onmouseover = function () {
        newDiv.style.backgroundColor = "blue"; 
    }
}

addElement();

