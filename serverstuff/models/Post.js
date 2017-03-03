const mongoose = require('mongoose')

//================================
// Post Schema
//================================

var PostSchema = new mongoose.Schema({
  poster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date,
  public: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    required: true
  },
  keyPhrases: Array,
  score: Number
})

var Post = mongoose.model('Post', PostSchema)

module.exports = Post
