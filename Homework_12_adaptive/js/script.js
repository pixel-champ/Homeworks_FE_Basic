"use strict";
// Slider
$(document).ready(() => {
    $(".banner-slider").slick({
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: false,
        nextArrow: false
    });
})

// Burger
let header = document.querySelector(".top-page");
let burger = document.querySelector(".burger-button");
let navigation = document.querySelector(".navigation-menu");
burger.addEventListener("click", function () {
    navigation.classList.toggle("show-element");
});
