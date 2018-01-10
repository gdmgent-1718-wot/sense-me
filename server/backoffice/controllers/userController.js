const User = require('../../models/userModel');

exports.list_all_users = (req, res) => {
  var user = true;
  User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.render('users/index', {'title': 'gebruikers', users: users, user: user })
  });
};

exports.create_a_user = (req, res) => {
  var new_user = new User(req.body);
      new_user.save((err, user) => {
        if (err){ res.send(err); }
        res.redirect('/backoffice/users');
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