const express = require("express")
const router = express.Router()
const userSchema = require("../models/users")

router.get('/', async (req, res)=>{
    try {
        const Allusers = await userSchema.find()
        res.send({msg:'All users', data: Allusers })
        
    } catch (error) {
        res.status(400).send({msg:'cannot get users', error: error})
    }
   
})


router.post('/',async (req, res)=>{
    const userData = req.body
    try {
        const user = await userSchema.create(userData)
         await user.save()
        
         
     } catch (error) {
         res.status(400).send({msg:'cannot insert user', error: error})
     }
})


module.exports = router