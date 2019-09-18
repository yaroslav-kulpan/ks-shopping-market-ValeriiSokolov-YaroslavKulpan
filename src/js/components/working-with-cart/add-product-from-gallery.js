$(document).ready(function () {
  let toCartFromFurnitureGallery = $('.btn-add-cart');

  toCartFromFurnitureGallery.each((i, item) => $(item).data('test-id', `${$(item).prev().data('id')}`));

  toCartFromFurnitureGallery.each(function(i, item) {
    $(item).on('click', function (e) {
      if ($(item).closest('.slick-slide').hasClass('slick-active')) {
        e.preventDefault();
        plusCountCart();
        addCurrentProductToCart(item);

        //= product-card-counter.js
      }
    });
  });
});