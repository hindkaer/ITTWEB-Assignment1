var express = require('express');
var router = express.Router();
const ctrlWorkout = require('../controllers/workout')


router.get('/', ctrlWorkout.index)
router.get('/create', ctrlWorkout.create)
router.post('/:workoutname', ctrlWorkout.createExerciseRow)
router.get('/:workoutname', ctrlWorkout.showWorkout)




module.exports = router;