// importações
const express = require('express')
const route = require('./route')
const path = require('path')
const server = express()


// Define que o ejs será responsável pelo layout
server.set('view engine', 'ejs')

//Utilização pasta Public
server.use(express.static("public"))

// Mostra onde está o caminho da pasta views
server.set('views', path.join(__dirname, 'views'))

// Miduere
server.use(express.urlencoded({ extended: true}))

// Usa as rotas descritas no arquivo route.js
server.use(route)

//servidor que é utilizado para rodar a aplicação do Chrome
server.listen(3000, () => console.log('Rodando!'))
