/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function sontIdentiques(obj1, obj2){
    let obj2Entries = Object.entries(obj2)
    let obj1Entries = Object.entries(obj1)
    let isSimilar = true;
    if(obj1Entries.length != obj2Entries.length){
        return false
    }
    
    else{
        
        for(let i = 0; i< obj1Entries.length; i++){
            for(let j = 0; j<2; j++){
                if(obj1Entries[i][j] == obj2Entries[i][j]){
                    continue;
                }
                else{
                    isSimilar = false;
                }
            }
        }
    }
    return isSimilar;
}
let student1 = {
    name: "Yassine",
    age: 20,
    score: 15
};

let student2 = {
    name: "Yassine",
    age: 20,
    score: 15
};
console.log(sontIdentiques(student1, student2));