const Router = require('express')
const TypeController = require('../controller/TypeController')
router = new Router()
router.post('/',TypeController.create)
router.get('/',TypeController.get)
module.exports = router