

module.exports.index = function (req, res) {
    // Get workouts from database
    let workouts = [{ name: "workout1", userid: "test" }, { name: "workout2", userid: "test" }, { name: "workout3", userid: "test" }]

    res.render('welcomePage', { Workouts: workouts });
};

module.exports.create = function (req, res) {
    let exercises = [{ name: "Squat", userid: "test", sets: "3", repetitions: "10", description: "Hard" }, { name: "Backflip", userid: "test", sets: "3", repetitions: "10", description: "Easy" }]
    res.render('createWorkoutPage', { Exercises: exercises });
};

