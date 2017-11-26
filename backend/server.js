const express = require('express'); // import express
const app = express(); 

const MongoClient = require('mongodb').MongoClient // import mongodb
var db_name = 'MYTESTDB';
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27013/MYTESTDB');
var db = mongoose.connection;

// Create a server where browsers can connect to. 
app.listen(3000, function(){ 
    console.log('listening on http://localhost:3000/');
    
    // Setup the database
    MongoClient.connect('mongodb://localhost:27013/' + db_name, (err, database) => {
        if (err) return console.log(err);
        db = database;
        console.log('success: ', database)
    })

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('We are connected');
    });
   
});
