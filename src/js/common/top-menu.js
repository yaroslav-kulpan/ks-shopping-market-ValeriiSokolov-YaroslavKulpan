let btn = document.querySelector('.top-menu .navbar-toggler');
let btnContainer = document.querySelector('.btn-container');
// console.log(btn.children);

btn.addEventListener('click', function (event) {
  event.preventDefault();
  [].forEach.call(btn.children, function (item) {
    console.log(item);
    item.classList.toggle('d-none');
    // if (item.classList.contains('d-block')) {
    //   item.classList.remove('d-block');
    //   item.classList.add('d-none');
    // }
    // if (item.classList.contains('d-none')) {
    //   item.classList.remove('d-none');
    //   item.classList.add('d-block');
    // }
  });

  btnContainer.classList.toggle('bg-header');

});