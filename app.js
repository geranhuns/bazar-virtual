require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3001

const {connect} = require('./src/utils/ConectionBD')



connect()
app.use(express.json())


app.get('/',  (req, res)=>{
res.send({msg:'This is Home compa'})
})



app.listen(PORT,()=>{
    console.log("server is ready in port " + PORT)
})

