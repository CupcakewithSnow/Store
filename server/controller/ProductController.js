const { Product, ProductInfo } = require('../models/model')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({ name, price, typeId, img: fileName })
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                })
            }
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req, res) {
        let { id, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let product
        if (!id && !typeId) {
            product = await Product.findAndCountAll({ limit, offset })
        }
        if (id && !typeId) {
            product = await Product.findAndCountAll({ where: {id}, limit, offset })
        }
        if (!id && typeId) {
            product = await Product.findAndCountAll({ where: {typeId}, limit, offset })
        }
        if (id && typeId) {
            product = await Product.findAndCountAll({ where: {id, typeId}, limit, offset })
        }
        return res.json(product)
    }
    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne({ where: { id } })
        return res.json(product)
    }
}
module.exports = new ProductController()