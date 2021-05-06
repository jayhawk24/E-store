const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/auth/google/redirect',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/register', (req, res) => {
    res.render('auth/signup');
});
router.post('/register', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            title: req.body.title
        });
        await User.register(user, req.body.password);
        req.flash(
            'success',
            'Successfully registered. Please login to continue...'
        );
        res.redirect('/login');
    } catch (e) {
        req.flash('error', 'User already registered');
        res.redirect('/register');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),
    (req, res) => {
        req.flash('success', 'Welcome back!');
        res.redirect('/products');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'logged out successfully');
    res.redirect('/login');
});

module.exports = router;
