const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
});
router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/single', { product });
});
router.get('/new', (req, res) => {
    res.render('products/new');
});

// Create new product

router.post('/new', async (req, res) => {
    const newProd = req.body;
    await Product.create(newProd);
    res.redirect('/products');
});

module.exports = router;
