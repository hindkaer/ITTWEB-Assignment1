var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    "name": { type: String, required: true },
    "description": { type: String, required: true },
    "sets": { type: Number, default: 0 },
    "repetitions": { type: Number, default: 0 }
});

var Exercise = module.exports = mongoose.model('User', ExerciseSchema);