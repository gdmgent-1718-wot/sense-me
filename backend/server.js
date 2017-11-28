var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
path = require('path'),
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/backoffice/views'));
app.set('view engine', 'pug');


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

var routes = require('./backoffice/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
