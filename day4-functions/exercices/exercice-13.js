/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function genererMotDePasse(longueur){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('');
    let password = [];
    let X = Math.floor(longueur/4);
    let randomNumber = Math.floor(Math.random()*10);
    for(let i = 0; i<longueur; i++){
        randomNumber = Math.floor(Math.random()*10);
        password.push(alphabet[randomNumber]);
    }
    for(let i = 0; i<X; i++){
        randomNumber = Math.floor(Math.random()*10);
        password[randomNumber] = "A";
    }
    password = password.join("");
    console.log(password);
}
genererMotDePasse(10);