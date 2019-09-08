for(let i = 0; i < $('.tag').length; i++){
    $('.tag')[i].addEventListener('click', chooseTag)
}

function chooseTag(e) {
    e.preventDefault();
    $(this).toggleClass('tag-active');
}