// Importing Node modules and initializing Express
const express = require('express'),
      fileUpload = require('express-fileupload'),  
      app = express(),
      path = require('path'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config/main'); 
      
      User = require('./models/userModel')
      Events = require('./models/eventModel');

// Start the server
const server = app.listen(config.port);  
console.log('Your server is running on port ' + config.port + '.');

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

app.locals.moment = require('moment');

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Database Connection
mongoose.connect(config.database);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
app.use(fileUpload());

// Enable request picture from directory
app.use("/uploads/events",express.static(__dirname + "/uploads/events"));
app.use("/uploads/teacher",express.static(__dirname + "/uploads/teacher"));
app.use("/uploads/student",express.static(__dirname + "/uploads/student"));

// Template engine
app.use("/css",express.static(__dirname + "/css"));
app.set('views', path.join(__dirname, '/backoffice/views'));
app.set('view engine', 'pug');

var routes = require('./backoffice/routes/router'); //importing route
routes(app); //register the route

var routes = require('./api/routes/router'); //importing route
routes(app); //register the route