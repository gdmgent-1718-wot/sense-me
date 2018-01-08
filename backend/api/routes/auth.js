const AuthenticationController = require('../controllers/authController');
const express = require('express');
const passport = require('passport');

const passportService = require('../../config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();
    const authRoutes = express.Router();
  
    //= ========================
    // Auth Routes
    //= ========================
  
    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);
  
    // Login route
    authRoutes.post('/login', requireAuth, AuthenticationController.login);
  
    // Set url for API group routes
    app.use('/api', apiRoutes);
  };