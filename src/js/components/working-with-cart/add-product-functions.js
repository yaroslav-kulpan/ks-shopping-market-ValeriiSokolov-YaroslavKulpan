function addCurrentProductToCart(clickedButton) {
  let currentProductInfo = getCurrentProductInfo(products, clickedButton);
  let productCard = renderProductCard(currentProductInfo);

  $('#myModal .modal-empty').remove();

  if (!$('#cartContainer .added-product').length) {
    $('#cartContainer').append(productCard);

    $('#cartContainer .quantity-district').prop('disabled', true);
    $('#cartContainer .quantity-district').prop('type', 'text');
    showTotal();
    showButtons($('#myModal .modal-footer'));
    return;
  }

  if ($('#cartContainer .added-product').length) {
    currentProductInfo.isInCart = false;
    $('#cartContainer .added-product').each(function (i, cardItem) {
      if ($(cardItem).data('id') === $(clickedButton).data('test-id')) {
        currentProductInfo.isInCart = true;
        currentProductInfo.card = cardItem;
      }
    });
    if (currentProductInfo.isInCart) {
      $(currentProductInfo.card).find('.quantity-district').val((i, value) => currentProductInfo.quantity = parseInt(value) + 1);
      $(currentProductInfo.card).find('.sum-district').text(`$${(currentProductInfo.quantity * currentProductInfo.priceNew).toFixed(2)}`);
    } else {
      $('#cartContainer').append(productCard);
    }

    $('#cartContainer .quantity-district').prop('disabled', true);
    $('#cartContainer .quantity-district').prop('type', 'text');
    showTotal();
  }
}

function getCurrentProductInfo(productsArray, clickedButton) {
  let productInfo = {};

  $(productsArray).each((i, product) => {
    if (product.id === $(clickedButton).data(`test-id`)) {
      productInfo = $.extend({}, product);
    }
  });

  return productInfo;
}

function plusCountCart() {
  let oldCount = parseInt($('#countProductCart').html());
  $('#countProductCart').html(oldCount + 1);
}

function minusCountCart() {
  let oldCount = parseInt($('#countProductCart').html());
  $('#countProductCart').html(oldCount - 1);
}

function renderProductCard(productInfo) {
  return `<div class="added-product mx-lg-5 my-3 border rounded" data-id="${productInfo.id}">
            <div class="row no-gutters d-flex align-items-center align-items-sm-start h-100 m-0">
                <div class="col-12 col-sm-8 order-sm-2 h-xl-100 text-center text-md-left">
                  <h4 class="product-title font-size-card-l font-weight-bold w-100 pt-4 pb-3">${productInfo.description}</h4>
                </div>
                <div class="col-12 col-sm-4 order-sm-1 col-lg-3 h-xl-100 text-center">
                  <img src=${productInfo.img} alt="" class="added-product-img img-fluid py-sm-4">
                </div>
                <div class="col-12 col-sm-4 order-sm-3 col-lg-3"></div>
                <div class="added-product-container-3 col-12 col-sm-8 order-sm-4 col-lg-9">
                  <div class="row no-gutters pt-3 pb-4 pt-lg-2 mx-4 mx-sm-0">
                    <div class="col-12 col-sm-7 col-md-5 col-lg-4 d-flex align-items-center justify-content-center justify-content-sm-start p-0">
                      <div class="product-price-container">
                        <span class="line-throw-text px-2 pl-sm-0 font-size-card-m w-100 text-center text-sm-left text-lg-center">$${productInfo.priceOld.toFixed(2)}</span>
                        <span class="product-price px-2 font-size-card-l text-white w-100 text-center font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-5 col-md-8 d-lg-none"></div>
                    <div class="col-12 col-sm-8 col-lg-5 d-flex my-3 mt-sm-4 mt-md-3 mt-lg-0 mb-sm-0 align-items-center align-items-sm-end align-items-lg-center justify-content-center justify-content-md-start justify-content-lg-end p-0">
                      <span class="quantity-text font-size-card-s mr-2 mr-lg-2 mr-xl-4 my-3 my-sm-2 font-weight-bold font-dark">Quantity:</span>
                      <input class="quantity-district px-4 py-1 bg-white font-weight-bold" maxlength="2" value="1">
                      <a href="#" class="btn-minus px-2 ml-1 text-decoration-none">
                        <i class="fas fa-minus"></i>
                      </a>
                      <a href="#" class="btn-plus px-2 ml-1 text-decoration-none">
                        <i class="fas fa-plus"></i>
                      </a>
                    </div>
                    <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center ml-auto pb-lg-4 flex-sm-column justify-content-sm-end">
                      <span class="sum-text font-size-card-m mr-3 mr-sm-0">Sum</span>
                      <span class="sum-district font-size-card-l font-weight-bold">$${productInfo.priceNew.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>`;
}

function showButtons(parent) {
  parent.append(`
  <button type="button" class="btn btn-secondary px-3 px-sm-4 rounded-0 font-size-card-s text-uppercase text-white" data-dismiss="modal">
    <i class="mr-2 fas fa-chevron-right"></i>Continue
  </button>
  <button type="button" class="btn px-3 px-sm-4 rounded-0 text-uppercase font-size-card-s text-white bg-logo" data-dismiss="modal">
    <i class="mr-2 fas fa-shopping-basket"></i>Buy now
  </button>`);
}

function countTotalPrice(sums) {
  let prices = [];
  let totalPrice = 0;
  $(sums).each((i, sum) => prices.push(parseInt($(sum).text().slice(1))));
  $(prices).each((i, price) => totalPrice += price);
  return totalPrice;
}

function renderTotal() {
  return `<div class="row mx-0 mx-lg-5 total-price " data-id="total">
            <div class="col-5 col-lg-10 ml-2 h-xl-100"></div>
            <div class="col-7 col-lg-2 ml-auto d-flex justify-content-end align-items-center">
              <span class="total-text pr-1 font-size-card-l">Total:</span>
              <span class="total-district font-size-card-l"></span>
            </div>
          </div>`;
}

function setPriceValue(element, value) {
  $(element).html(`$${value.toFixed(2)}`);
}

function showTotal() {
  if ($('#cartContainer .total-price').length) {
    $('#cartContainer .total-price').remove();
  }
  $('#cartContainer').append(renderTotal());
  setPriceValue($('#cartContainer .total-district'), countTotalPrice($('#cartContainer .sum-district')));
}

function addEmptyMessage(parentElem) {
  parentElem.append(`
        <p class="modal-empty modal-empty-heading text-center">Your cart is empty</p>
        <p class="modal-empty modal-empty-description text-center">But it's never too late to fix it :)</p>`);
}

function plusCountProduct(element) {
  parseInt(element.val((i, value) => parseInt(value) + 1));
}

function minusCountProduct(element) {
  parseInt(element.val((i, value) => parseInt(value) - 1));
}

function sumProductPrice(elemResult, elemQuantity, elemPrice) {
  elemResult.text(`$${(parseInt(elemQuantity.val()) * parseInt(elemPrice.text().slice(1))).toFixed(2)}`);
}