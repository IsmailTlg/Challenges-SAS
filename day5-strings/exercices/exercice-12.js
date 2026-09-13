/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * INVERSION DE MOTS DANS UNE PHRASE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez la phrase "Bonjour le monde" et transformez-la en "monde le Bonjour".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day04/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let phrase = "Bonjour le monde";
phrase = phrase.split(" ");
let temp;
let k = phrase.length-1;
for(let i = 0; i<phrase.length/2; i++){
    temp = phrase[i];
    phrase[i] = phrase[k];
    phrase[k] = temp;
    k--;
}
phrase = phrase.join(" ");
console.log(phrase)