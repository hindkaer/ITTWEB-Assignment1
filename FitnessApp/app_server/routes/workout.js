var express = require('express');
var router = express.Router();
const ctrlWorkout = require('../controllers/workout')


router.get('/workout', ctrlWorkout.index)

module.exports = router;