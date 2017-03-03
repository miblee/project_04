var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/check-yoself';

mongoose.connect(url);

module.exports = mongoose;
