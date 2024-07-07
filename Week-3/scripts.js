let cartItems = []; 

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = cartItems.length;
}

function toggleCart() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.classList.toggle('show-cart');
}

function addItemToCart(itemId, itemName, itemPrice) {
  const item = {
    id: itemId,
    name: itemName,
    price: itemPrice
  };
  cartItems.push(item);
  updateCartCount();
  renderCart();
}

function renderCart() {
  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart-items');

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="assets/${item.id.jpg}" alt="${item.name}">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p class="item-price">$${item.price.toFixed(2)}</p>
        <button class="btn btn-remove" onclick="removeItemFromCart('${item.id}')">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  const existingCart = document.querySelector('.cart-items');
  if (existingCart) {
    existingCart.replaceWith(cartContainer);
  } else {
    document.body.appendChild(cartContainer);
  }
}

function removeItemFromCart(itemId) {
  cartItems = cartItems.filter(item => item.id !== itemId);
  updateCartCount();
  renderCart();
}
