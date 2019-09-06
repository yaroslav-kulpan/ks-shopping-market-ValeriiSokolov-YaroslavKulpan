//= owl.carousel.min.js

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});