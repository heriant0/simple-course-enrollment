const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers )
router.post('/', userController.addUser )
router.get('/:id', userController.getUser )
router.put('/:id', userController.updateUser )
router.delete('/:id', userController.delete )

module.exports = router
