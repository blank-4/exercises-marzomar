/* Créer une fonction qui prendra deux nombres en paramètres.
Cette fonction doit retourner le plus grand. */

function sup (nb1, nb2) {
    if(nb1 > nb2) {
        return nb1;
    }
    else {
        return nb2;
    }
}

console.log(sup(40, 76));