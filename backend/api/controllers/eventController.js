'use strict';
var mongoose = require('mongoose');
var Events = mongoose.model('Events', 'EventSchema');

exports.list_all_events = function(req, res) {
    Events.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.get_a_event = function(req, res){
  Events.findById({_id: req.params.eventId}, function(err, event) {
    if (err) res.send(err);
    res.json(event);
  })
}
