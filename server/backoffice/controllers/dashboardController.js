const Events = require('../../models/eventModel');
const User = require('../../models/userModel');

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
