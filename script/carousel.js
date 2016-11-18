/**
 * Created by willy on 17/11/2016.
 */
"use strict";

 var numImg  = 1;
    var img;

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Construit');
    
    
    img = document.images[3];
    document.getElementById('une_fois').addEventListener('click', une_fois);
});

function dessiner_inc() {
    img.src = 'images/carrousel' + numImg + '.jpg';
    //Incrémenter le numéro de l'image (si il vaut 8, revenir a 1)
    if(numImg < 3){
        numImg++;
    }else{
        numImg = 1;
    }
    console.log('NumImg après inc :', numImg);
}
function une_fois(){
    console.log('Appel un_fois');
    dessiner_inc();
}



