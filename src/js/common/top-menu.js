$(document).ready(function () {

  let btn = $('.top-menu .navbar-toggler');
  let btnContainer = $('.btn-container');

  btn.on('click', () => $(".top-menu .collapse").collapse('toggle'));

  $(".top-menu .collapse").on('show.bs.collapse', function () {
    btn.html('<span class="bg-header navbar-toggler-icon"><i class="font-size-large fas fa-times"></i></span>');
  });

  $(".top-menu .collapse").on('hidden.bs.collapse', function () {
    btn.html('<span class="navbar-toggler-icon"><i class="font-dark font-size-large fas fa-bars"></i></span>');
  });

  btnContainer.toggleClass('bg-header');

////////////////////////////////////////////////////

  const navLinksCollection = $(`.top-menu .nav-link`);
  const navItemsCollection = $(`.top-menu .nav-item`);
  const goTop = $("a[href='#begin']");

  for (let i = 0; i < navLinksCollection.length; i++) {
    $(navLinksCollection.eq(i)).on('mousedown', function (event) {
      console.log(this);
      event.preventDefault();
      $(".top-menu .collapse").collapse('toggle');
      $(".top-menu .collapse").on('hidden.bs.collapse', function () {
        btn.html('<span class="navbar-toggler-icon"><i class="font-dark font-size-large fas fa-bars"></i></span>');
      });

      navItemsCollection.each((i, item) => $(item).removeClass('active'));
      $(this).closest('.nav-item').addClass('active');

      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, {
        duration: 1000,
      });
    });
  }

  //scrollTo(pageX,pageY)
  goTop.on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});

window.onscroll = function () {
  if (window.pageYOffset > document.documentElement.clientHeight) {
    $(`.go-top`).addClass(`active`);
  } else {
    $(`.go-top`).removeClass(`active`);
  }
};