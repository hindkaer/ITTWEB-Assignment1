module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.json({
                message: 'Unauthorized',
            });
            //res.redirect('/')
        }
    }
}