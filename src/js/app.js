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
    // let btnHeader = document.querySelector(".btn__seach");
    // let btnClose = document.querySelector(".template__btn");
    // let menuItem = document.querySelector(".menu__item");
    // let menuTemplate = document.querySelector(".menu__template");
    // let headerSearch = document.querySelector(".header__full__search");
    // const toggleMenu = () => {
    //     headerSearch.classList.toggle("active");
    // }
    // btnHeader.addEventListener('click', function() {
    //     toggleMenu();
    // });
    // btnClose.addEventListener('click', function() {
    //     toggleMenu();
    // });

// document.addEventListener('click', e => {
//     let target = e.target;
//     let its_headerSearch = target == headerSearch || headerSearch.contains(target);
//     let headerSearch_is_active = headerSearch.classList.contains('active');

//     if (!its_headerSearch && headerSearch_is_active) {
//         toggleMenu();
//     }
// });

let btnMenu = document.querySelector(".bars__item");

let btnMenuClose = document.querySelector(".bars__close");

let menu = document.querySelector(".menu__open");
console.log(menu)
btnMenu.addEventListener('click', function() {
    openMenu();
});
btnMenuClose.addEventListener('click', function() {
    openMenu();
});
const openMenu = () => {
    menu.classList.toggle("active");
}