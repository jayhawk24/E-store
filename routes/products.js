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

// Edit existing product
router.get('/product/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});
router.patch('/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
        useFindAndModify: true
    });
    res.redirect(`/product/${id}`);
});

// Delete Product
router.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id, { useFindAndModify: true });
    res.redirect('/products');
});

module.exports = router;
