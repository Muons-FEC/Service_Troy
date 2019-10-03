const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/reviews', {useUnifiedTopology:true, useNewUrlParser: true }).catch(error => console.log(error))

var Schema = mongoose.Schema;

var reviews = new Schema({
  item_img: String,
  item_url: String,
  username: String,
  thumbnail: String,
  body: String,
  star_rating: Number,
  user_img: String,
  date: Date,
})

var User_1 = mongoose.model('User_1', reviews);


function query(cb) {
  User_1.find({}, (err,res) => {
    if(err) {
      cb(err)
    } else {
      cb(null, res)
    }
  })
}

module.exports.query = query