"use strict"

const swiperSlide = new Swiper(".team-container", {
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    keyboard: true
});