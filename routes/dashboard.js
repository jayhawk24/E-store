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
        res.json({ user });
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
        req.json({ success: 'Successfully updated your profile' });
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
        res.json({ orders });
    } catch (err) {
        console.log(err);
        req.flash('error', 'Unable to fetch your orders');
        res.status(500).render('error');
    }
});

module.exports = router;
