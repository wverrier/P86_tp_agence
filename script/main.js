/**
 * Created by gpnissar on 2016-11-14.
 */
"use strict";
$(function(){
    console.log(encodeURI('?categorie=Croisières'));
    console.log(encodeURI('?categorie=Sports d\'hiver'));
    console.log(encodeURI('?categorie=Nature'));

    console.log('URL de la page : ' , window.location);
    // Est-ce qu'il y a un paramètre dans l'URL ?
    var categorie_url = getParameterByName('categorie');
    console.log('Valeur de la categorie : ' , categorie_url);

    // for(var index = 0; index < P86_TP_forfaits.length, index++) {};
    var ul_forfaits_nature = $('#forfaits_nature'); // Le ul des forfaits nature
    var ul_forfaits_croisieres = $('#forfaits_croisieres'); // Le ul des forfaits croisieres
    var ul_forfaits_sports_hiver = $('#forfaits_sports_hiver'); // Le ul des forfaits sports hiver
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        if ((null == categorie_url) || (forfait.categorie.toLowerCase() == categorie_url.toLowerCase())) {
            // console.log(index, forfait);
            var li_item = $('<li>').text(forfait.nom);
            switch (forfait.categorie.toLowerCase()) {
                case 'nature':
                    li_item.appendTo(ul_forfaits_nature);
                    break;
                case 'croisières':
                    li_item.appendTo(ul_forfaits_croisieres);
                    break;
                case 'sports d\'hiver':
                    li_item.appendTo(ul_forfaits_sports_hiver);
                    break;
                default:
                    console.log('Error categorie inconnue')
            }
            // li_forfait_jQ.css('background-color','blue');
        }
    });
});

/**
 * Lire une valeur de QueryString (passée dans l'URL)
 * Par exemple si l'URL de la page est l'adresse index.html?mon_param=ma_valeur
 * La fonction getParameterByName('mon_param') renvoie la chaîne 'ma_valeur'
 * @param name: nom du paramètre à lire
 * @returns {Array|{index: number, input: string}|string}
 */
function getParameterByName(name) {
    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
