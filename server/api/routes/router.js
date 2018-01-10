const passportService = require('../../config/passport'),
      passport = require('passport');  

module.exports = function(app) {
      var AuthenticationController = require('../controllers/auth'); 
      var events = require('../controllers/eventController');

      /*** Authentication ***/
      app.route('/api/login')
            .post(passport.authenticate('local', { session: false }), AuthenticationController.login);

      app.route('/api/register')
            .post(AuthenticationController.register);

      /***  ***/
      app.route('/api/events')
            .get(events.list_all_events);

      app.route('/api/events/:eventId')
            .get(events.get_a_event)
};