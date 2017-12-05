'use strict';
var mongoose = require('mongoose');
var Events = mongoose.model('Events', 'EventSchema');

exports.get_index = (req, res) => {
  var event = true;
  Events.find({}, function(err, events) {
    if (err)
      res.send(err);
    res.render('events/index', {'title': 'evenementen', events: events, event: event })
  });
 
};

exports.get_a_event = function(req, res){
  Events.findById({_id: req.params.eventId}, function(err, event) {
    if (err) res.send(err);
    res.render('events/update', {'title': 'evenementen', item: event, event: true})
  })
}
exports.create_a_event = function(req, res) {
  var new_event = new Events(req.body);
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
      res.redirect('/backoffice/events');
  });
};


exports.update_a_event = (req, res) => {
  Events.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, (err, event) => {
    if (err)
      res.send(err);
    res.redirect('/backoffice/events');
  });
};

exports.delete_a_event = (req, res) => {
  Events.remove({
    _id: req.params.eventId
  }, (err, user) => {
    if (err)
      res.send(err);
    res.redirect('/backoffice/events');
  })
};
