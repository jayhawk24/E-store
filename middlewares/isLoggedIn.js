const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        let op = req.route.path.split('/').pop();
        if (op === 'new') op = 'add new';
        req.flash('error', `Please login to ${op} products`);
        return res.redirect('/login');
    }
    next();
};

module.exports = isLoggedIn;
