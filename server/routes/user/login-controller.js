// VENDOR LIBS
var firebase = require('firebase');

// CORE LIBS
var Users = require('./users');

var loginController = function(req, res) {
    firebase.auth().verifyIdToken(req.body.idToken).then(function (user) {
        req.session.user = user;
        Users.findUser(user.email, function (snapshot) {
            if (snapshot.val()) {
                res.json({response: 'User authorized in server'});
            } else {
                Users.addUser(user);
                res.json({response: 'User authorized in server'});
            }
        });
    }).catch(function (error) {
        res.json({error: error});
    });
};

module.exports = loginController;
