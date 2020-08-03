// Слайдер

$(document).ready(function() {
    $('.testimonials-carousel').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 522,
                settings: {
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    });
});

// Плавный скролл

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.scrollUp').fadeIn();
    } else {
        $('.scrollUp').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

// Гамбургер-меню 

$(document).ready(function() {
    $('.hamburger__wrapper').click(function(event) {
        $('.hamburger__wrapper,.header__menu').toggleClass('active');
    });
});

