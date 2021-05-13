require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const model = require('./models/model')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleWare/errorHandler')
const router = require('./routes/index')
const path = require('path')
const app = express()

PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/srv',router)
// Handler error
app.use(errorHandler)
// Handler error

const start = async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=> console.log(`server run on ${PORT} port`))
    }catch(e){
        console.log(e)
    }
}
start()
