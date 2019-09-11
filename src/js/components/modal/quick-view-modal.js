let quickView = $('.quick-view-btn');
$(window).resize(function (){
    mobileResizeModal()
});

for (let i = 0; i < quickView.length; i++) {
    quickView[i].addEventListener('click', function (e) {
        // console.log($(this).data('id'));
        e.preventDefault();
        let img = '';
        let dataId = $(this).data('id');
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === $(this).data('id')) {
                img = products[i].img
            }
        }
        console.log(img);
        $('#quickViewWrapper').html(`<div class="row">
                    <div class="col-5 quick-view-img">
                    <img src=${img} class="img-fluid" alt="">
                    </div>
                    <div class="col-7 d-flex flex-column quick-view-content">
                    <div>
                    <h3>Product title</h3>
                    <div class="star-rating d-flex align-items-center">
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                                <span class="far fa-star"></span>
                                <span class="far fa-star"></span>
                                <span class="far fa-star"></span>
                                <span class="ml-3">(0 reviews)</span>
                            </div>
                           <hr>
                        </div>
                    <div>
                    <span class="line-throw-text">$350.00</span>
                    <span class="product-price text-white font-weight-bold px-2 py-1">$250.00</span>  
                    <hr>
                    </div>
                    <div class="d-flex flex-column">
                    <div class="d-flex align-items-center">
                    <a href="#"
                               class="add-to-cart furniture-card-hover-btn text-uppercase text-decoration-none text-white" data-id=${dataId}><i
                                    class="fa basket-icon fa-shopping-basket p-0 mr-2"></i>add to cart</a>
                                                                        <a href="#" class="btn quick-view-heart ml-1"><i class="far fa-heart"></i></a>
                    </div>
                    <div>
                    <h4>Quick overwrite</h4>
                    <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euis mod tellus. Nam mattis eros tis sagittis. Vestibulum suscipit cursus biben.</p>
                       <hr>
                        </div>    
                    </div>
                    <div class="d-flex flex-column">
                    <span>Availability:<span> In Stock</span></span>
                    <span>Category:<span> Furniture</span></span>
                    </div>
        </div>
        <div class="col-12 col-md-7 offset-md-5 ">
        <hr>
        <div class="d-flex flex-wrap justify-content-center">
        <a href="#" class="social-icons mb-1 mr-2 text-decoration-none facebook-link"><i class="fab fa-facebook-f mr-2 facebook-icon"></i>Share</a>
        <a href="#" class="social-icons mb-1 mr-2 text-decoration-none"><i class="fab fa-google-plus-g google-icon mr-2"></i>Google+</a>
        <a href="#" class="social-icons mb-1 mr-2 text-decoration-none"><i class="fab fa-twitter mr-2 tweet-icon"></i>Tweet</a>
        <a href="#" class="social-icons mb-1 mr-2 text-decoration-none"><i class="fab fa-pinterest-p mr-2 pinterest-icon"></i>Pinterest</a>
        <a href="#" class="social-icons mb-1 mr-2 text-decoration-none"><i class="fab fa-linkedin-in mr-2 linkedin-icon"></i>Linkedin</a>
        </div>
        </div>
</div>
                                 </div>`);
        mobileResizeModal();
        let toCart = $('.add-to-cart');
        for (let i = 0; i < toCart.length; i++) {
            toCart[i].addEventListener('click', function (e) {
                e.preventDefault();
                plusCountCart();
                let img = '';
                for (let i = 0; i < products.length; i++) {
                    if (products[i].id === $(this).data('id')) {
                        img = products[i].img
                    }
                }
                $('.modal-empty').remove();
                $('#cartContainer').append(`<div class="col-10 offset-1 my-2 added-product">
                                        <h4 class="product-title position-absolute">Product title</h4>
                                        <div class="row h-100 d-flex align-items-center added-product-container">
                                            <div class="col-3 ml-2 h-xl-100">
                                                <img src=${img} alt="" class="img-fluid"  >
                                            </div>
                                            <div class="col-3 mt-0  product-price-container d-flex">
                                                <span class="line-throw-text mr-2">$350.00</span>
                                                <span class="product-price text-white font-weight-bold px-2 py-1">$250.00</span>
                                            </div>
                                            <div class="col-lg-3  col-9 ml-lg-4 d-flex align-items-center justify-content-lg-start justify-content-end">
                                                <span class="quantity-text mr-4 font-weight-bold">Quantity:</span>
                                                <input class="quantity-district px-4 py-1 font-weight-bold" value="2">
                                                <a href="#" class="btn-mines btn-calc ml-1 text-decoration-none">-</a>
                                                <a href="#" class="btn-plus btn-calc ml-1 text-decoration-none">+</a>
                                            </div>
                                            <div class="col-lg-2 col-3 ml-auto d-flex flex-column justify-content-center align-items-center mb-lg-5">
                                                <span class="sum-text">Sum</span>
                                                <span class="sum-district font-weight-bold">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
        `);
            });
        }
    });
}


function mobileResizeModal() {
    if (document.documentElement.clientWidth <= 480) {
        $('.quick-view-img').removeClass('col-5').addClass('col-12');
        $('.quick-view-content').removeClass('col-7').addClass('col-12')
    } else {
        $('.quick-view-img').removeClass('col-12').addClass('col-5');
        $('.quick-view-content').removeClass('col-12').addClass('col-7')
    }
}