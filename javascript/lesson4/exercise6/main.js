/* ### CHIFFREMENT DE CÉSAR

* Avant tout, aller regarder ce qu'est le chiffre de César, ou chiffrement par décallage : [https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)

* Créer une fonction `chiffrer`. Elle prendra deux paramètres,  le premier est une String qui sera la phrase à encoder. Le second est le décalage pour le code de César :
  * Cette fonction doit encoder le message et retourner le message encodé.
  * Pour vous aider: voici l'alphabet sous forme de tableau :
  ```js
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ```
* Créer une fonction `dechiffrer` qui prendra les deux mêmes paramètres que la fonction chiffrer.
  * Cette fonction doit déchiffrer le message passé en paramètre avec la clé, elle aussi passée en paramètre.
  * 
  
* Bonus : le programme doit laisser tel quel les charactères non présents dans l'alphabet. */

/* var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

console.log(caesarShift("abcd", 2)); // Method 1 */

function chiffrer(str, key) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    str = str.toLowerCase();
    var res = "";
    for (var i = 0; i < str.length; i++) {
        // récupérer l'index de la lettre
        var l = str[i];
        console.log("pour la lettre " + l);
        var index = alphabet.indexOf(l);
        console.log("l'index initial est : " + index);
        // décaler l'index de "key" pour avoir une nouvelle lettre
        index = index + key;
        console.log("l'index décalé est : " + index);
        // trouver la lettre qui est située au nouvel index
        var nouvelleLettre = alphabet[index]; 
        console.log("la nouvelle lettre est : " + nouvelleLettre);
        // ajout de la nouvelle lettre à la fin du résultat
        res = res + nouvelleLettre;
    }
    return res;
    
    
}

console.log(chiffrer("BI%N",5));

