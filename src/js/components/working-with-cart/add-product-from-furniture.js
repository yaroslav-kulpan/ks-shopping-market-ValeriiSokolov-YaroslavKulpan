$(document).ready(function () {
  let toCartFromFurniture = $('.add-to-cart');

  toCartFromFurniture.each((i, item) => $(item).data('test-id', `${products[i].id}`));

  toCartFromFurniture.each(function (i, item) {
    $(item).on('click', function (e) {
      e.preventDefault();
      plusCountCart();
      addCurrentProductToCart(item);

      //= product-card-counter.js
    });
  });
});