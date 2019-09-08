//= slick.min.js

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        arrows: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        // autoplay: true,
        // autoplaySpeed: 9000,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: `<a class="btn-control btn-control-prev"><i class="fas fa-chevron-left prev fz-fa"></i></a>`,
        nextArrow: `<a class="btn-control btn-control-next"><i class="fas fa-chevron-right next fz-fa"></i></a>`,
    });
});

$(document).ready(function () {
    $('.slides').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        let slickTrack = $(this).find('.slick-track');
        let slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
});
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});