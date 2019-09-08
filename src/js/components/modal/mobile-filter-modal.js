$(document).ready(function () {
   changeFilterModal()
});

$(window).resize(function () {
    changeFilterModal()
});

function changeFilterModal() {
    if (document.documentElement.clientWidth <= 480){
        $('.filter').addClass('col-12').removeClass('col-6 offset-2')
    }
    else{
        $('.filter').addClass('col-6').removeClass('col-12');
        $('.filter-center').addClass('offset-2')
    }
}
