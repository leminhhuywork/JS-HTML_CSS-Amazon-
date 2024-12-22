export let cart = [{
    productId: 1,
    Quantity: 1
}, {
    productId: 5,
    Quantity: 1
}]

export const deleteFromCart = (id) => {
    const newCart = []

    cart.forEach(cartItem => {
        console.log(cartItem.productId);

        if (cartItem.productId !== id) {
            newCart.push(cartItem)
        }
    })
    cart = newCart

    document.querySelector(`.js-cart-item-container-${id}`).remove()
}
