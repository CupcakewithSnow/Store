const Router = require('express')
const router = new Router()
const authMiddleWare = require('../middleWare/authMiddleWare')
const userController = require('../controller/UserController')
const { check } = require('express-validator')
router.post('/registration', [check('firstName,email,lastName', 'Поле не может быть пустым').notEmpty(),
check('password', 'Пароль должен быть больше 4 и меньше 10 сим').isLength({ min: 4, max: 10 })], userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWare, userController.check)
module.exports = router