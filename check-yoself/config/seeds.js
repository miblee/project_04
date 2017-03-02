require('./database.js');
const mongoose = require('mongoose');


// Require models
const User = require('../models/User');
const Post = require('../models/Post');

// USER 1 + 2 POSTS

var user1 = new User({
  fb_id: '123abc',
  f_name: 'Zildjian' ,
  l_name: 'Boom',
  gender: 'Fem',
  locale: 'Los Angeles'
});

var post1 = new Post({
  poster: user1._id,
  content: 'Be angry at injustice!',
  keyPhrases: ['injustice'],
  score: 0.2216401
});

var post2 = new Post({
  poster: user1._id,
  content: 'Ch-ch-ch-chaaaanges',
  keyPhrases: ['ch-ch'],
  score: 0.5
});

// USER 2 + 1 POST

var user2 = new User({
  fb_id: '456def',
  f_name: 'Norris' ,
  l_name: 'Algae',
  gender: 'Mal',
  locale: 'Burbank'
});

var post3 = new Post({
  poster: user2._id,
  content: "Best friends forever club",
  keyPhrases: ['Best friends', 'forever'],
  score: 0.7
});



post1.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
    mongoose.connection.close();
  }
  process.exit();
});

post2.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
    mongoose.connection.close();
  }
  process.exit();
});


post3.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
    mongoose.connection.close();
  }
  process.exit();
});


user1.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
    mongoose.connection.close();
  }
  process.exit();
});

user2.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
    mongoose.connection.close();
  }
  process.exit();
});
