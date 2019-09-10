$(document).ready(function () {
//= ../product-list.js

  let toCart = $('.add-to-cart');
/////////////////////////////////////////////////
  toCart.each((i, item) => {
    $(item).data('testId', `${products[i].id}`);
    console.log($(item).data());
  });
////////////////////////////////////////////////^
  for (let i = 0; i < toCart.length; i++) {
    toCart[i].addEventListener('click', function (e) {
      e.preventDefault();
      plusCountCart();
      console.log($(this).data());
      let img = '';
      ////////////////////////
      let priceOld = 0;
      let priceNew = 0;
      ///////////////////////^
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === $(this).data('id')) {
          img = products[i].img;
          ////////////////////////
          priceOld = products[i].priceOld;
          priceNew = products[i].priceNew;
          ///////////////////////^
        }
      }
      $('.modal-empty').remove();
      $('#cartContainer').append(`<div class="col-12 added-product">
                               <div class="row d-flex align-items-center">
                                  <div class="col-4">
                                    <img src=${img} alt="" class="img-fluid">
                                   </div>
                                   <div class="col3">
                                   <!--/////////////////////////////////////////////-->
                                   <!--<span class="line-throw-text">$350</span>-->
                                   <!--<span>$250</span>-->
                                   <span class="line-throw-text">$`${priceOld}`</span>
                                   <span>$`${priceNew}`</span>
                                   <!--/////////////////////////////////////////////^-->
                                    </div>
<div class="col-3 d-flex">
<span class="quantity-text">Quantity</span>
<span class="quantity-district px-4 py-1">2</span>
<a href="#" class="btn-plus">+</a>
<a href="#" class="btn-mines">-</a>
</div>
<div class="col-2">
<span>Sum</span>
<span>$`${priceNew}`</span>
</div>
</div>
</div>`)
        e.preventDefault();
        plusCountCart();
        let img = '';
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === $(this).data('id')) {
                img = products[i].img
            }
        }
        $('.modal-empty').remove();
        $('#cartContainer').append(`<div class="col-10 offset-1 my-2 added-product">
                                        <h4 class="product-title position-absolute">Product title</h4>
                                        <div class="row h-100 d-flex align-items-center added-product-container">
                                            <div class="col-3 ml-2 h-xl-100">
                                                <img src=${img} alt="" class="img-fluid"  >
                                            </div>
                                            <div class="col-3 mt-0  product-price-container d-flex">
                                                <span class="line-throw-text mr-2">$350.00</span>
                                                <span class="product-price text-white font-weight-bold px-2 py-1">$250.00</span>
                                            </div>
                                            <div class="col-lg-3  col-9 ml-lg-4 d-flex align-items-center justify-content-lg-start justify-content-end">
                                                <span class="quantity-text mr-4 font-weight-bold">Quantity:</span>
                                                <input class="quantity-district px-4 py-1 font-weight-bold" value="2">
                                                <a href="#" class="btn-mines btn-calc ml-1 text-decoration-none">-</a>
                                                <a href="#" class="btn-plus btn-calc ml-1 text-decoration-none">+</a>
                                            </div>
                                            <div class="col-lg-2 col-3 ml-auto d-flex flex-column justify-content-center align-items-center mb-lg-5">
                                                <span class="sum-text">Sum</span>
                                                <span class="sum-district font-weight-bold">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
        `);
    });
  }
});

function plusCountCart() {
    let oldCount = parseInt($('#countProductCart').html());
    $('#countProductCart').html(oldCount + 1)
  let oldCount = parseInt($('#countProductCart').html());
  $('#countProductCart').html(oldCount + 1)
}