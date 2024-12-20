const products = [
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51zaCVh6SIL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/71jfsEP8G4L._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/Tablet_1x._SY116_CB566164844_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/51ld6RR8IrL._AC_SY200_.jpg',
        name: 'Product Name',
        rating: {
            stars: 4.5,
            counter: 87
        },
        priceCents: 1090
    },
]

let productsHTML = ''

products.forEach(product => {
    productsHTML += `<div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                        ${product.rating.counter}
                    </div>
                </div>

                <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary">
                    Add to Cart
                </button>
            </div>`
})

document.querySelector('.js-products-grid').innerHTML = productsHTML
