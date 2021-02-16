const express =require('express')
const app=express()
const dotenv=require('dotenv').config()

require('./routes/routes')(app)

const server=app.listen(process.env.NODE_SERVER,()=>{
    console.log(`Connected to server: ${process.env.NODE_SERVER}`)
})

require('./socket/socket')(server)
