/**
 * Created by gpnissar on 2016-11-14.
 */
var indice_forfait_url;

$(function(){
    console.log('URL de la page : ' , window.location);
    // Est-ce qu'il y a l'indice du forfait dans l'URL ?
    indice_forfait_url = getParameterByName('forfait_id');
    // Se protéger d'un indice de forfait absent ou invalide (cad n'est pas un nombre entier compris entre 0 et P86_TP_forfaits.length-1)
    if ((null == indice_forfait_url)  // Absent
        || isNaN(parseInt(indice_forfait_url))  // N'est pas un nombre entier
        || ((parseInt(indice_forfait_url) < 0) || parseInt(indice_forfait_url) > P86_TP_forfaits.length-1)) // N'est pas dans l'intervalle
    {
        // Redirection (Javascript) vers la page accueil
        console.log('hostname : ', window.location.hostname);
        console.log('pathname : ', window.location.pathname);
        var url_accueil = (window.location.protocol + '//' + window.location.hostname + window.location.pathname).replace('reservation','index');
        console.log('url page accueil : ', url_accueil);
        window.location.assign(url_accueil);
        //window.location.assign('http://p86/_6Ab_P86_A16/en_classe/j14/forfaits_jQuery/index.html');
    }
    console.log('Index du forfait  : ' , indice_forfait_url);
    $(document.body).append('<h1>Réservation pour ' + P86_TP_forfaits[indice_forfait_url].nom + '</h1>');
});
