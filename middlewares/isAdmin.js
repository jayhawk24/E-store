const isAdmin = (req, res, next) => {
    if (req.user.username !== 'admin@gmail.com') {
        req.flash('error', 'Forbidden');
        res.status(401).render('error');
        return;
    }
    next();
};

module.exports = isAdmin;
