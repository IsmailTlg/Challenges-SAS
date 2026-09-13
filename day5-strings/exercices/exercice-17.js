/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function chiffrerCesar(texte, decalage){
    let letters = "abcdefghijklmnopkrstuvwxyz";
    let index = 0;
    for(let i = 0; i<letters.length; i++){
        if(letters[i] == texte[0]){
            index = i;
        }
    }
    let fin = index + decalage + texte.length;
    let start = index + decalage;
    let counter = 0;
    for(let i = start; i < fin; i++ ){
        if(i>=26){    //cas si on depasse z;
            i = decalage-texte.length;
            fin = texte.length - counter + i;
        }
        console.log(letters[i]);
        counter++;
    }
}
chiffrerCesar("abc", 1)