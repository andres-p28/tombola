// VENDOR LIBS
var express = require('express');
var firebase = require('firebase');
var path = require('path');

// CORE LIBS
var loginController = require('./login-controller.js');
var logoutController = require('./logout-controller.js');

firebase.initializeApp({
  serviceAccount: path.join(__dirname, '../../config/firebase.json'),
  databaseURL: "https://tombola-jdiaz.firebaseio.com"
});

var router = express.Router();
router.post('/login', loginController);
router.get('/logout', logoutController);

module.exports = router;
