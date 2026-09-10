/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * APLATIE (FLATTEN)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau à 2 dimensions (une grille) : [[1, 2], [3, 4], [5, 6]]. Transformez-le en un tableau à 1 dimension : [1, 2, 3, 4, 5, 6].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const tab2D = [[1, 2], [3, 4], [5, 6]];
const tab1D = []
let k = 0;
for(let i = 0; i<tab2D.length; i++){
    for(let j = 0; j<2; j++){
        tab1D[k] = tab2D[i][j];
        k++;
    }
}
console.log(tab2D)
console.log(tab1D)