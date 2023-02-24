const express = require('express')
/* Importing Express module from Express */
const route = require('./route')
/* Importing route.js file */
const path = require('path')
/* 'path'- Express module */

const server = express()
// Initializing Express

server.set('view engine', 'ejs')

// Telling Express to use content folder (public - CSS, scripts, imagens)
server.use(express.static('public'))

// Telling Express the "Views" folder location 
server.set('views', path.join(__dirname, 'views'))

//middleware
server.use(express.urlencoded({ extended: true }))

server.use(route)

const PORT = 3000
// http://localhost:3000
server.listen(PORT, () => console.log(`RODANDO NA PORTA ${PORT}`))
