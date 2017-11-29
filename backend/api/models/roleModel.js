'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the role',
    unique: true
  },
  active: {
    type: Boolean,
    default: true
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

module.exports = mongoose.model('Roles', RoleSchema);