const isValid = (req, res, next) => {
    const { id } = req.params;
    if (req.user.id !== id) {
        req.flash('error', 'Forbidden');
        res.status(401).render('error');
        return;
    }
    next();
};

module.exports = isValid;
