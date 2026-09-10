/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const tableau = [0, 10, 20, 30,31, 32, 33, 34, 35, 36, 40, 45, 50, 60];
let cherche = 45;
let start = tableau[0];
let end = tableau[tableau.length-1];
let middle;
let counter = tableau.length;
while(cherche != tableau[middle] ){
    middle = Math.floor((start+end)/2);
    if(cherche > tableau[middle]){
        start = middle;
        middle = Math.floor((start+end)/2);
    }
    else{
        end = middle;
        middle = Math.floor((start+end)/2);
    }
    counter--;
    if(counter == 0){
        break;
    }
}
if(counter == 0){
    console.log("valeur pas trouve !")
}
else{
    console.log(`l'indexe de la valeur ${cherche} est : ${middle}`)
}