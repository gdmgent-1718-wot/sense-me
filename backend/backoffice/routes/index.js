'use strict';
module.exports = function(app) {
  var roles = require('../controllers/roleController');
  var users = require('../controllers/userController');
  var dashboard = require('../controllers/dashboardController');
  var events = require('../controllers/eventController');
  /**
   * DASHBOARD
   */
  app.route('/backoffice')
    .get(dashboard.get_dashboard);

  /**
   * USERS
   */
  app.route('/backoffice/roles')
    .get(roles.list_all_roles)
    .post(roles.create_a_role);

  app.route('/backoffice/roles/:roleId')
    .get(roles.read_a_role)
    .put(roles.update_a_role)
    .delete(roles.delete_a_role);

  app.route('/backoffice/users')
    .get(users.list_all_users)
    //.post(users.populate)
    .post(users.create_a_user);

  app.route('/backoffice/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user);

  app.route('/backoffice/users/:userId/delete')
    .post(users.delete_a_user);
 /**
   * Events
   */
  app.route('/backoffice/events')
  .post(events.create_a_event)
  .get(events.get_index);


};

