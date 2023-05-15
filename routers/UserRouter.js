const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/', UserController.users);
router.post('/create-user', UserController.createUser);


module.exports = router