
module.exports.index = function (req, res) {
    // Get workouts from database
    let workouts = [{ name: "workout1", userid: "test" }, { name: "workout2", userid: "test" }, { name: "workout3", userid: "test" }]

    res.render('welcomePage', { Workouts: workouts });
};

module.exports.create = function (req, res) {
    // Push et tomt workout objekt op på databasen
    let exercises = []
    res.render('createWorkoutPage', { Exercises: exercises });
};

module.exports.showWorkout = function (req, res) {
    var workoutId = req.params.id

    res.send("Workout:" + req.params);
    console.log("req.params:", req.params);
};

module.exports.createExerciseRow = function (req, res) {
    var workoutId = req.params.id
    res.send("Workout:" + req.params.id);
    console.log("req.params:", req.params.id);
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
