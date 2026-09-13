/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE MOTS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comptez le nombre de mots dans une longue chaîne. *Attention aux espaces multiples !* (Un mot est généralement séparé par un espace).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day04/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let longChaine = "hello, my name is     Ismail and i like to code so far these exercices have been fun, hard sometmies     especially the last ones in the serie but i feel like im learning a lot so far this is a great experience!"
let words = longChaine.split(" ");
let compteur = 0;
for(let i = 0; i<words.length; i++){
    if(words[i] != ""){
        compteur++;
    }
}
console.log(`this sentence has ${compteur} words`);