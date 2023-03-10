const express = require('express')

const route = express.Router()

const { restart } = require('nodemon')

const QuestionController = require('./controllers/QuestionController')

const RoomController = require('./controllers/RoomController')

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

/* room routes */
route.post('/create-room', RoomController.create)

route.get('/room/:room', RoomController.open)

route.post('/enter-room', RoomController.enter)

/* question routes */
route.post('/question/create/:room', QuestionController.create)

route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
