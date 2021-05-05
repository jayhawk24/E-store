const isAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user.username !== 'admin') {
        req.flash('error', 'Forbidden');
        res.status(401).render('error');
        return;
    }
    next();
};

module.exports = isAdmin;
