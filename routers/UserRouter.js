const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/', UserController.users);
router.post('/create-user', UserController.createUser);
router.delete('/:id', UserController.deleteUser)


module.exports = router