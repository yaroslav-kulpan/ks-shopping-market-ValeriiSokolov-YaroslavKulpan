function showButtons(parent) {
  parent.append(`
  <button type="button" class="btn btn-secondary px-3 px-sm-4 rounded-0 font-size-card-s text-uppercase text-white" data-dismiss="modal">
    <i class="mr-2 fas fa-chevron-right"></i>Continue
  </button>
  <button type="button" class="btn px-3 px-sm-4 rounded-0 text-uppercase font-size-card-s text-white bg-logo" data-dismiss="modal">
    <i class="mr-2 fas fa-shopping-basket"></i>Buy now
  </button>`);
}