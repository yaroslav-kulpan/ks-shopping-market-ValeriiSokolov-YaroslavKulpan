var products = [
    {id: 'product1', img: 'dist/image/products/furniture/1.png', priceOld: 350, priceNew: 250},
    {id: 'product2', img: 'dist/image/products/furniture/2.png', priceOld: 350, priceNew: 250},
    {id: 'product3', img: 'dist/image/products/furniture/3.png', priceOld: 350, priceNew: 250},
    {id: 'product4', img: 'dist/image/products/furniture/4.png', priceOld: 350, priceNew: 250},
    {id: 'product5', img: 'dist/image/products/furniture/5.png', priceOld: 350, priceNew: 250},
    {id: 'product6', img: 'dist/image/products/furniture/6.png', priceOld: 350, priceNew: 250},
    {id: 'product7', img: 'dist/image/products/furniture/7.png', priceOld: 350, priceNew: 250},
    {id: 'product8', img: 'dist/image/products/furniture/8.png', priceOld: 350, priceNew: 250},
    {id: 'product9', img: 'dist/image/products/furniture/9.png', priceOld: 350, priceNew: 250},
    {id: 'product10', img: 'dist/image/products/furniture/10.png', priceOld: 350, priceNew: 250},
    {id: 'product11', img: 'dist/image/products/furniture/11.png', priceOld: 350, priceNew: 250},
    {id: 'product12', img: 'dist/image/products/furniture/12.png', priceOld: 350, priceNew: 250},
    {id: 'product13', img: 'dist/image/products/furniture/13.png', priceOld: 350, priceNew: 250},
    {id: 'product14', img: 'dist/image/products/furniture/14.png', priceOld: 350, priceNew: 250},
    {id: 'product15', img: 'dist/image/products/furniture/15.png', priceOld: 350, priceNew: 250},
    {id: 'product16', img: 'dist/image/products/furniture/16.png', priceOld: 350, priceNew: 250},
    {id: 'product17', img: 'dist/image/products/furniture/17.png', priceOld: 350, priceNew: 250},
    {id: 'product18', img: 'dist/image/products/furniture/18.png', priceOld: 350, priceNew: 250},
    {id: 'product19', img: 'dist/image/products/furniture/19.png', priceOld: 350, priceNew: 250},
    {id: 'product20', img: 'dist/image/products/furniture/20.png', priceOld: 350, priceNew: 250}];

$(products).each(function (i, product) {
  product.description = `Chair. Article number ${product.id.toUpperCase()}`;
});