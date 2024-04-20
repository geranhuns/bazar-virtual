const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs');
const userSchema = require("../models/users")
const { createJWT } = require("../middlewares/autenticacionJWT");



router.get('/', async (req, res)=>{
    try {
        const Allusers = await userSchema.find()
        res.send({msg:'All users', data: Allusers })
        
    } catch (error) {
        res.status(400).send({msg:'cannot get users', error: error})
    }
   
})

router.post('/register',async (req, res)=>{
    const { firstName, lastName, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await userSchema.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
         await user.save()
         res.status(200).send({msg:'user created'})
        
         
     } catch (error) {
         res.status(400).send({msg:'cannot insert user', error: error})
     }
})

router.post('/login', async(req,res)=>{
    const {email, password } = req.body;

    try {
        const user = await userSchema.findOne({
            email:email
          });
        
        if (!user) {
            res.status(401).send({ msg: "Usuario no encontrado o email incorrecto" });
        }
        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Password incorrecto');
          }else {
            const token = createJWT({ email:email, password:password });
            res.status(201).send({ msg: "Login successful", data: token });
          }
        
    } catch (error) {
        res.status(400).send({ msg: "Login inválido", error: error });
    }

})


// router.post('/',async (req, res)=>{
//     const userData = req.body
//     try {
//         const user = await userSchema.create(userData)
//          await user.save()
//          res.status(200).send({msg:'user created'})
        
         
//      } catch (error) {
//          res.status(400).send({msg:'cannot insert user', error: error})
//      }
// })


module.exports = router