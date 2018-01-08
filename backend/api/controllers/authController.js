'use strict';
const jwt = require('jsonwebtoken'),  
      crypto = require('crypto'),
      user = require('../../models/userModel'),
      config = require('../../config/main');

function generateToken(user) {  
  return jwt.sign(user, config.secret, {
      expiresIn: 10080 // in seconds
  });
}

//= =======================================
// Login Route
//= =======================================
exports.login = function (req, res, next) {

  const userInfo = {
    _id: request._id,
    username: request.username,
    password: request.password,
  }

  res.status(200).json({
    token: `JWT ${generateToken(userInfo)}`,
    user: userInfo
  });
};