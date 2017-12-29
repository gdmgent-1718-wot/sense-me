'use strict';
module.exports = function(app) {
  var roles = require('../controllers/roleController');
  var users = require('../controllers/userController');
  var events = require('../controllers/eventController');
  // Routes
  app.route('/api/roles')
    .get(roles.list_all_roles)
    .post(roles.create_a_role);

  app.route('/api/roles/:roleId')
    .get(roles.read_a_role)
    .put(roles.update_a_role)
    .delete(roles.delete_a_role);

  app.route('/api/users/:role')
    .get(users.list_by_role);

  app.route('/api/users')
    .get(users.list_all_users)
    .post(users.populate);

  app.route('/api/events')
    .get(events.list_all_events);

  app.route('/api/events/:eventId')
    .get(events.get_a_event)
};
