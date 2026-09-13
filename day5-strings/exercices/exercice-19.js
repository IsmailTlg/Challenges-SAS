/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VALIDATEUR DE PLAQUE D'IMMATRICULATION (REGEX BASIQUE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Simulez la vérification d'une plaque d'immatriculation marocaine. Le format attendu est "1234-A-56" ou "12345-AB-6". Pour simplifier, vérifiez qu'elle contient deux tirets et qu'une des sections au milieu est une lettre. L'utilisation d'expressions régulières (Regex) est recommandée ici !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day04/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let forme = /^\d{4,5}-[A-Z]{1,2}-\d{1,2}$/
let plaque = "12235-A-36";
if(forme.test(plaque)){
    console.log("la matricul est verifie !")
}
else{
    console.log("la matricule est pas verifie")
}