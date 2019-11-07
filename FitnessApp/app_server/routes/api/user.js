var express = require('express');
var router = express.Router();


const controller = require('../../controllers/api/user')

router.get('/login', controller.login)
router.get('/register', controller.register)




module.exports = router;