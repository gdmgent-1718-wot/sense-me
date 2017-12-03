'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users', 'UserSchema');
var Role = mongoose.model('Roles', 'RoleSchema');

exports.list_all_users = (req, res) => {
  User.find({}, (err, user) => {
    if (err)
      res.send(err);
    res.render('users/index', { title: 'Hey', users: user })
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