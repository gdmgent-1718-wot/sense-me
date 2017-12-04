'use strict';
var mongoose = require('mongoose');

exports.get_index = (req, res) => {
  var event = true;
  res.render('events/index', {'title': 'evenementen', event: event })
};
exports.create_a_role = function(req, res) {
  var new_role = new Role(req.body);
  new_role.save(function(err, role) {
    if (err)
      res.send(err);
    res.json(role);
  });
};