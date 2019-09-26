let User = require('../models/user')

module.exports.index = function (req, res) {
    res.render('sign_in');
};


module.exports.register = function (req, res) {
    res.render('register');
};
module.exports.test = function (req, res) {
    User.find({}, function (err, User) {
        res.send(User)
    })
};

module.exports.checkRegisterData = function (req, res) {
    var username = req.body.username
    var password = req.body.password;
    var confirmPassword = req.body.confirm_password;

    if (password == confirmPassword) {
        // Push username and password to database and check if the username exists in the database
        let user = new User();
        user.username = username;
        user.password = password;
        user.save()
        res.render('sign_in');
    } else {
        res.render('register');
    }
};