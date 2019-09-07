for(let i = 0; i < $('.filter-categories-text').length; i++){
    $('.filter-categories-text')[i].addEventListener('click', chooseCategories)
}
function chooseCategories() {
    $(this).toggleClass('filter-categories-text-active');
    $(this).siblings().toggleClass('filter-categories-district-active')
}