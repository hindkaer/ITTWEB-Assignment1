var express = require('express');
var router = express.Router();
const ctrlUser = require('../controllers/user')

router.get('/', ctrlUser.index)
router.get('/register', ctrlUser.register)
router.post('', ctrlUser.index)
module.exports = router;