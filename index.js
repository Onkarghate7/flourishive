const express = require('express')
var bodyParser = require('body-parser')
require('./models')

const User = require('./models/user')
const Contact = require('./models/contact')

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})


Contact.sync({ force: true});

app.listen(8080,()=>{
    console.log('App will run on: http://localhost:8080')
})
