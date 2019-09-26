let exercises = [];
let Workout = require('../models/workout')

module.exports.index = function (req, res) {
    // Get workouts from database
    let workouts = [{ name: "Create new workout", userid: "test", exercises: [{ name: "1", repetitions: "1", sets: "1", description: "1" }] }]

    res.render('welcomePage', { Workouts: workouts });
};

module.exports.create = function (req, res) {
    // Push et tomt workout objekt op på databasen
    exercises = []
    res.render('createWorkoutPage', { Exercises: exercises });
};

module.exports.showWorkout = async function (req, res) {
    var workoutName = req.params.workoutname;
    let tempWorkout

    await Workout.findOne({ 'name': workoutName }, 'exercises', function (err, workout) {
        console.log("workout:", workout)
        if (err) {
            console.log(err)
        }
        if (workout != null) {
            tempWorkout = workout
            workout.save(function (err) {
                if (err) {
                    console.log(err)
                }
            })
        }
    })
    res.render('createWorkoutPage', { Exercises: tempWorkout.exercises, Workoutname: workoutName });
};

module.exports.createExerciseRow = async function (req, res) {
    var workoutName = req.body.workoutname

    await Workout.findOne({ 'name': workoutName }, 'name', function (err, workout) {
        console.log("workout:", workout)
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
        } else { //TODO FIX ME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // workout.exercises.push({
            //     name: req.body.exercise, sets: req.body.sets, repetitions: req.body.repetitions,
            //     description: req.body.description
            // });
        }
    })



    res.render('createWorkoutPage', { Exercises: exercises });



    //find workout på databasen ud fra workOutId

    // workout.push(exercise:[{name: "", repetitions: "", sets: "", description:""}])

    //render med ny workout med tilføjede exercise
    //res.render('createWorkoutPage', { Exercises: exercises });
};

module.exports.removeExerciseRow = function (req, res) {
    var workoutId = req.params.id

    //find workout på databasen ud fra workOutId

    // workout.remove(exercise:[{name: "", repetitions: "", sets: "", description:""}])

    //render med ny workout med fjernede exercise
    //res.render('createWorkoutPage', { Exercises: exercises });
};
