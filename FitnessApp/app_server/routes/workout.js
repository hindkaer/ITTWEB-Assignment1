var express = require('express');
var router = express.Router();
const ctrlWorkout = require('../controllers/workout')
const { ensureAuthenticated } = require('../config/auth')

router.get('/', ensureAuthenticated, ctrlWorkout.index)
router.get('/create', ensureAuthenticated, ctrlWorkout.create)
router.get('/:workoutname', ensureAuthenticated, ctrlWorkout.showWorkout)
router.post('/create', ensureAuthenticated, ctrlWorkout.createExerciseRow)



module.exports = router;