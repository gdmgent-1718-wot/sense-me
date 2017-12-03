'use strict';
var mongoose = require('mongoose');


exports.get_dashboard = (req, res) => {
  var dashboard = true;
  res.render('index', {'title': 'dashboard', dashboard: dashboard })
};
