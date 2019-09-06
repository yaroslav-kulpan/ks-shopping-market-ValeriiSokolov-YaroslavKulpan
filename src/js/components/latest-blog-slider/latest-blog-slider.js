//= owl.carousel.min.js

$('.owl-carousel').owlCarousel({
    // loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout: 7000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            loop: false,
            nav: true
        },
        480: {
            items: 1,
            loop: false,
            nav: true
        },
        768: {
            items: 2,
            loop: true,
            nav: false
        },
        1000: {
            items: 3,
            loop: true,
            nav: false
        }
    }
});