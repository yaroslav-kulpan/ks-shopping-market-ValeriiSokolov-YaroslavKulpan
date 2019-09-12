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
        showButtons($('#myModal .modal-footer'));
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
        addCartButtons($('#myModal .modal-footer'));
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
  return `<div class="mx-lg-5 my-3 border rounded added-product position-relative" data-id="${productInfo.id}">
            <h4 class="product-title font-size-card-l mw-100 font-weight-bold position-absolute"">${productInfo.description}</h4>
            <div class="row no-gutters d-flex align-items-center h-100 m-0">
                <div class="col-3 h-xl-100 text-center">
                    <img src=${productInfo.img} alt="" class="img-fluid py-5 py-lg-4 added-product-img">
                </div>
                <div class="col-9">
                  <div class="row no-gutters pt-5">
                    <div class="col-12 col-lg-3 d-flex py-0 px-4 product-price-container">
                      <span class="line-throw-text px-2 font-size-card-m w-100 text-center">$${productInfo.priceOld.toFixed(2)}</span>
                      <span class="product-price px-2 font-size-card-l text-white w-100 text-center font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5 d-flex my-2 align-items-center justify-content-center justify-content-lg-end p-0">
                      <span class="quantity-text font-size-card-s mr-2 mr-lg-4 my-3 font-weight-bold font-dark">Quantity:</span>
                      <input class="quantity-district px-4 py-1 bg-white font-size-card-s font-weight-bold" maxlength="2" value="1">
                      <a href="#" class="btn-minus px-2 ml-1 text-decoration-none">
                        <i class="fas fa-minus"></i>
                      </a>
                      <a href="#" class="btn-plus px-2 ml-1 text-decoration-none">
                        <i class="fas fa-plus"></i>
                      </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center flex-lg-column align-items-center ml-auto pb-lg-4">
                      <span class="sum-text font-size-card-m">Sum</span>
                      <span class="sum-district font-size-card-l ml-3 font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>`;
}

/*`<div class="mx-5 my-3 border rounded added-product position-relative" data-id="${productInfo.id}">
            <h4 class="product-title font-size-card-l font-weight-bold position-absolute"">${productInfo.description}</h4>
            <div class="row d-flex align-items-center h-100 m-0">
                <div class="col-3 h-xl-100 text-center">
                    <img src=${productInfo.img} alt="" class="img-fluid py-4 added-product-img">
                </div>
                <div class="col-9">
                  <div class="row">
                    <div class="col-12">

                    </div>
                    <div class="col-12">

                    </div>
                  </div>
                </div>
                <div class="col-2 d-flex py-0 px-4 product-price-container">
                    <span class="line-throw-text px-2 font-size-card-m w-100 text-center">$${productInfo.priceOld.toFixed(2)}</span>
                    <span class="product-price px-2 font-size-card-l text-white w-100 text-center font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                </div>
                <div class="col-9 col-lg-4 d-flex align-items-center justify-content-end p-0">
                    <span class="quantity-text font-size-card-s mr-4 font-weight-bold font-dark">Quantity:</span>
                    <input class="quantity-district px-4 py-1 bg-white font-size-card-s font-weight-bold" maxlength="2" value="1">
                    <a href="#" class="btn-minus px-2 ml-1 text-decoration-none">
                      <i class="fas fa-minus"></i>
                    </a>
                    <a href="#" class="btn-plus px-2 ml-1 text-decoration-none">
                      <i class="fas fa-plus"></i>
                    </a>
                </div>
                <div class="col-3 col-lg-2 d-flex flex-column align-items-center ml-auto pb-lg-4">
                    <span class="sum-text font-size-card-m">Sum</span>
                    <span class="sum-district font-size-card-l font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                </div>
            </div>
        </div>`*/