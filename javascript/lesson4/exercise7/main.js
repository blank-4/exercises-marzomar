function NbJoursMois(mois, annee) {
    var lgMois = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((annee%4 == 0 && annee%100 != 0) || annee%400 == 0) 
    {lgMois[2] += 1;
    }
    return lgMois[mois]; 
    }

    console.log(NbJoursMois(2, 2008));
    