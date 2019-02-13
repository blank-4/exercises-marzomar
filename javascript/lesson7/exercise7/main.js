/* * Créer un input de type texte ainsi qu'un input de type number
* Associer ces deux éléments à des données Vue
* Lorsque l'une des deux valeurs change chiffrez la chaine de caractère rentrée par l'utilisateur avec le chiffrement de César. La clé de chiffrement est dans l'input de type number.
* Afficher le résultat du chiffrement dans un 2e champ texte
* BONUS : Lorsque le 2e champ texte est modifié, faites en sorte de décoder la chaine de caractère et que le premier input de type texte se mette à jour
 */


new Vue ({
    el: '#app',
    data: () => {
        return {
            monTexte : "",
            monNumber : 0,
            monTexteDechiffrer: "",
            res: ""
        }
    },
    watch: {
        monTexte: function (Tvalue) {
            this.monTexteDechiffrer = this.monChiffreDeCesar(Tvalue, this.monNumber);
        },
        monNumber: function (Nvalue) {
            this.monTexteDechiffrer = this.monChiffreDeCesar(this.monTexte, Nvalue);
        }
    },
    methods: {
        monChiffreDeCesar: function(monTexte, monNumber) {
            var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            monTexte = monTexte.toLowerCase();
            var res = "";
            for (var i = 0; i < monTexte.length; i++) {
                var l = monTexte[i];
                console.log("pour la lettre " + l);
                var index = alphabet.indexOf(l);
                index = index + monNumber;
                var nouvelleLettre = alphabet[index]; 
                res = res + nouvelleLettre;
            }
            console.log(res)
            return res;
        }
    }

    /* methods: {
        monChiffreDeCesar(monTexte, monNumber) {
            // déclare une variable alphabet qui est un tableau contenant les lettres de l'alphabet
            var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            // déclare une variable res, qui est une string vide
            var res = "";
        // On passe le paramètre str (qui est une string) en minuscules
        monTexte = monTexte.toLowerCase();
        
        // On fait une boucle for pour itérer sur lettres du paramètre str
        for (var i = 0; i < monTexte.length; i++) {
            // récupérer de la lettre à l'index i
            var l = monTexte[i];
            // récupérer l'index de la lettre dans l'alphabet
            var index = alphabet.indexOf(l);
            // si index est supérieur à -1, ma lettre va pouvoir être chiffrée parce qu'elle est contenue dans l'alphabet
            if (index > -1) {
                // décaler l'index de "key" pour avoir une nouvelle lettre
                index = index + (key % alphabet.length) + alphabet.length;
                // trouver la lettre qui est située au nouvel index
                var nouvelleLettre = alphabet[index % alphabet.length];
                // ajout de la nouvelle lettre à la fin du résultat
                res = res + nouvelleLettre;
                // ma lettre ne doit pas être chiffrée
            } else {
                // je rajoute ma lettre non chiffrée
                res = res + l;
            }
        }
        return res;
        
        }
        
    } */
/*     monTexteDechiffrer: function (monTexte, monNumber) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        monTexte = monTexte.toLowerCase();
        var res = "";
        for (var i = 0; i < monTexte.length; i++) {
            var l = monTexte[i];
            console.log("pour la lettre " + l);
            var index = alphabet.indexOf(l);
            index = index + monNumber;
            var nouvelleLettre = alphabet[index]; 
            res = res + nouvelleLettre;
        }
        return res;
        
    }
    } */
   /*  monTexteDechiffrer: function (monTexte, monNumber) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        monTexte = monTexte.toLowerCase();
        this.monTexteDechiffrer = "";
        for (var i = 0; i < monTexte.length; i++) {
            var l = monTexte[i];
            console.log("pour la lettre " + l);
            var index = alphabet.indexOf(l);
            index = index + monNumber;
            var nouvelleLettre = alphabet[index]; 
            this.monTexteDechiffrer = this.monTexteDechiffrer + nouvelleLettre;
        }
        return this.monTexteDechiffrer;
        
    } */
/*     monChiffreDeCesar: function (Tvalue, Nvalue) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        Tvalue = Tvalue.toLowerCase();
        this.monTexteDechiffrer = "";
        for (var i = 0; i < Tvalue.length; i++) {
            var l = Tvalue[i];
            console.log("pour la lettre " + l);
            var index = alphabet.indexOf(l);
            index = index + Nvalue;
            var nouvelleLettre = alphabet[index]; 
            this.monTexteDechiffrer = this.monTexteDechiffrer + nouvelleLettre;
        }
        console.log(this.monTexteDechiffrer)
        return this.monTexteDechiffrer;
        
    } */

});