"use strict";


$(function () {
    console.log('DOM construit');
    $('#info').children(':not(:first)').hide();
    $('#info-nav li').on('click', function () {
        //Cacher tous les div
        $('#info').children().hide();
        //Retirer la classe 'courant' a l'onglet qui a la classe courant
        $('.courant').removeClass('courant');
        //Attribuer la classe 'courant' a l'onglet qui est clique
        $(this).addClass('courant');
        //Montrer le div qui correspond au li cliqué
        //Obtenir le href du 'a'
        var href_clique =
            $(this).find('a:first').attr('href');
        console.log(href_clique);
        //On sélectionne l'élément représenté pqr le htag
        $(href_clique).fadeIn('fast');
    })
        .eq(0)
        .addClass('courant');

});