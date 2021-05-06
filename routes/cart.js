const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const Product = require('../models/product');
const User = require('../models/user');

router.get('/user/:userId/cart', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('cart');
        res.render('cart/showCart', { cart: user.cart });
    } catch (err) {
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
        req.flash('error', 'Unable to add product.');
        res.render('error');
    }
});
router.delete('/user/:userid/cart/:id', async (req, res) => {
    const { userid, id } = req.params;
    await User.findByIdAndUpdate(userid, { $pull: { cart: id } });
    res.redirect(`/user/${req.user._id}/cart`);
});

module.exports = router;
