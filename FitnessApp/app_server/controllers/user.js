

module.exports.index = function (req, res) {
    res.render('sign_in');
};


module.exports.register = function (req, res) {
    res.render('register');
};


var checkPassword = function () {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}