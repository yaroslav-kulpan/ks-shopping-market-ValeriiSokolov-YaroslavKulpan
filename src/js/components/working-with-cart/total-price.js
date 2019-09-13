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