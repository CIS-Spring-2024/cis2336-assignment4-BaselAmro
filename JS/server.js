const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Prices for each item
const prices = {
    "Coug Burger": 5.99,
    "Coug Pizza": 7.99,
    "Coug Wrap": 6.49,
    "Coug Salad": 4.99,
    "Coug Smoothie": 3.99,
    "Coug Coffee": 1.99
};

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to process the order
app.post('/submit-order', (req, res) => {
    const items = req.body;
    let total = 0;

    Object.keys(items).forEach(item => {
        const quantity = parseInt(items[item]);
        if (quantity > 0) {
            total += prices[item] * quantity;
        }
    });

    // Sending back a simple confirmation page
    res.send(`<h1>Order Confirmation</h1><p>Your order has been submitted successfully!</p><p>Total Amount: $${total.toFixed(2)}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
