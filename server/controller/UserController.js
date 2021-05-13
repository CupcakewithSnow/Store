const ApiError = require('../error/ApiError')
const {User,Basket} = require('../models/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateJwt = (id,email,role,firstName,lastName) =>{
    return jwt.sign({id,email,role,firstName,lastName},process.env.SECRET_KEY,{expiresIn:'12h'})
}
class UserController {
    async registration(req,res,next){
        
        const {firstName,lastName,email,password,role} = req.body 
        const preUser = await User.findOne({where:{email}})
        if(preUser){
            return next(ApiError.badRequest('Пользователь с таким Email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({firstName,lastName,email,password:hashPassword,role})
        const basket = await Basket.create({userId:user.id})
        const token = generateJwt(user.id,email,user.role,user.firstName,user.lastName)
        return res.json({token})
    }
    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('Пароль неверный'))
        }
        const token = generateJwt(user.id,user.email,user.role)
        return res.json({token})
    }
    async check(req,res,next){
        const token = generateJwt(req.user.id,req.user.email,req.user.role)
        return res.json({token})
    }
}
module.exports = new UserController()