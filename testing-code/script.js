const toggleButton = document.getElementById('toggle-button');
const itemStatus = document.getElementById('item-status');
const cartCount = document.getElementById('cart-count');
const removeCartButton = document.getElementById('toggle-remove-to-cart-btn');

cartCount.textContent = 0;

toggleButton.addEventListener('click', () => {
    itemStatus.innerHTML = 'Added to cart!';
    setTimeout(()=> {
        itemStatus.innerHTML = '';
    }, 3000);
    cartCount.textContent++;
});

removeCartButton.addEventListener('click', () => {
    if (cartCount.textContent > 0) {
        cartCount.textContent--;
        itemStatus.innerHTML = 'Item removed from cart!';
        setTimeout(() => {
            itemStatus.innerHTML = '';
        }, 3000);
    } else {
        itemStatus.innerHTML = 'No items in cart to remove!';
        setTimeout(() => {
            itemStatus.innerHTML = '';
        }, 3000);
    }
});