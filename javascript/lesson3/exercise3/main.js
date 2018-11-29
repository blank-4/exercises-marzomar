/* Essayons de mettre une fonction dans une variable.

* On va commencer par déclarer trois variables :
"Etage", "porte" , et "monAppartement".

* Donnez la valeur de votre choix a "étage"
idem pour "porte" (porte de gauche, porte de droite, ect ...")
et la variable "monAppartement" aura pour valeur une fonction anonyme.

* Dans cette fonction on va mettre une variable "boiteAuLettres",
et un console.log pour afficher :
"Etage : (la var étage) , porte : (la var porte)", boite au lettre : (vous avez compris le principe) ".

* Maintenant on va appeler la fonction `monAppartement`.
 */

 var etage = 3
 var porte = "porte de droite"
 var monappartement = function() {
     var boiteAuLettres = 34;
     console.log("etage :"+" "+etage+" "+"porte :"+porte+"boite au lettre :"+boiteAuLettres)
 }

 monappartement();