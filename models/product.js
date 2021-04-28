const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, min: 4, max: 50 },
    price: { type: Number, required: true },
    description: { type: String, max: 1000 },
    image: { type: String }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
