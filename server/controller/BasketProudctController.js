const {BasketProduct} = require('../models/model')
class BasketProductController {
    async create(req,res,next){
        const {basketId,productId} = req.body
        const basketProduct = await BasketProduct.create({basketId,productId})
        return res.json(basketProduct)
    }
    async get(req,res){
        const {basketId} = req.query
        const basketProducts = await BasketProduct.findAndCountAll({where:{basketId}})
        return res.json(basketProducts)
    }
    async getOne(req,res){
        const {id} = req.query
        const basketProduct = await BasketProduct.findOne({where:{id}})
        return res.json(basketProduct)
    }
}
module.exports = new BasketProductController()