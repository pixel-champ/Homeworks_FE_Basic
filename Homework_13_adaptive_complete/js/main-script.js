// Slick slider settings
$('.single-item').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

// Burger button settings
// let container = document.querySelector(`.container`)
let header = document.querySelector(`.header`)
let navigationLinks = document.querySelector(`.navigation-links`);
let burgerMenu = document.querySelector(`.btn-nav`);
let logo = document.querySelector(`.primary-heading`);

burgerMenu.addEventListener(`click`, function() {
    header.classList.toggle(`menu-open`);
    burgerMenu.classList.toggle(`cross-burger`);
});

// header.addEventListener(`mouseleave`, function() {
//     navigation.classList.remove(`menu-open`);
//     burgerMenu.classList.remove(`cross-burger`);
// });

// if (container.classList.contains(`menu-open`)) {
//     banner.classList.add(`some-spacing`);
// }