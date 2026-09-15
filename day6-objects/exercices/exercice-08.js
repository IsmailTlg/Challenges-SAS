/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let condidats = [
    {nom: "Oussama", score:10},
    {nom: "Youness", score:12},
    {nom: "Ismail", score:15},
    {nom: "Aissa", score:14},
    {nom: "Akram", score:18}
]
function meilleurScore(table){
    let meilleur = table[0].score;
    let nom;
    for(let i = 0; i<table.length; i++){
        if(table[i].score > meilleur){
            meilleur = table[i].score
            nom = table[i].nom
        }   
    }
    return `la meilleur note est ${meilleur} de ${nom}`;
}
console.log(meilleurScore(condidats))