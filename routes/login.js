/* eslint-disable */
var express = require('express')
var login = express.Router()

var util = require('util')

// require User model
var User = require('../models/user.js')

login.route('/login')
  .get(function (req, res) {
    // TODO: what even goes here
  })
  .post(function (req, res) {
    util.log('Finding user...')
    User.findOne({
      username: req.body.username
    })
      .exec(function (err, user) {
        if (err) {
          util.log(err)
        } else {
          if (user.password === req.body.password) {
            util.log('User found!')
            res.send('Success')
          } else {
            res.send('Incorrect pass or no user')
          }
        }
      })
  })

module.exports = login