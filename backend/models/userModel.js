'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name',
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  },
  _role : { 
    type: Schema.ObjectId, 
    ref: 'Roles'
  },
  birthday: {
    type: Date,
    required: 'Kindly enter your birthday',
  },
  origin: {
    type: String,
    required: 'Kindly enter your origin',
  },
  about: {
    type: String,
    required: 'Kindly enter something about you',
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: false,
  },
  deleted_at: {
    type: Date,
    required: false,
  }
});

module.exports = mongoose.model('Users', UserSchema);