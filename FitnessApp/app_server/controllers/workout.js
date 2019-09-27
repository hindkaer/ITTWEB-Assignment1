let Workout = require('../models/workout')

module.exports.index = function (req, res) {
    // Get workouts from database
    

    res.render('welcomePage', { Workouts: [] });
};

module.exports.create = function (req, res) {
    exercises = []
    res.render('createWorkoutPage', { Exercises: exercises });
};

module.exports.showWorkout = async function (req, res) {
    var workoutName = req.params.workoutname;

    await Workout.findOne({ name: workoutName }, 'exercises', function (err, workout) {
        console.log("workout here", workout)
        if (err) {
            console.log(err)
        }
        if (workout != null) {
            workout.save(function (err) {
                if (err) {
                    console.log(err)
                }
            })
            res.render('createWorkoutPage', { Exercises: workout.exercises, Workoutname: workoutName });
        }
    })
};

module.exports.createExerciseRow = async function (req, res) {
    var workoutName = req.body.workoutname
    let existingWorkout = null;

    await Workout.findOne({ name: workoutName }, function (err, workout) {
        if (err) {
            console.log(err)
        }
        if (workout == null) {
            let workout = new Workout();
            workout.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            workout.name = req.body.workoutname
            workout.userid = "b3tayytvjrawtm2flshzmr"
            workout.exercises = [{
                name: req.body.exercise, sets: req.body.sets, repetitions: req.body.repetitions,
                description: req.body.description
            }];
            workout.save(function (err) {
                if (err) {
                    console.log(err)
                }
            })
            res.render('createWorkoutPage', { Exercises: workout.exercises, Workoutname: workoutName });

        } else {

            existingWorkout = workout;
        }
    })

    if (existingWorkout != null) {
        Workout.findOneAndUpdate({ name: workoutName }, {
            $set: {
                name: workoutName
            },
            $push: {
                exercises: {
                    name: req.body.exercise, sets: req.body.sets, repetitions: req.body.repetitions,
                    description: req.body.description
                }
            }
        }, { new: true }, (err, existing_workout) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            res.render('createWorkoutPage', { Exercises: existing_workout.exercises, Workoutname: workoutName });
        }
        )

    }
};

module.exports.removeWorkout = async function (req, res) {
    var workoutName = req.body.workoutname
    await Workout.deleteOne({ name: workoutName }, function (err, workout) {
        if (err) {
            console.log(err)
        }
    });

    //Find workout based on user and render welcome page



    //res.render('welcomePage', { Workouts:;!:";#!:_";#!:;"#!"!#:;!":;" });
};
