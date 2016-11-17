/**
 * Created by wverrier on 2016-11-15.
 */
"use strict";

const MIN_NB_CAR = 5;

$(function() {
    console.log("DOM construit");
    $('#form').on('submit', valider_formulaire);
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