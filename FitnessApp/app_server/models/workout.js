var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    "id": { type: String, required: true, unique: true },
    "name": { type: String, required: true },
    "userid": { type: String, required: true },
    "exercises": { type: Array, default: null }
});

var Workout = module.exports = mongoose.model('Workout', WorkoutSchema);