var express = require('express');
var router = express.Router();
const ctrlUser = require('../controllers/user')

router.get('/user', ctrlUser.index)

module.exports = router;