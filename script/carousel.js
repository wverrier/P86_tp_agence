/**
 * Created by willy on 17/11/2016.
 */
"use strict";

$(function () {
    console.log('DOM construit');

    $(document).ready(function(){

        $('#owl-demo').bxSlider({
            slideWidth: 200,
            minSlides: 1,
            maxSlides: 3,
            slideMargin: 10
        });
    });
});

