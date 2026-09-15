/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
// TODO: écris ta solution ici.
let condidats = [
    {nom: "Oussama", score:10},
    {nom: "Youness", score:12},
    {nom: "Ismail", score:15},
    {nom: "Aissa", score:14},
    {nom: "Akram", score:18},
    {nom: "monir", score:8},
    {nom: "sa3id", score:7.5},
    {nom: "khalid", score:2},
]
function condidatValidee(table){
    let validee = [];
    for(let i = 0; i<table.length; i++){
        if(table[i].score >= 10){
            validee.push(table[i]);
        }
    }
    return validee;
}
console.log(condidatValidee(condidats))