const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express()

app.use(express.static('public'))
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/reviews/seller01/top-reviews', function (req, res) {
  db.query((err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(3003)