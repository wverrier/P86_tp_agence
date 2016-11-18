/**
 * Created by wverrier on 2016-11-15.
 */
"use strict";

const MIN_NB_CAR = 5;

$(function() {
    console.log("DOM construit");
    var formulaire = $('#form');
    formulaire.on('submit', valider_formulaire);
    formulaire.find(':input').on('change', gerer_changement);

});

function valider_formulaire(event) {
    console.log('tentative de soumission');
    var formulaire_valide = true;
    
    $(':text').each(function(){
        if ($(this).val().trim().length < MIN_NB_CAR) {
            $(this).addClass('error');
            if ($(this).parent().find('.error_msg').length == 0) {
                $(this).after('<p class="error_msg">Le champ contient moins de 5 caractères.</p>');
            }
            formulaire_valide = false;
        } else {
            $(this).removeClass('error');
            $(this).parent().find('.error_msg').remove();
        }
    });

    var champ_ville = $('select[name="ville"]');
    if (champ_ville.children('option:selected').val() == '-1') {
        formulaire_valide = false;
        champ_ville.addClass('error');
        if ( ! champ_ville.next().is('p.error_msg')) {
            console.log('Création d\'un élément p après le input');
            champ_ville.after('<p class="error_msg"></p>');
        }
        champ_ville.next().text('Veuillez sélectionner une ville.');
    } else {

        if ( champ_ville.next().is('p.error_msg')) {
            champ_ville.next().remove();
        }
        champ_ville.removeClass('error');
    }
    
    if ($('select[name="classe"]').children('option:selected').val() == '-1') {
        formulaire_valide = false;
        $('select[name="classe"]').addClass('error');
    } else {
        $('select[name="classe"]').removeClass('error');
    }


    // En conclusion on soumet ou on soumet pas
    if ( ! formulaire_valide) {
        event.preventDefault();
    }

}