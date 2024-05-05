document.addEventListener('DOMContentLoaded', function() {
    generateMenuItems();
});

const menuItems = [
    { name: "Coug Burger", description: "A juicy burger with all the fixings", price: "$5.99", image: "../Picture/food1.jpg" },
    { name: "Coug Pizza", description: "Delicious pizza topped with cougar cheese", price: "$7.99", image: "../Picture/food7.jpg" },
    { name: "Coug Wrap", description: "Fresh veggies and grilled chicken in a hearty wrap", price: "$6.49", image: "../Picture/wrap.jpg" },
    { name: "Coug Salad", description: "Crisp greens tossed with seasonal produce", price: "$4.99", image: "../Picture/salad.jpg" },
    { name: "Coug Smoothie", description: "A refreshing blend of fruits and yogurt", price: "$3.99", image: "../Picture/smoothie.jpg" },
    { name: "Coug Coffee", description: "Rich, aromatic coffee sourced from local beans", price: "$1.99", image: "../Picture/coffee.jpg" },
];


function generateMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuItems.forEach((item, index) => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
            <label for="quantity-${index}">Quantity (0-10):</label>
            <input type="number" id="quantity-${index}" name="quantity-${index}" min="0" max="10" value="0" required>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

function validateOrder() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let orderValid = true;
    let orderDetails = {};

    inputs.forEach(input => {
        const quantity = parseInt(input.value, 10);
        if (quantity < 0 || quantity > 10 || isNaN(quantity)) {
            alert('Please enter a valid quantity (0-10) for all items.');
            orderValid = false;
        } else if (quantity > 0) {
            const itemName = input.previousElementSibling.previousElementSibling.textContent;
            orderDetails[itemName] = quantity;
        }
    });

    if (orderValid) {
        console.log('Order details:', orderDetails);
        alert('Order submitted successfully!');
    }
}

