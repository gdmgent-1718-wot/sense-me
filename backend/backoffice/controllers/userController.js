'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users', 'UserSchema');
var Role = mongoose.model('Roles', 'RoleSchema');

exports.list_all_users = (req, res) => {
  var teachers = [];
  var students = [];
/*
  
  Role.find({name: 'teacher'}, (err, role) => {}).then(  
    (role) => {
      users(role[0]['_id']);
    }, (err) => {
      console.log(err);
    });

  Role.find({name: 'student'}, (err, role) => {
    if (err)
      res.send(err);
  });

  console.log(teachers);
  async function renderView(res){
    
   // res.render('users/index', { title: 'users', teachers: teachers, students: students })
  }*/

  getTeachers();
  function getTeachers(){
        Role.find({name: 'teacher'}, (err, role) => {
            User.find({_role: role[0]['_id']}, (err, teacher) => {
              if (err)
                res.send(err);
              teachers = teacher;
            }).then(  
              (success) => {
                console.log(teachers);
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
            console.log(students);
            finish();
          }); 
    });
  }
  function finish(){
    console.log(teachers, students)
  }
  
  
};

exports.create_a_user = (req, res) => {
  var new_user = new User(req.body);
  new_user.save((err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.populate = (req, res) => {
  var role = Role.findById("5a1edffb23d6230eaaed6978", (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
  var new_user = new User(req.body.push({_role: role}));
  new_user.save((err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = (req, res) => {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = (req, res) => {
  User.remove({
    _id: req.params.userId
  }, (err, user) => {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};