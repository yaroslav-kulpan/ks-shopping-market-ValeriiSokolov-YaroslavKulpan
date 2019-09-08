$(document).ready(function () {
    showProducts();
    mobileResize();
});

$(window).resize(function () {
    showProducts();
    mobileResize();
});



$(document).ready(function () {
    $('#btnShowMore').click(function () {
        if (document.documentElement.clientWidth > 768) {
            $('.card-container:hidden').slice(0, 9).show()
        } else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 480) {
            $('.card-container:hidden').slice(0, 4).show()

        } else {
            $('.card-container:hidden').slice(0, 3).show()
        }
        if ($('.card-container:hidden').length < 1) {
            $('#btnShowMore').hide();
        }
    });
});

function showProducts(){
    $('.card-container').hide();
    if (document.documentElement.clientWidth > 768) {
        $('.card-container').slice(0, 9).show();
    } else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 480) {
        $('.card-container').slice(0, 4).show();
    } else {
        $('.card-container').slice(0, 3).show();
    }
}

function mobileResize() {
    if (document.documentElement.clientWidth <= 480) {
        $('.card-container').removeClass('col-6');
        $('.card-container').addClass('mobile-padding')
    } else {
        $('.card-container').addClass('col-6');
        $('.card-container').removeClass('mobile-padding')
    }
}
