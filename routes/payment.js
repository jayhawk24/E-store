const express = require('express');
const router = express.Router();
const request = require('request');
const jsSHA = require('jssha');
const uniqid = require('uniqid');
const isLoggedIn = require('../middlewares/isLoggedIn');
const Order = require('../models/orders');

router.post('/payment_gateway/payumoney', isLoggedIn, (req, res) => {
    if (req.session.amount === 0) {
        return;
    }
    req.body.txnid = uniqid.process();
    req.body.email = req.user.username;
    req.body.firstname = req.user.title;
    req.body.amount = req.session.amount;

    const pay = req.body;
    const hashString =
        process.env.MERCHANT_KEY +
        '|' +
        pay.txnid +
        '|' +
        pay.amount +
        '|' +
        pay.productinfo +
        '|' +
        pay.firstname +
        '|' +
        pay.email +
        '|' +
        '||||||||||' +
        process.env.MERCHANT_SALT; //store in in different file

    const sha = new jsSHA('SHA-512', 'TEXT');
    sha.update(hashString);
    const hash = sha.getHash('HEX');

    //We have to additionally pass merchant key to API

    pay.key = process.env.MERCHANT_KEY;
    pay.surl = process.env.DEPLOYED_URL + 'payment/success';
    pay.furl = process.env.DEPLOYED_URL + 'payment/fail';
    pay.hash = hash;
    //Making an HTTP/HTTPS call with request
    request.post(
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'https://sandboxsecure.payu.in/_payment', //Testing url
            form: pay
        },
        function (error, httpRes, body) {
            if (error)
                res.send({
                    status: false,
                    message: error.toString()
                });
            if (httpRes.statusCode === 200) {
                res.send(body);
            } else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
                res.redirect(httpRes.headers.location.toString());
            }
        }
    );
});

router.post('/payment/success', isLoggedIn, async (req, res) => {
    //Payumoney will send Success Transaction data to req body.
    //  Based on the response Implement UI as per you want

    try {
        const order = {
            user: req.user._id,
            txnId: req.body.txnid,
            amount: req.body.amount,
            createdAt: Date.now(),
            products: req.user.cart
        };

        req.user.cart = [];
        await Order.create(order);
        await req.user.save();

        req.flash(
            'success',
            'Your Order has been Successfully Placed.Thanks for Shopping with us!'
        );
        res.redirect(`/orders/${req.user._id}`);
    } catch (e) {
        console.log(e.message);
        req.flash(
            'error',
            'Cannot Place the Order at this moment.Please try again later!'
        );
        res.render('error');
    }
});

router.post('/payment/fail', isLoggedIn, (req, res) => {
    //Payumoney will send Fail Transaction data to req body.
    //  Based on the response Implement UI as per you want
    req.flash(
        'error',
        `Your Payment Failed.Try again after sometime ${req.body}`
    );
    res.render('error');
});

module.exports = router;
