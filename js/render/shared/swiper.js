function activateSwiper() {  
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1.5,
            },
            // when window width is >= 480px
            576: {
            slidesPerView: 2.5,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 4,
            }
        }
    });
}

export {activateSwiper};