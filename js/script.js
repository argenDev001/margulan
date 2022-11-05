let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",

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








