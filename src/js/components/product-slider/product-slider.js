//= slick.min.js

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: `<a class="btn-control btn-control-prev"><i class="fas fa-chevron-left prev fz-fa"></i></a>`,
        nextArrow: `<a class="btn-control btn-control-next"><i class="fas fa-chevron-right next fz-fa"></i></a>`,
    });
});
