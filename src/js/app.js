import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Flickity from 'flickity'
import FlickityFull from 'flickity-fullscreen'
import FlickityNav from 'flickity-as-nav-for'
import * as select2 from 'select2'
console.log(67676)

let carouselMain = document.querySelector('.slider-main')
console.log(carouselMain)
if (carouselMain) {
    let flkty = new FlickityFull(carouselMain, {
        prevNextButtons: true,
        pageDots: false,
        fullscreen: false,
    });
    // var previousButton = document.querySelector('#start__btn');
    // previousButton.addEventListener('click', function() {
    //     flkty.previous();
    // });

    // var nextButton = document.querySelector('#end__btn');
    // nextButton.addEventListener('click', function() {
    //     flkty.next();
    // });
};