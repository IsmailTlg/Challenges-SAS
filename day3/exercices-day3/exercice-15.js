/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const tab1 = [1, 3, 5];
const tab2 = [2, 4, 6];
const tab3 = [];
let originlen = tab1.length;
for(let i = 0; i <= tab2.length + tab1.length - 1; i++){
    if(i<tab1.length){
        tab3.push(tab1[i]);
    }
    else{
        tab3.push(tab2[i-tab1.length]);
    }
}
let temp = tab3[0]
for(let i = 0; i<tab3.length; i++){
    for(let j = i; j<tab3.length; j++){
        if(tab3[j] < tab3[i]){
            temp = tab3[i];
            tab3[i] = tab3[j];
            tab3[j] = temp;
        }
    }
}
console.log(tab3)
