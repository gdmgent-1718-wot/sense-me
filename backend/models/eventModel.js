'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your name',
    unique: true
  },
  description: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    required: 'Kindly enter a date',
  },
  start: {
    type: String,
    required: 'Kindly enter a start time',
  },
  stop: {
    type: String,
    required: 'Kindly enter a stop time',
  },
  location: {
    type: String,
    required: 'Kindly enter a location',
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

module.exports = mongoose.model('Events', EventSchema);