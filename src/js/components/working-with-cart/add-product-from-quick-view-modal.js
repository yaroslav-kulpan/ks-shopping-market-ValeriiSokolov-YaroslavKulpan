$("#quickViewModal").off().on('show.bs.modal', function () {
  //console.log($('#quickViewModal .add-to-cart'));
  let toCartFromQuickViewModal = $('#quickViewModal .add-to-cart');
  toCartFromQuickViewModal.each((i, item) => $(item).data('test-id', `${$(item).data('id')}`));

  toCartFromQuickViewModal.each(function (index, item) {
    $(item).on('click', function (e) {
      e.preventDefault();
      plusCountCart();
      addCurrentProductToCart(item);
    });
  });
});