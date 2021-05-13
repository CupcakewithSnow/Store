const Router = require('express')
const ProductController = require('../controller/ProductController')
const router = new Router()
router.post('/',ProductController.create)
router.get('/',ProductController.get)
router.get('/:id',ProductController.getOne)
module.exports = router