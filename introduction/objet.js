var maVoiture = {
    "marque de":"Peugeot",
    cylindre:4,
    'vitesse':300,
    "annee":2010,
     action: function() {
        return "je roule au max à "+this.vitesse;
     },
     carburant: {
         libelle:'diesel',
         'ph':2
     }
};
//JSON : JavaScript Object Notation 

//console.log(maVoiture)
console.log(maVoiture.action());
console.log(maVoiture["marque de"]);
console.log(maVoiture.annee);
console.log(maVoiture.cylindre);
console.log(maVoiture['vitesse']);

console.log("je suis le phenix \n cool")