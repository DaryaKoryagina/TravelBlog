import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Flickity from 'flickity'


$(document).ready(function($) {

    let carouselMain = document.querySelector('.slider-main')
    console.log(carouselMain)
    if (carouselMain) {

        let flkty = new Flickity(carouselMain, {
            prevNextButtons: true,
            pageDots: false
        });
        flkty.resize()
            // var previousButton = document.querySelector('#start__btn');
            // previousButton.addEventListener('click', function() {
            //     flkty.previous();
            // });

        // var nextButton = document.querySelector('#end__btn');
        // nextButton.addEventListener('click', function() {
        //     flkty.next();
        // });
    };
})