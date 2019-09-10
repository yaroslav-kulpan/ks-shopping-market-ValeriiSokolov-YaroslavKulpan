let quickView = $('.quick-view');

for (let i = 0; i < quickView.length; i++) {
    quickView[i].addEventListener('click', function (e) {
        e.preventDefault();
        let img = '';
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === $(this).data('id')) {
                img = products[i].img
            }
        }
    $('#quickViewWrapper').html(`<div class="row">
<div class="col-md-5">
<img src=${img} class="img-fluid" alt="">
</div>
<div class="col-md-7">

</div>
                                 </div>`)
    })
}