const Router = require('express')
const router = new Router()
const BasketProductController = require('../controller/BasketProudctController')
router.post('/',BasketProductController.create)
router.get('/',BasketProductController.get)
router.get('/:id',BasketProductController.getOne)
module.exports = router