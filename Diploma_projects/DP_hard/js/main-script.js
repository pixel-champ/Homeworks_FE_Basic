'use strict';

// ------------- Slick Slider Settings -------------  
// SECTION - Team
let y;
if (window.innerWidth < 767) {
  y = 1;
} else if (window.innerWidth > 768 && window.innerWidth < 1023) {
  y = 2;
} else if (window.innerWidth > 1024) {
  y = 3;
}

console.log(`The screen width is ${window.innerWidth}px.
The number of slick slides to be displayed is ${y}.
Please, refresh the page for the slider to update.`);
console.log(`y = ${y}`);
// window.screen.width vs window.innerWidth ???

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: y,
  slidesToScroll: y,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000
});



// SECTION - Testimonials
$('.fade').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".btn-back"),
    nextArrow: $(".btn-forward"),
    speed: 400,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });




// ------------- YouTube Pop-Up Window -------------  
//   YouTube popup by grt107
$(".youtube-link").grtyoutube();




// ------------- Navigation Back-to-Top Button -------------  

// Hiding the back-to-top button by w3schools.com
// Author: Unspecified
// More information: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button
let btnBtT = document.getElementById("btn-back-to-top");
let btnImgToggle = document.getElementById("btn-img-toggle");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnBtT.style.display = "block";
    btnImgToggle.style.display = "block";
  } else {
    btnBtT.style.display = "none";
    btnImgToggle.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user click on the button, the src attributes set to the value of "#" (the hash) so that you can check the page layout without any distractions
let allImages = document.querySelectorAll("img.content-img")
  // Машо, привіт! 👋 Не розумію як цей луп працює, та клацається окей 👍🙏
function noDistraction() {
  for(const anImage of allImages) {
    // anImage.src = `#`;
    // anImage.toggleAttribute(`src`);
    // anImage.style.display = `none`;
    if (anImage.style.display === "none") {
      anImage.style.display = "block";
    } else {
      anImage.style.display = "none";
    }
  }
}


// ------------- Showing back hidden elements  -------------  
// Hidden elements (Gallery items & Articles)

// Buttons
let btnToggleGallery = document.getElementById('btn-toggle-gallery');
let btnToggleArticles = document.getElementById('btn-toggle-articles');

// Button wrappers to hide
let btnWrapperGallery = document.getElementById('btn-gallery-wrapper')
let btnWrapperArticles = document.getElementById('btn-articles-wrapper')

// Hiden gallery cases
const hiddenGalleryCases = document.querySelectorAll('.hidden-case');
// Hidden articles
const hiddenArticles = document.querySelectorAll('.hidden-article');

// Showing up hidden gallery cases
btnToggleGallery.addEventListener('click', function(){
  btnWrapperGallery.classList.add('hidden');
  // Машо, привіт! 👋 Не розумію як цей луп працює, та клацається окей 👍🙏
  for(const hiddenCase of hiddenGalleryCases) {
    hiddenCase.classList.add('displayed')
  }
});

// Showing up hidden articles
btnToggleArticles.addEventListener('click', function(){
  btnWrapperArticles.classList.add('hidden');
  for(const hiddenArticle of hiddenArticles) {
    hiddenArticle.classList.add('displayed')
  }
});