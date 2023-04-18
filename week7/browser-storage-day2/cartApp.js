
function initializeCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        cart = [];
    }
    renderCart();
};
function addItem(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
};

function removeItem(item) {
    cart.splice(cart.indexOf(item), 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
};
function displayCart() {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        let cartItem = document.createElement('li');
        cartItem.textContent = `${cart[i].name} - ${cart[i].price}`;
        cartList.appendChild(cartItem);
    }
};
const el = document.getElementById('cart');
// el.addEventListener('click', (function(event)){
//     alert('clicked');
// };