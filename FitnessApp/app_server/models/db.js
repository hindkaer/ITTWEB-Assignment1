var mongoose = require('mongoose');
var shema = mongoose.shema;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@fitnessmongo-3cmix.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
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


const UserShema = new shema({
    "id": { type: String, required: true, unique: true },
    "password": { type: String, required: true },
    "username": { type: String, required: true, unique: true }
});

const ExerciseShema = new shema({
    "id": { type: String, required: true, unique: true },
    "description": { type: String, required: true },
    "sets": { type: Number, default: 0 },
    "repetitions": { type: Number, default: 0 }
});

const WorkoutShema = new shema({
    "id": { type: String, required: true, unique: true },
    "userid": { type: String, required: true },
    "exercises": { type: Array, default: null }
});

var User = mongoose.model('User', UserShema);
var Workout = mongoose.model('Workout', WorkoutShema);
var Exercises = mongoose.model('Exercise', ExerciseShema);

module.exports = User;
module.exports = Workout;
module.exports = Exercises;

