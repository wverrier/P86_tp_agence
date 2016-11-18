/**
 * Created by gpnissar on 2016-11-14.
 */
var categorie_url;

    $(function(){
    console.log('URL de la page : ' , window.location);
    // Est-ce qu'il y a un paramètre dans l'URL ?
    categorie_url = getParameterByName('categorie');
    console.log('Valeur de la categorie : ' , categorie_url);
    afficher_catalogue();
});

/**
 * Sert à la page catalogue pour afficher le catalogue (par categorie)
 */
function afficher_catalogue() {
    var ul_forfaits_nature = $('#forfaits_nature'); // Le ul des forfaits nature
    var ul_forfaits_croisieres = $('#forfaits_croisieres'); // Le ul des forfaits croisieres
    var ul_forfaits_sports_hiver = $('#forfaits_sports_hiver'); // Le ul des forfaits sports hiver
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        if ((null == categorie_url) || (forfait.categorie.toLowerCase() == categorie_url.toLowerCase())) {
            // console.log(index, forfait);
            var li_item =
                $('<li>')
                    .append('<h2>' + forfait.nom + '</h2>')
                    .append('<img src="' + forfait.photo + '" alt="photo forfait" />')
                    .append('<p>' + forfait.description + '</p>')
                    .append('<a href="reservation.html?forfait_id=' + index + '">Réserver</a>');
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
}
