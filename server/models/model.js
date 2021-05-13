const sequelize = require ('../db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    firstName:{type:DataTypes.STRING},
    lastName:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:'USER'}
})
const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})
const BasketProduct = sequelize.define('basket_prodyct',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})
const Product = sequelize.define('product',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false}
})
const Type = sequelize.define('type',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false}
})
const ProductInfo = sequelize.define('product_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    desctiption:{type:DataTypes.STRING,allowNull:false}
})
User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(ProductInfo, {as:'info'})
ProductInfo.belongsTo(Product)

module.exports = {
    User,
    Basket,
    BasketProduct,
    Type,
    Product,
    ProductInfo
}