var express = require('express');
var router = express.Router();
var verify = require('../../config/jwt')

const controller = require('../../controllers/api/workout')
//Base path localhost:3000/api/workout/..
router.post('/', verify.verifyToken, controller.create)
router.delete('/delete', verify.verifyToken, controller.delete)
router.get('/all', controller.getAll)
router.get('/user', verify.verifyToken, controller.getAllForUser)
router.get('/', controller.getSingle)
//router.get('/', controller.update)


module.exports = router;

;