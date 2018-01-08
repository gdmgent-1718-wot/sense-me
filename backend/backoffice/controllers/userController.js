'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users', 'UserSchema');
var Role = mongoose.model('Roles', 'RoleSchema');

//IMAGES 
const path = require('path');
const fs = require('fs-extra');


exports.list_all_users = (req, res) => {
  var teachers = [];
  var students = [];

  getTeachers();
  function getTeachers(){
    Role.find({name: 'teacher'}, (err, role) => {
      User.find({_role: role[0]['_id']}, (err, teacher) => {
        if (err)
          res.send(err);
        teachers = teacher;
      }).then((success) => {
          getStudents();
        }); 
    })   
  }

  function getStudents(){
      Role.find({name: 'student'}, (err, role) => {
        User.find({_role: role[0]['_id']}, (err, student) => {
          if (err)
            res.send(err);
            students = student;
        }).then(  
          (success) => {
            finish();
          }); 
    });
  }
  function finish(){
    var users = true;
    res.render('users/index', { title: 'users', teachers: teachers, students: students, users: users });
  }
};

exports.create_a_user = (req, res) => {
  // Get name of role
  const role = req.body._role;
  // Get the file from the request.
  let picture = req.files.file;
  // Rename the file. 
  let ex = picture.name.split('.').pop();
  // Upload to a directory
  let uploadDir = path.join(__dirname, '../../uploads/' + role);
  let name =  new Date().getTime() + '.' + ex;
  let uploadPath = path.join(uploadDir, name);

  // Move the picture to the given path. 
  picture.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });

  // Find the role so we can append it to the user.
  Role.findOne({name: role} , (err, role) => {
    console.log('ROLE FIND ONE: ', role);
    // Get the user from the body and append a upload src. 
    // Also add a role to the user and then save it. 
    var new_user = new User(req.body);
        new_user.profile_picture = 'http://192.168.0.107:3000/uploads/' + role.name + '/' + name;
        new_user['_role'] = role;
        new_user.save((err, user) => {
          if (err){ res.send(err); }
          res.redirect('/backoffice/users');
        });
  });
};

exports.read_a_user = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = (req, res) => {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, (err, user) => {
    if (err)
      res.send(err);
    console.log(req.body);
    res.json(user);
  });
};


exports.delete_a_user = (req, res) => {
  User.remove({
    _id: req.params.userId
  }, (err, user) => {
    if (err)
      res.send(err);
    res.redirect('/backoffice/users');
  })
};