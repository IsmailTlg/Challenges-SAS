/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let longChaine = "hello, my name is     Ismail and i like to code so far these exercices have been fun, hard sometmies     especially the last ones in the serie but i feel like im learning a lot so far this is a great experience!"
let counter = 0;
for(let i = 0; i < longChaine.length; i++){
    if(longChaine[i] == "e" || longChaine[i] == "E"){
        counter++;
    }
}
console.log(`the lettre e has appaired ${counter} times`)