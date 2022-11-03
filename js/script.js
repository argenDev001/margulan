let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
});
let btn = document.querySelector(".window--btn button")
btn.addEventListener("click", () => {
    document.querySelector(".window--modal").style.display = "block"
})
let close = document.querySelector(".window--modal__bg--square__icon")
close.addEventListener("click", () => {
    document.querySelector(".window--modal").style.display = "none"
})


$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function () {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

        // Toggles a class that slides the menu into view on the screen
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });
});


var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});



