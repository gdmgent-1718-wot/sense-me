var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name.'
  },
  email: {
    type: String,
    required: 'Kindly enter your email.'
  },
});

module.exports = mongoose.model('User', UserSchema);