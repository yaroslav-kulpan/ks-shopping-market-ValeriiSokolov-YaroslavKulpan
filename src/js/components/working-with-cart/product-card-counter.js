$(document).ready(function () {
  $('#cartContainer .quantity-district').prop('disabled', true);
  $(document).on('click', '.btn-plus', function () {
    $('#cartContainer .quantity-district').val(parseInt($('#cartContainer .quantity-district').val()) + 1);
    $('#cartContainer .sum-district')
      .text(`$${(parseInt($('#cartContainer .quantity-district').val()) * 
        Number($('#cartContainer .product-price').text().slice(1))).toFixed(2)}`);
  });
  $(document).on('click', '.btn-minus', function () {
    $('#cartContainer .quantity-district').val(parseInt($('#cartContainer .quantity-district').val()) - 1);
    $('#cartContainer .sum-district')
      .text(`$${(parseInt($('#cartContainer .quantity-district').val()) *
        Number($('#cartContainer .product-price').text().slice(1))).toFixed(2)}`);

    if (!$('#cartContainer .quantity-district').val()) {
      $('#cartContainer .quantity-district').val(1);
    }
  });
});