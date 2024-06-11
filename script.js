document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('header nav');
    const navToggle = document.createElement('div');
    navToggle.innerHTML = '<span>&#9776;</span>';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header').insertBefore(navToggle, nav);
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
