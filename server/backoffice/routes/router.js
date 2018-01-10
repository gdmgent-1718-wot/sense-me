module.exports = function (app) {
    var dashboard = require('../controllers/dashboardController');
    var events = require('../controllers/eventController');
    var users = require('../controllers/userController');

    /*** DASHBOARD ***/
    app.route('/backoffice')
        .get(dashboard.get_dashboard);

    /*** Events ***/
    app.route('/backoffice/events')
        .post(events.create_a_event)
        .get(events.get_index);
  
    app.route('/backoffice/events/:eventId')
        .get(events.get_a_event);

    app.route('/backoffice/events/:eventId/delete')
        .post(events.delete_a_event);

    app.route('/backoffice/events/:eventId/update')
        .post(events.update_a_event);

    /*** Users ***/
    app.route('/backoffice/users')
        .get(users.list_all_users)
        //.post(users.populate)
        .post(users.create_a_user);

    app.route('/backoffice/users/:userId')
        .get(users.read_a_user)
        .put(users.update_a_user);

    app.route('/backoffice/users/:userId/delete')
        .post(users.delete_a_user);
};