'use strict';
module.exports = function(app) {
  var roles = require('../controllers/roleController');

  // Routes
  app.route('/api/roles')
    .get(roles.list_all_roles)
    .post(roles.create_a_role);

  app.route('/api/roles/:roleId')
    .get(roles.read_a_role)
    .put(roles.update_a_role)
    .delete(roles.delete_a_role);
};

