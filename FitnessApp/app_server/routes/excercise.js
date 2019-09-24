var express = require('express');
var router = express.Router();

const ctrlExcercise = require('../controllers/excercise')

router.get('/excercise', ctrlExcercise.index)



module.exports = router;