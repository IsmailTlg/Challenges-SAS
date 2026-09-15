/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez une chaîne de caractères "abracadabra". Créez une fonction qui retourne un objet comptant le nombre d'occurrences de chaque lettre. (ex: { a: 5, b: 2, r: 2, c: 1, d: 1 }).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day06/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let chaine = "abracadabra";
function compteurOccurrences(text){
    let occurrences = {}
    let key;
    for(let i = 0; i<text.length; i++){
        if(text[i] in occurrences){
            key = text[i];
            occurrences[key]++;
        }
        else{
            key = text[i];
            occurrences[key] = 1;
        }
    }
    return occurrences;
}
console.log(compteurOccurrences(chaine))