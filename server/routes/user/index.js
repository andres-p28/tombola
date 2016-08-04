// VENDOR LIBS
var express = require('express');

// CORE LIBS
var loginController = require('./login-controller.js');
var logoutController = require('./logout-controller.js');

var router = express.Router();
router.post('/login', loginController);
router.get('/logout', logoutController);

module.exports = router;
