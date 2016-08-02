// VENDOR LIBS
var firebase = require('firebase');

var logoutController = function (req, res) {
    req.session.user = null;
    res.json({response: 'User logged out successfully'});
};

module.exports = logoutController;
