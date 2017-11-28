var express = require('express');
var router = express.Router();
var users = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'hiiii' });
});

'use strict';
module.exports = function(app) {
  // users Routes
  app.route('/users')
    .get(backend.list_all_users)
    .post(backend.create_a_user);
    
  app.route('/users/:userId')
    .get(backend.read_a_user)
    .put(backend.update_a_user)
    .delete(backend.delete_a_user);
};

module.exports = router;
