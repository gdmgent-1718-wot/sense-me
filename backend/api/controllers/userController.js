'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users', 'UserSchema');
var Role = mongoose.model('Roles', 'RoleSchema');

exports.list_all_users = (req, res) => {
  User.find({}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
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

exports.list_by_role = (req, res) => {
  const req_role = req.params.role;
  Role.findOne({name: req_role}, (err, role) => {
    const role_id = role._id;
    User.find({_role: role_id}, ['name', 'about'], (err, user) =>{
      if(err)
        res.send(err);
      res.json(user);
    })
  })
}

//ADD A STUDENT
exports.populate = (req, res) => {
   Role.findOne({name: 'teacher'} , (err, role) => {
    var new_user = new User(req.body);
    console.log(new_user._role);
    new_user['_role'] = role;
    new_user.save((err, user) => {
      if (err){ res.send(err); }
      res.json(user);
    });
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