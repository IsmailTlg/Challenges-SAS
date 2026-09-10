/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let panier = [101, 105, 101, 102];
function ajouterAuPanier(id, tableau){
    tableau.push(id);
}
function retirerDuPanier(id, tableau){
    const sansOcc = [];
    for(let i = 0; i<tableau.length; i++){
        if(!sansOcc.includes(id)){
            sansOcc.push(tableau[i])
        }
        else if(tableau[i] != id){
            sansOcc.push(tableau[i]);
        }
    }
    return sansOcc;
}
function afficherQuantites(tableau){
    let clean = [];
    for(let i = 0; i<tableau.length; i++){
        if(!clean.includes(tableau[i])){
            clean.push(tableau[i])
        }
    }
    let counteur = 0;
    for(let i = 0; i<clean.length; i++){
        for(let j = 0; j<tableau.length; j++){
            if(clean[i] == tableau[j]){
                counteur++;
            }
        }
        console.log(`Article: ${clean[i]}: ${counteur} exemplaires`);
        counteur = 0;
    }
}
ajouterAuPanier(103, panier);
panier = retirerDuPanier(101, panier);
console.log(panier)
ajouterAuPanier(107, panier)
ajouterAuPanier(107, panier)
ajouterAuPanier(107, panier)
ajouterAuPanier(105, panier)
ajouterAuPanier(105, panier)
afficherQuantites(panier);