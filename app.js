require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3001

const {connect} = require('./src/utils/ConectionBD')
const userRoutes = require('./src/Routes/userRoutes')



connect()
app.use(express.json())


app.get('/',  (req, res)=>{
res.send({msg:'This is Home compa'})
})

app.use('/users', userRoutes)

app.listen(PORT,()=>{
    console.log("server is ready in port " + PORT)
})

