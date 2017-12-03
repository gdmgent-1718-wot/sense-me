'use strict';
var mongoose = require('mongoose');


exports.get_dashboard = (req, res) => {
  res.render('index')
};
