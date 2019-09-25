var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@fitnessmongo-3cmix.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const UserSchema = new Schema({
    "id": { type: String, required: true, unique: true },
    "password": { type: String, required: true },
    "username": { type: String, required: true, unique: true }
});

const ExerciseSchema = new Schema({
    "id": { type: String, required: true, unique: true },
    "name": { type: String, required: true },
    "description": { type: String, required: true },
    "sets": { type: Number, default: 0 },
    "repetitions": { type: Number, default: 0 }
});

const WorkoutSchema = new Schema({
    "id": { type: String, required: true, unique: true },
    "name": { type: String, required: true },
    "userid": { type: String, required: true },
    "exercises": { type: Array, default: null }
});

var User = mongoose.model('User', UserSchema);
var Workout = mongoose.model('Workout', WorkoutSchema);
var Exercises = mongoose.model('Exercise', ExerciseSchema);

module.exports = User;
module.exports = Workout;
module.exports = Exercises;

