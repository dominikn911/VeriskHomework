export default {
    cartHeader: '.base:contains("Shopping Cart")',
    removeItemFromCart: '.action-delete',
    emptyCartMessage: '.cart-empty > :nth-child(1)',
    itemCount: '[data-role="cart-item-qty"]',
    itemPrice: '.col.price > .price-excluding-tax > .cart-price > .price',
    totalPrice: '.subtotal > .price-excluding-tax > .cart-price > .price'
};