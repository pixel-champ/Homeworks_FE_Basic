'use strict';

// let burgerInput = document.getElementById('burger-input');

// burgerInput.onlick = function () {
//     if (!this.checked) {
//         this.click()
//     }
// }

document.querySelector('#burger-input').onclick = function() {
    if (this.checked) {
        document.querySelector('#burger-menu').style.transform = `none`;
    } if (this.checked === false) {
        document.querySelector('#burger-menu').style.transform = `translate(0%, -100%)`;
    }
 }



// document.getElementById('burger-input').onclick = function() {
//     if (!this.checked) {
//         document.getElementById('burger-menu').style.transform = `none`;
//     }
//  }


// document.getElementById('burger-input').addEventListener(`click`, function() {
//     // document.getElementById('burger-menu').classList.toggle('no-transform');
//     document.getElementById('burger-menu').style.transform = `none`
// })




// if (document.getElementById('burger-menu').style.transform = `none`) {
//     document.getElementById('burger-menu').style.transform = `translate(0%, 50%)`;
// } else {
//     document.getElementById('burger-menu').style.transform = `none`
// }


// if (burgerInput.checked) {
//     burgerInput.style.
// }


// document.getElementById(`burger-input`).
