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