let toCart = $('.add-to-cart');
for (let i = 0; i < toCart.length; i++) {
    toCart[i].addEventListener('click', function (e) {
        e.preventDefault();
        plusCountCart();
        let img = '';
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === $(this).data('id')) {
                img = products[i].img
            }
        }
        $('.modal-empty').remove();
        $('#cartContainer').append(`<div class="col-12 added-product">
                               <div class="row d-flex align-items-center">
                                  <div class="col-4">
                                    <img src=${img} alt="" class="img-fluid">
                                   </div>
                                   <div class="col3">
                                   <span class="line-throw-text">$350</span>
                                   <span>$250</span>
                                    </div>
<div class="col-3 d-flex">
<span class="quantity-text">Quantity</span>
<span class="quantity-district px-4 py-1">2</span>
<a href="#" class="btn-plus">+</a>
<a href="#" class="btn-mines">-</a>
</div>
<div class="col-2">
<span>Sum</span>
<span>$250</span>
</div>
                               </div>
</div>`)
    });
}

function plusCountCart() {
    let oldCount = parseInt($('#countProductCart').html());
    $('#countProductCart').html(oldCount+1)
}
