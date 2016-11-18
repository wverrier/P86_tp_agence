/**
 * Created by gpnissar on 2016-11-14.
 */
var forfait_id;
var forfait;

$(function () {
    console.log('URL de la page : ', window.location);
    // Est-ce qu'il y a un paramètre dans l'URL ?
    forfait_id = getParameterByName('forfait_id');
    console.log('Valeur de la categorie : ', forfait_id);
    if (false) { // Si idforfait n'est pas valide
        // Redirection vers page accueil
    }
    forfait = P86_TP_forfaits[forfait_id]; // L'objet qui représente le forfait
    console.log('Le forfait à afficher est : ', forfait);
    afficher_forfait();
});

/**
 * Sert à la page details  pour afficher les détails du forfait d'indice forfait_id
 */
function afficher_forfait() {
// Utiliser la variable  forfait
    
}
