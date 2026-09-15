/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let tableau = [];
function ajouterUtilisateur(nom, email){
    let randomDigit;
    let id_utilsateur = "";
    for(let i = 0; i<10; i++){
        randomDigit = Math.floor(Math.random()*10);
        id_utilsateur += randomDigit
    }
    let utilisateur = {
        id : id_utilsateur,
        nom : nom,
        email: email
    }
    tableau.push(utilisateur);
}
function trouverParEmail(email){
    for(let i = 0; i<tableau.length; i++){
        if(tableau[i].email == email){
            return tableau[i];
        }
    }
    return `not found!`
}
function supprimerParId(id){
    for(let i = 0 ; i<tableau.length; i++){
        if(tableau[i].id == id){
            tableau.splice(i, 1);
            break;
        }
    }
}
function afficherAnnuaire(tableau){
    let keys = Object.keys(tableau);
    let values = Object.values(tableau);
    for(let i = 0; i<tableau.length; i++){
        console.log(`====================Utilisateur ${i+1}====================`);
        console.log(`\t\t\t\tid : ${tableau[i].id}\n\t\t\t\tnom: ${tableau[i].nom}\n\t\t\t\temail: ${tableau[i].email}`)
    }
}
ajouterUtilisateur("ahmed", "ahmed@gmail.com");
ajouterUtilisateur("mouad", "mouad@Yuhoo.com");
ajouterUtilisateur("Mohamed", "ahmed@YouCode.ma");
ajouterUtilisateur("khalid", "khalid@gmail.com");
ajouterUtilisateur("salim", "salim@gmail.com");
supprimerParId(tableau[3].id)
console.log(trouverParEmail("salim@gmail.com"))
afficherAnnuaire(tableau)