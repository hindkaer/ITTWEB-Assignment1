let User = require('../../models/user');
let Workout = require('../../models/workout');


module.exports.create = function (req, res, next) {
    const { username, password, confirm_password } = req.body

};
module.exports.delete = function (req, res, next) {
    const { username, password, confirm_password } = req.body

};

//Done
module.exports.getAllForUser = async function (req, res, next) {
    const { username } = req.body
    await User.findOne({ username: username }, function (err, user) {
        if (err) {
            console.log(err)
        }
        if (user) {
            Workout.find({ userid: user.id }, function (err, workouts) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json({ Workouts: workouts, error : false });
                }
            })
        }
        else {
            res.json({ error: true})
        }
    })
};

module.exports.getSingle = function (req, res, next) {
    const { workoutID } = req.body
    Workout.findById(workoutID, function (err, workouts) {
        if (err) {
            console.log(err)
        }
        else {
            res.json({ Workouts: workouts });
        }
    })
};
module.exports.getAll = function (req, res, next) {
    Workout.find({}, function (err, workouts) {
        if (err) {
            console.log(err)
        }
        else {
            res.json({ Workouts: workouts });
        }
    })
};

module.exports.update = function (req, res, next) {
    const { username, password, confirm_password } = req.body

};