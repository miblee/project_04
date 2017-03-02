const mongoose = require('mongoose')

//================================
// User Schema
//================================

var UserSchema = new mongoose.Schema({
  fb_id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  f_name: {
    type: String,
    required: true
  },
  l_name: String,
  gender: String,
  locale: String,
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
  }]
});

var User = mongoose.model('User', UserSchema)

module.exports = User
