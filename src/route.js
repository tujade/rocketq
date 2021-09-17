//Formato que o formulário de dentro da Modal tem que passar a informação
// route.post('/room/:room/:question/:action', (req, res) => res.render())


// Rotas para o NodeJs 

const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/create-room', (req, res) => res.render("create-room"))
route.get('/room', (req, res) => res.render("room"))


module.exports = route



