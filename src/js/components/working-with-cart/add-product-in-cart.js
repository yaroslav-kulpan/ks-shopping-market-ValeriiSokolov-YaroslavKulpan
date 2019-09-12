$(document).ready(function () {
  let toCart = $('.add-to-cart');
////////////////////////////////////////////////-
  toCart.each((i, item) => $(item).data('testId', `${products[i].id}`));
////////////////////////////////////////////////^
  $(toCart).each(function (index, item) {
    $(item).on('click', function (e) {
      e.preventDefault();
      plusCountCart();

      let currentProduct = {};

      $(products).each((i, product) => {
        if (product.id === $(item).data(`testId`)) {
          currentProduct = $.extend({}, product);
        }
      });

      let productCard = renderProduct(currentProduct);

      $('.modal-empty').remove();

      if (!$('#cartContainer').children().length) {
        $('#cartContainer').append(productCard);

        $('#cartContainer .quantity-district').prop('disabled', true);
        $('#cartContainer .quantity-district').prop('type', 'text');
        showTotal();
        return;
      }

      if ($('#cartContainer').children().length) {
        currentProduct.isInCart = false;
        $('#cartContainer .added-product').each(function (i, cardItem) {
          if ($(cardItem).data('id') === $(item).data('id')) {
            currentProduct.isInCart = true;
            currentProduct.card = cardItem;
          }
        });
        if (currentProduct.isInCart) {
          $(currentProduct.card).find('.quantity-district').val((i, value) => currentProduct.quantity = parseInt(value) + 1);
          $(currentProduct.card).find('.sum-district').text(`$${(currentProduct.quantity * currentProduct.priceNew).toFixed(2)}`);
        } else {
          $('#cartContainer').append(productCard);
        }

        $('#cartContainer .quantity-district').prop('disabled', true);
        $('#cartContainer .quantity-district').prop('type', 'text');
        showTotal();
      }
    });
  });
});

function plusCountCart() {
  let oldCount = parseInt($('#countProductCart').html());
  $('#countProductCart').html(oldCount + 1);
}

function minusCountCart() {
  let oldCount = parseInt($('#countProductCart').html());
  $('#countProductCart').html(oldCount - 1);
}

function renderProduct(productInfo) {
  return `<div class="col-10 offset-1 my-2 added-product" data-id="${productInfo.id}">
            <h4 class="product-title position-absolute"">${productInfo.description}</h4>
            <div class="row h-100 d-flex align-items-center added-product-container">
                <div class="col-3 ml-2 h-xl-100">
                    <img src=${productInfo.img} alt="" class="img-fluid">
                </div>
                <div class="col-3 p-0 product-price-container d-flex">
                    <span class="line-throw-text w-100 text-center">$${productInfo.priceOld.toFixed(2)}</span>
                    <span class="product-price text-white w-100 text-center font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                </div>
                <div class="col-lg-3  col-9 ml-lg-4 d-flex align-items-center justify-content-lg-start justify-content-end">
                    <span class="quantity-text mr-4 font-weight-bold font-dark">Quantity:</span>
                    <input class="quantity-district px-4 py-1 font-weight-bold" maxlength="2" value="1">
                    <a href="#" class="btn-minus btn-calc ml-1 text-decoration-none">-</a>
                    <a href="#" class="btn-plus btn-calc ml-1 text-decoration-none">+</a>
                </div>
                <div class="col-lg-2 col-3 ml-auto d-flex flex-column justify-content-center align-items-center mb-lg-5">
                    <span class="sum-text">Sum</span>
                    <span class="sum-district font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                </div>
            </div>
        </div>`;
}