const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express()

//motor de plantillas
app.set('view engine', 'ejs')

// setter carpet public
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//variables de entorno
dotenv.config({path: './env/.env'})

//app.use(cookieParser)
app.use('/',require('./routes/router'))


app.listen(3000, () =>{
console.log('Server on port 3000: http://localhost:3000')
})