let cart = [];

function addToCart(item) {
  cart.push(item);
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}
