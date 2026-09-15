/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * REGROUPEMENT (GROUP BY)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}]. Créez une fonction qui retourne un objet regroupant ces données : { 1: [{nom: "A"}, {nom: "C"}], 2: [{nom: "B"}] }.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day06/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tableau = [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}];
function regrouper(tableau){
    let groups = {};
    let key;
    for(let i = 0; i<tableau.length; i++){
        if(!groups[tableau[i].groupe]){
            key = tableau[i].groupe
            groups[key] = [];
            groups[key].push({nom: tableau[i].nom});
        }
        else{
            key = tableau[i].groupe
            groups[key].push({nom: tableau[i].nom})
        }
    }
    console.log(groups)
}
regrouper(tableau);