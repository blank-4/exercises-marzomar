/* * Créer une fonction qui porte le nom `exercice5`, elle contiendra le code pour les consignes suivantes :

* Créer une variable `maString` contenant une chaîne de caractères de votre choix.
* Utiliser une méthode permettant d'afficher uniquement la moitié de la chaîne de caractères dans la console.

* Utiliser une méthode permettant d'afficher cette moitié de string en inversant l'ordre des mots dans la console.
*/


function exerice5() {
    var maString = "Coucou relou les mots";
    console.log(maString.substr(maString.length/2));
    var strReverse = maString.substr(maString.length/2).split(' ').reverse().join(' ');
    console.log(strReverse);
        
}
exerice5();