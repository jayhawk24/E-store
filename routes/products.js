const express = require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'));

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});
router.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate('reviews');
        res.render('products/single', { product });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});
router.get('/products/new', (req, res) => {
    try {
        res.render('products/new');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});

// Create new product

router.post('/products/new', async (req, res) => {
    try {
        const newProd = req.body;
        await Product.create(newProd);
        res.redirect('/products');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});

// Create new Review
router.post('/product/:id/review', async (req, res) => {
    try {
        const { id } = req.params;
        const review = new Review(req.body);
        const product = await Product.findById(id);

        product.reviews.push(review);
        await review.save();
        await product.save();

        res.redirect(`/product/${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});

// Edit existing product
router.get('/product/:id/edit', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});
router.patch('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            useFindAndModify: true
        });

        res.redirect(`/product/${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});

// Delete Product
router.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id, { useFindAndModify: true });
        res.redirect('/products');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error 500');
    }
});

module.exports = router;
