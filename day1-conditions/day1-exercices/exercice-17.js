/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let joueur1 = "Pierre";
let joueur2 = "Ciseaux";
/////les cases ou jouer 1 gange
if(joueur1 == "Pierre" && joueur2 == "Ciseaux"){
    console.log("joueur 1 gagne !")
}
else if(joueur2 == "Papier" && joueur1 == "Ciseaux"){
    console.log("joueur 1 gagne !")
}
else if(joueur1 == "Papier" && joueur2 == "Pierre"){
    console.log("joueur 1 gagne !")
}
//////les cases ou jouer 2 gange
else if(joueur2 == "Pierre" && joueur1 == "Ciseaux"){
    console.log("joueur 2 gagne !")
}
else if(joueur1 == "Papier" && joueur2 == "Ciseaux"){
    console.log("joueur 2 gagne !")
}
else if(joueur2 == "Papier" && joueur1 == "Pierre"){
    console.log("joueur 2 gagne !")
}
//////////////cas d'egality
else if(joueur1 == joueur2){
    console.log("Egality")   
}
///cas d'error
else{
    console.log("error dans le choix (Papier, Pierre, Ciseaux)")
}