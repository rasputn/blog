var express = require('express')
var app = express()

var mongoose = require('mongoose')

// connect to mongo
mongoose.connect(process.env.DB_url, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection successfull')
  }
})

var bodyParser = require('body-parser')

var morgan = require('morgan')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use morgan for logging
app.use(morgan('dev'))

// set public folder
app.use(express.static('public'))

// set view engine
app.set('view engine', 'ejs')

// set views folder
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT)