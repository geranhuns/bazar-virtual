const mongooselib = require('mongoose')

const userEsquema = new mongooselib.Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName:{
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'ingresa un correo electronico valido, ejemplo juan@gmail.com']
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['admin', 'user','seller'], // Se especifica que el campo 'role' solo puede tener los valores 'admin' o 'user'
        default: 'user' // Valor por defecto si no se proporciona uno
      }
})

const userSchema = mongooselib.model('Users', userEsquema, 'users') //primer parametro:nombre_modelo, segundo parametro: nombre_esquema_a_utilizar, tercer parametro: nombre-de-coleccion-en-la-BD

module.exports = userSchema