// Sample menus for each restaurant
const menus = {
    'Restaurant A': [
        { name: 'Pizza', price: 10 },
        { name: 'Pasta', price: 8 },
        { name: 'Salad', price: 5 }
    ],
    'Restaurant B': [
        { name: 'Burger', price: 7 },
        { name: 'Fries', price: 3 },
        { name: 'Shake', price: 4 }
    ]
};

let cart = [];

// Display menu for selected restaurant
function showMenu(restaurant) {
    document.getElementById('restaurants').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('restaurant-name').innerText = restaurant;

    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    menus[restaurant].forEach((item, index) => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `${item.name} - $${item.price} 
            <button onclick="addToCart(${index}, '${restaurant}')">Add to Cart</button>`;
        menuItems.appendChild(menuItem);
    });
}

// Add item to cart
function addToCart(itemIndex, restaurant) {
    const selectedItem = menus[restaurant][itemIndex];
    cart.push(selectedItem);
    alert(`${selectedItem.name} added to cart!`);
}

// Show cart items
function showCart() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total}`;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Order placed successfully!');
    cart = [];
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('restaurants').classList.remove('hidden');
}
