const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/', UserController.users);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser)


module.exports = router