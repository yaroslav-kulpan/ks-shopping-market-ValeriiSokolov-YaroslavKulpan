$(document).ready(function () {
  $('.header .basket').append(renderMyModal());

  if (!$('#cartContainer .added-product').length) {
    addEmptyMessage($('#cartContainer').parent());
  }
});

function renderMyModal() {
  return (`
<!-- The Basket Modal -->
<div class="modal fade cart-modal" id="myModal">
  <div class="modal-dialog modal-dialog-centered modal-xl modal-lg">
    <div class="modal-content rounded-0">
      <!-- Modal Header -->
      <div class="modal-header border-bottom-0">
        <button type="button" class="close p-2" data-dismiss="modal"><i class="mx-2 fas fa-times"></i></button>
      </div>
      <!-- Modal body -->
      <div class="modal-body">
        <div class="" id="cartContainer"></div>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer mx-lg-5 pt-0 pb-5 px-lg-4 d-flex justify-content-between border-top-0"></div>
    </div>
  </div>
</div>`);
}