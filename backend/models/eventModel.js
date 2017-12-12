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
    type: String,
  },
  date: {
    type: Date,
    required: 'Kindly enter a date',
  },
  start: {
    type: String,
    required: 'Kindly enter a start time',
  },
  src: {
    type: String,
  },
  stop: {
    type: String,
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