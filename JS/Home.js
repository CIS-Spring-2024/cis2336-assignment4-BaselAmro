console.log("Welcome to Coug Cafe!");

document.addEventListener('DOMContentLoaded', function() {
    generateMenuItems();
});

function generateMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');

        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;

        menuContainer.appendChild(menuItemElement);
    });
}
