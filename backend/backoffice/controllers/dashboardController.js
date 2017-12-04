'use strict';
var mongoose = require('mongoose');
var Events = mongoose.model('Events', 'EventSchema');
var User = mongoose.model('Users', 'UserSchema');

exports.get_dashboard = (req, res) => {
  var dashboard = true;
  User.find({}, function(err, res) {
    if (err)
      res.send(err)
  }).then(
    ( success ) => {
      getEvents(success)
    }
  );
  var getEvents = function (users){
    Events.find({}, function(err, events) {
      if (err)
        res.send(err);
      res.render('index', {'title': 'dashboard', dashboard: dashboard, events: events, users: users })
    });
  }
  
};
