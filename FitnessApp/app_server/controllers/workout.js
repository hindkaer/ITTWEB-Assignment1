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

module.exports.showWorkout = function (req, res) {
    //var workoutId = req.params.id
    let workout = { name: "workout1", userid: "test", exercises: [{ name: "1", repetitions: "1", sets: "1", description: "1" }] }
    // Workout.find({ name: workoutId }, function (err, Workout) {

    // })
    // console.log("workoutId:", workoutId);
    // Find workoutId og smid workout.exercises med i render

    res.render('createWorkoutPage', { Exercises: workout.exercises });
};

module.exports.createExerciseRow = function (req, res) {
    var workoutId = req.params.id
    // byt dette ud med databasen


    exercises.push({
        name: req.body.exercise, sets: req.body.sets, repetitions: req.body.repetitions,
        description: req.body.description
    });

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
