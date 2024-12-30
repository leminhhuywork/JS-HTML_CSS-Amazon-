export let cart = JSON.parse(localStorage.getItem('cart'))

if (!cart) {
    cart = [{ productId: '5', Quantity: 1 }]
}

export const saveToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const addToCart = (productId) => {
    let matchingItem
    cart.forEach(item => {
        if (item.productId === productId) {
            matchingItem = item
        }
    })

    if (matchingItem) {
        matchingItem.Quantity += 1
    } else {
        cart.push({
            productId: productId,
            Quantity: 1
        });
    }
    saveToStorage()
}
export const updateCartQuantity = () => {
    let totalQuantity = 0
    cart.forEach(item => totalQuantity += item.Quantity)

    document.querySelector('.cart-quantity').innerHTML = totalQuantity
}

export const deleteFromCart = (id) => {
    const newCart = []

    cart.forEach(cartItem => {
        if (cartItem.productId !== id) {
            newCart.push(cartItem)
        }
    })
    cart = newCart

    document.querySelector(`.js-cart-item-container-${id}`).remove()
    saveToStorage()
}
