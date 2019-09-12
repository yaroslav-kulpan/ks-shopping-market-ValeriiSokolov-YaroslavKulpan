function showButtons(parent) {
  parent.append(`
  <button type="button" class="btn btn-secondary rounded-0 text-uppercase text-white" data-dismiss="modal">Continue</button>
  <button type="button" class="btn rounded-0 text-uppercase text-white bg-logo" data-dismiss="modal">
    <i class="mr-2 fas fa-shopping-basket"></i>Buy now
  </button>`);
}