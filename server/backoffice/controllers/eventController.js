const Events = require('../../models/eventModel');
const path = require('path');
const uploadDir = path.join(__dirname, '../../uploads/events');
const fs = require('fs-extra');

exports.get_index = (req, res) => {
  var event = true;
  Events.find({}, function(err, events) {
    if (err)
      res.send(err);
    res.render('events/index', {'title': 'evenementen', events: events, event: event })
  });
 
};

exports.get_a_event = function(req, res){
  Events.findById({_id: req.params.eventId}, function(err, event) {
    if (err) res.send(err);
    res.render('events/update', {'title': 'evenementen', item: event, event: true})
  })
}

exports.create_a_event = function(req, res) {
  let testFile = req.files.file;
  let ex = testFile.name.split('.').pop();

  let name =  new Date().getTime() + '.' + ex;
  let uploadPath = path.join(uploadDir, name);

  testFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  var new_event = new Events(req.body);
  new_event.src = 'http://192.168.0.107:3000/uploads/events/' + name;

  new_event.save(function(err, event) {
    console.log(event.src);
    if (err)
      res.send(err);
      res.redirect('/backoffice/events');
  });
};


exports.update_a_event = (req, res) => {
  let banner = req.files.file;
  let ex = banner.name.split('.').pop();

  let name =  new Date().getTime() + '.' + ex;
  let uploadPath = path.join(uploadDir, name);

  banner.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });

  req.body['src'] = 'http://192.168.0.107:3000/uploads/events/' + name;
  Events.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, (err, event) => {
    if (err)
      res.send(err);
    res.redirect('/backoffice/events');
  });
};

exports.delete_a_event = (req, res) => {
  Events.remove({
    _id: req.params.eventId
  }, (err, user) => {
    if (err)
      res.send(err);
    res.redirect('/backoffice/events');
  })
};

function getExtension(str) {
  console.log(str.split('.')[1])
  return str.split('.')[1];
}