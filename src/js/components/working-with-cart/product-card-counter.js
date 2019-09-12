$("#myModal").off().on('shown.bs.modal', function () {
  $('#cartContainer .btn-plus').each(function (i, btnPlusItem) {
    $(btnPlusItem).off().on('click', function () {
      let resultElem = $(this).closest('.added-product').find('.sum-district');
      let quantityElem = $(this).closest('.added-product').find('.quantity-district');
      let priceElem = $(this).closest('.added-product').find('.product-price');

      plusCountCart();
      plusCountProduct(quantityElem);
      sumProductPrice(resultElem, quantityElem, priceElem);
    });
  });

  $('#cartContainer .btn-minus').each(function (i, btnMinusItem) {
    $(btnMinusItem).off().on('click', function () {
      let cartContainer = $('#cartContainer');

      let thisProduct = $(this).closest('.added-product');
      let resultElem = thisProduct.find('.sum-district');
      let quantityElem = thisProduct.find('.quantity-district');
      let priceElem = thisProduct.find('.product-price');

      minusCountCart();
      minusCountProduct(quantityElem);
      sumProductPrice(resultElem, quantityElem, priceElem);

      if (!parseInt(quantityElem.val())) {
        thisProduct.remove();
      }

      if (!cartContainer.children().length) {
        cartContainer.parent().append(`
        <p class="modal-empty modal-empty-heading text-center">Your cart is empty</p>
        <p class="modal-empty modal-empty-description text-center">But it's never too late to fix it :)</p>`);
        $('.header .modal-footer').html('');
      }
    });
  });
});

function plusCountProduct(element) {
  parseInt(element.val((i, value) => parseInt(value) + 1));
}

function minusCountProduct(element) {
  parseInt(element.val((i, value) => parseInt(value) - 1));
}

function sumProductPrice(elemResult, elemQuantity, elemPrice) {
  elemResult.text(`$${(parseInt(elemQuantity.val()) * parseInt(elemPrice.text().slice(1))).toFixed(2)}`);
}