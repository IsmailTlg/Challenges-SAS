/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let information = {
    nom : "ahmed",
    age : 33,
    adresse : {
        ville : "Agadir",
        Rue : "Rue 13",
        Maison : "23"
    }
}
let copie = {...information};
copie.adresse.Maison++;
console.log(copie.adresse.Maison); //24
console.log(information.adresse.Maison) //24, les deux donnes 24 meme que on augment seulement la copie, a cause de objets imbriquees
                                        //cette probleme apparait car spread copie seulement 1er objets mais deep objects sont des references
let copie2 = structuredClone(information); //ici la solution par "structuredClone" qui fait deep cloning pour tous les objets imbriquees.
copie2.adresse.Maison++;
console.log(copie2.adresse.Maison) //25
console.log(information.adresse.Maison) //24
