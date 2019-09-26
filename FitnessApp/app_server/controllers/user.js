let User = require('../models/user')
let Workout = require('../models/workout')


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
module.exports.checkRegisterData = async function (req, res) {
    var username = req.body.username
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;

    var errors = []

    // Generate unique id
    var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var isUnique = false;
    while (!isUnique) {
        await User.find({}, 'id', function (err, idList) {
            if (err) {
                console.log(err)
            }
            else {
                isUnique = !idList.includes(id);
                if (!isUnique) {
                    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                }
            }
        });
    }
    // Check if username is taken
    await User.findOne({ 'username': username }, 'username', function (err, user) {
        if (err) {
            console.log(err)
        }
        if (user != null) {

            if (user.username == username) {
                errors.push({ msg: "Username is taken" })
            }
        }
    });
    // Check if passwords match 
    if (password != confirm_password) {
        errors.push({ msg: 'The two passwords does not match' })
    }
    if (errors.length == 0) {
        console.log(errors)

        // Push username and password to database and check if the username exists in the database
        let user = new User();
        user.username = username;
        user.password = password;
        user.id = id;
        user.save(function (err) {
            if (err) {
                console.log(err);
            }
        })

    }
    res.render('register', {
        errors
    });
};
module.exports.checkLoginData = async function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var errors = []

    await User.findOne({ 'username': username }, function (err, LoginUser) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(LoginUser.id)
            if (LoginUser != null && LoginUser.password == password) {
                Workout.find({ 'userid': LoginUser.id }, function (err, WorkoutData) {
                    if (err) {

                    }
                    else {
                        let Workouts = WorkoutData
                        res.render('welcomePage', { Workouts })
                    }
                })
            }
            else {
                errors.push({ msg: 'Your password or username is wrong' })
                res.render('sign_in', { errors });
            }

        }
    });
}