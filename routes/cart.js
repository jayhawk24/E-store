const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const Product = require('../models/product');
const User = require('../models/user');

router.get('/user/:userId/cart', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('cart');
        req.session.amount = 0;
        const cart = [...user.cart];
        cart.map((item) => {
            req.session.amount += item.price;
        });
        res.render('cart/showCart', { cart });
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to get Cart.');
        res.render('error');
    }
});
router.post('/user/:id/cart/', isLoggedIn, async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        const user = req.user;

        user.cart.push(product);
        await user.save();
        req.flash('success', 'Successfully, added to cart');
        res.redirect(`/product/${id}`);
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to add product.');
        res.render('error');
    }
});
router.delete('/user/:userid/cart/:id', async (req, res) => {
    try {
        const { userid, id } = req.params;
        await User.findByIdAndUpdate(userid, { $pull: { cart: id } });
        res.redirect(`/user/${req.user._id}/cart`);
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to add product.');
        res.render('error');
    }
});

module.exports = router;
