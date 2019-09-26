var express = require('express');
var router = express.Router();
const ctrlWorkout = require('../controllers/workout')


router.get('/', ctrlWorkout.index)
router.get('/create', ctrlWorkout.create)
router.get('/:id', ctrlWorkout.showWorkout)


module.exports = router;