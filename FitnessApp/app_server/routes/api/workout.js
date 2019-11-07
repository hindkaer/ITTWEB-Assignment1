var express = require('express');
var router = express.Router();

const controller = require('../../controllers/api/workout')
//Base path localhost:3000/api/workout/..
//router.get('/', controller.create)
//router.get('/', controller.delete)
router.get('/all', controller.getAll)
router.get('/user', controller.getAllForUser)
router.get('/', controller.getSingle)
//router.get('/', controller.update)


module.exports = router;