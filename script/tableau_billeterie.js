/**
 * Created by willy on 20/11/2016.
 */

"use strict";

var le_bouton = document.querySelector('#fld1 button');
var tableau = document.querySelector('#div_tableau table');
console.log(tableau);
var caption = tableau.firstElementChild;
console.log(caption);

le_bouton.addEventListener('click', ajouterligne);
calculer_afficher_total();

function ajouterligne() {
    console.log('Ajouter ligne');

    var input_elems = document.getElementById('fld1').getElementsByTagName('input');
    console.log(input_elems);
    var nouv_tr = document.createElement('tr');
    var select_elems = document.getElementById('fld1').getElementsByTagName('select');


    console.log('Type:' , select_elems[0].value);
    var nouv_th_type = document.createElement('th');
    nouv_th_type.textContent = uc_first(select_elems[0].value);
    nouv_tr.appendChild(nouv_th_type);


    console.log('Categorie:' , select_elems[1].value);
    var categorie = document.createElement('td');
    categorie.textContent = uc_first(select_elems[1].value);
    nouv_tr.appendChild(categorie);

    console.log('Billet total:' , input_elems[0].value);
    var billet = document.createElement('td');
    billet.textContent = parseFloat(input_elems[0].value).toFixed(0);
    nouv_tr.appendChild(billet);

    tableau.appendChild(nouv_tr);
    calculer_afficher_total();
}

function calculer_afficher_total() {
    console.log('calculer_afficher_total');
    var total = 0;
    var prix_article;
    var les_tr = tableau.getElementsByTagName('tr');
    for(var i = 1 ; i < les_tr.length ; i++) {
        console.log(les_tr[i].lastElementChild);
        prix_article = parseFloat(les_tr[i].lastElementChild.textContent) * 800;
        total = total + prix_article;
    }
    console.log(total);
    caption.firstElementChild.textContent = total.toFixed(2) + " $";
}
function uc_first(str) {
    return str[0].toUpperCase() + str.substr(1);
}