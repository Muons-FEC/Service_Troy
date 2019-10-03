const mongoose = require('mongoose');
const Promise = require('bluebird');
const faker = require('faker');
const db = require('./database/index.js')

mongoose.connect('mongodb://localhost/reviews', {useUnifiedTopology:true, useNewUrlParser: true }).catch(error => console.log(error))

var Schema = db.Schema;
var reviews = db.reviews;
var User_1 = db.User_1;

User_1.collection.drop()
  .then((res)=> console.log(res))
  .catch(err => console.log(err))

let data = []
for (let i =0; i < 100; i++) {
  let num = Math.floor(Math.random()*Math.floor(6))
  if (num===0) {
    num = 1
  }
  let curreview = {
  item_img: faker.image.imageUrl(),
  item_url: faker.commerce.product(),
  username: faker.lorem.words(),
  thumbnail: faker.image.avatar(),
  body: faker.lorem.paragraph(),
  star_rating: num,
  user_img: faker.image.imageUrl(),
  date: faker.date.past()
  }
  data.push(curreview)
}

User_1.collection.insertMany(data,(err, docs)=> {
  if (err) {
    return console.error(err)
  } else {
    console.log('Multiple documents added to collection')
  }
})