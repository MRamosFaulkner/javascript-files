
const addItem = document.querySelector('#addItem');
const displayCartButton = document.querySelector('#displayCart');

function initializeCart() {
    if (localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    } 
}
function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
};

function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartUpdate = cart.filter(item => item.id !== id);
    
    localStorage.setItem('cart', JSON.stringify(cartUpdate));
    console.log(cart);
};
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}
addItemForm.addEventListener('submit', function(event)  {
    event.preventDefault();

    const itemName = document.querySelector('#itemName').value;
    const itemPrice = document.querySelector('#itemPrice').value;

    const item = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
    };

    addItem(item);
});

displayCartButton.addEventListener('click', function() {
    displayCart();
});
initializeCart();