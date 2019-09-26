var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
require('./config/passport');

// Mongoose & mongodb
const mongoose = require('mongoose');
var uri = "mongodb+srv://admin:admin@fitnessmongo-3cmix.gcp.mongodb.net/FitnessApp?retryWrites=true&w=majority"
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${uri}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


var userRouter = require('./app_server/routes/user');
var workoutRouter = require('./app_server/routes/workout');
var excerciseRouter = require('./app_server/routes/excercise');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);
app.use('/user', userRouter);
app.use('/workout', workoutRouter);
app.use('/excercise', excerciseRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 
  res.status(err.status || 500);
  res.render('error');
});

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

module.exports = app;
