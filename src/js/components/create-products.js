for(let i = 0; i < products.length; i++) {
    $('#cardWrapper').append(`<div class="card-container col-md-4 col-6 my-3" id=${products[i].id}><div class="card furniture-card">
                        <div class=" position-relative">
                            <img src=${products[i].img} class="card-img-top furniture-card-img"
                                 alt="...">
                            <span class="furniture-card-sale position-absolute text-white furniture-card-hover-show">sale</span>
                            <a href="#"
                               class="quick-view furniture-card-hover-btn text-white text-decoration-none position-absolute furniture-card-hover-show" data-id=${products[i].id}>Quick
                                View</a>
                            <a href=""
                               class="add-to-cart furniture-card-hover-btn text-uppercase text-decoration-none text-white position-absolute furniture-card-hover-show" data-id=${products[i].id}><i
                                    class="fa basket-icon fa-shopping-basket p-0 mr-2"></i>add to cart</a>
                        </div>
                        <div class="card-body p-2 furniture-card-body">
                            <h5 class="card-title furniture-card-title text-center">Card title</h5>
                            <div class="star-rating d-flex justify-content-center">
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                                <span class="far fa-star"></span>
                                <span class="far fa-star"></span>
                                <span class="far fa-star"></span>
                            </div>
                            <hr class="bg-dark furniture-card-line">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#" class="btn btn-wishlist mr-1"><i class="far fa-heart"></i></a>
                                    <a href="#" class="btn btn-compare"><i class="fas fa-exchange-alt"></i></a>
                                </div>
                                <span class="furniture-card-price text-white">$30.00</span>
                            </div>
                        </div>
                    </div></div>`);
}
