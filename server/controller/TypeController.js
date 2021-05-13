const {Type} = require('../models/model')
class TypeController{
    async create(req,res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    async get(req,res){
        const types = await Type.findAndCountAll()
        return res.json(types)
    }
}
module.exports = new TypeController()