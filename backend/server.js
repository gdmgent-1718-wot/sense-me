const express = require('express'),
      app = express(),
      path = require('path'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/main');

      /***** MODELS *****/
      Role = require('./models/roleModel')
      User = require('./models/userModel')
      Events = require('./models/eventModel');

const fileUpload = require('express-fileupload');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database); 

app.locals.moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

// Enable request picture from directory
app.use("/uploads/events",express.static(__dirname + "/uploads/events"));
app.use("/uploads/teacher",express.static(__dirname + "/uploads/teacher"));
app.use("/uploads/student",express.static(__dirname + "/uploads/student"));

app.use("/css",express.static(__dirname + "/css"));
app.set('views', path.join(__dirname, '/backoffice/views'));
app.set('view engine', 'pug');


var routes = require('./api/routes/index'); //importing route
routes(app); //register the route

var routes = require('./api/routes/auth');
routes(app);

var routes = require('./backoffice/routes/index'); //importing route
routes(app); //register the route

app.listen(config.port);
console.log('Your server is running on port ' + config.port);
