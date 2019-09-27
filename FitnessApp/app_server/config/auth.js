module.exports = {
    ensureAuthenticated: function (req, res, next) {
        console.log(req.session.passport.user)
        if (req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/')
        }
    }
}