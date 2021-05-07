const express = require('express');
const User = require('../models/user');
const Order = require('../models/orders');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isValid = require('../middlewares/isValid');
const router = express.Router();

router.get('/user/:id', isLoggedIn, isValid, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.render('dashboard/user', { user });
    } catch (err) {
        console.log(err);
        req.flash('error', 'forbidden');
        res.status(401).render('error');
    }
});
router.patch('/user/:id', isLoggedIn, isValid, async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body.user);
        req.flash('success', 'Successfully updated your profile');

        res.redirect(`/user/${id}`);
    } catch (e) {
        console.log(err);
        req.flash('error', 'forbidden');
        res.status(401).render('error');
    }
});
router.get('/orders/:id', isLoggedIn, isValid, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.id }).populate(
            'products'
        );
        res.render('dashboard/order', { orders });
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to fetch your orders');
        res.status(500).render('error');
    }
});
router.post('/orders/:id', isLoggedIn, isValid, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const order = new Order({
            products: user.cart,
            user: id,
            txnId: '0000TESTID0000',
            createdAt: Date.now(),
            amount: req.session.amount
        });
        user.cart = [];

        await order.save();
        await user.save();

        req.flash('Success', 'Successfully placed your order');
        res.redirect(`/orders/${id}`);
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to place your order');
        res.status(500).render('error');
    }
});

module.exports = router;
