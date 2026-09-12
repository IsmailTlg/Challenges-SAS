/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function longCalcul(){
    let cache = [];
    let result = 0;
    let k = 0;
    let i = 0;
    return function(a){
        let isExist = false;
        for(i = 0; i < cache.length; i++){
            if(cache[i][0] == a){
                isExist = true;
                break;
            }
        }
        if(isExist){
            return `${cache[i][1]}, old`;
        }
        else{
            let result = a*20;
            result += a + 30;
            result += a  / 2;
            result += a ** 2;
            result += a - a/2;
            cache.push([a, result]);
            return `${result}, new` 
        }
    }
}
let calcul = longCalcul();
console.log(calcul(9));   
console.log(calcul(9));   
console.log(calcul(8));   
console.log(calcul(8));   
console.log(calcul(8));   
console.log(calcul(1));   
