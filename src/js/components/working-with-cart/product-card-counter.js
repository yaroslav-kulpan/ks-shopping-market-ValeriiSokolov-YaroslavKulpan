if ($('#cartContainer .added-product').length) {
  showTotal();
}

$('#cartContainer .btn-plus').each(function (i, btnPlusItem) {
  $(btnPlusItem).off().on('click', function () {
    let thisProduct = $(this).closest('.added-product');
    let resultElem = thisProduct.find('.sum-district');
    let quantityElem = thisProduct.find('.quantity-district');
    let priceElem = thisProduct.find('.product-price');

    plusCountCart();
    plusCountProduct(quantityElem);
    sumProductPrice(resultElem, quantityElem, priceElem);
    showTotal();
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

    showTotal();

    if (!parseInt(quantityElem.val())) {
      thisProduct.remove();
    }

    if (!cartContainer.find('.added-product').length) {
      addEmptyMessage(cartContainer.parent());
      $('.header .modal-footer').html('');
      $('#cartContainer .total-price').remove();
    }
  });
});