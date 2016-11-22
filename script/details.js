/**
 * Created by gpnissar on 2016-11-14.
 */
var forfait_id;
var forfait;

$(function () {
    console.log('URL de la page : ', window.location);
    // Est-ce qu'il y a un paramètre dans l'URL ?
    forfait_id = getParameterByName('forfait_id');
    console.log('Valeur indice forfait : ',forfait_id);
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
    $('.forfait.nom').html(forfait.nom);
    $('.forfait.description').html(forfait.description);
    $('.forfait.duree').html(forfait.duree);
    $('.forfait.debut_saison').html(forfait.debut_saison);
    $('.forfait.fin_saison').html(forfait.fin_saison);
    $('.forfait.mois_basse_saison').html(forfait.mois_basse_saison);
    $('.forfait.prix_basse_saison').html(forfait.prix_basse_saison);
    $('.forfait.haute_saison').html(forfait.mois_haute_saison);
    $('.forfait.prix_haute_saison').html(forfait.prix_haute_saison);
    $('.forfait.places_dispo').html(forfait.places_dispo);
    $('.forfait.nbr_max_animaux_admis').html(forfait.nbr_max_animaux_admis);
    $('.forfait.prix_animal').html(forfait.prix_animal);
    $('.forfait_id').html(forfait_id);

/*
        .append('<h2>' +  + '</h2>')
        .append('<img src="images/nature.jpg" alt="petite_photo"/>')
        .append('<p><strong>Description : </strong>' + forfait.description + '</p>')
        .append('<p><strong>Durée :</strong>' + forfait.duree + '</p>')
        .append('<p><strong>Début de saison :</strong>' + forfait.debut_saison + '</p>')
        .append('<p><strong>Fin de saison :</strong>' + forfait.fin_saison + '</p>')
        .append('<p><strong>Basse saison :</strong>' + forfait.mois_basse_saison + '</p>')
        .append('<p><strong>Prix Basse saison :</strong>' + forfait.prix_basse_saison + '</p>')
        .append('<p><strong>Moyenne saison :</strong>' + forfait.mois_moy_saison + '</p>')
        .append('<p><strong>Prix moyenne saison :</strong>' + forfait.prix_moy_saison + '</p>')
        .append('<p><strong>Haute Saison : </strong>' + forfait.mois_haute_saison + '</p>')
        .append('<p><strong>Prix Haute saison : </strong>' + forfait.prix_haute_saison + '</p>')
        .append('<p><strong>Places disponibles :</strong>' + forfait.places_dispo + '</p>')
        .append('<p><strong>Nombre animaux admis : </strong>' + forfait.nbr_max_animaux_admis + '</p>')
        .append('<p><strong>Prix par animal : </strong>' + forfait.prix_animal + '</p>')
        .append('<a href="details.html?forfait_id=' + index + '">Détails</a>')
        .append('<a href="formulaire.html?forfait_id=' + index + '">Réserver</a>');
*/

// Utiliser la variable  forfait

}

