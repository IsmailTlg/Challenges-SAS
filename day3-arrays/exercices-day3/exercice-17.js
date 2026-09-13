/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tableau = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];
let nouveau = [];
for(let i = 0; i<tableau.length; i++){
    if(!nouveau.includes(tableau[i])){
        nouveau.push(tableau[i]);
    }
}
console.log(nouveau)
let  counter = 0;
for(let i = 0; i< nouveau.length; i++){
    for(let j = 0; j <= tableau.length; j++){
        if(nouveau[i] == tableau[j]){
            counter++
        }
    }
    console.log(`l'element ${nouveau[i]} a ${counter} occurences`);
    counter = 0;
}