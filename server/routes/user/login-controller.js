// VENDOR LIBS
var firebase = require('firebase');

var loginController = function(req, res) {
    firebase.auth().verifyIdToken(req.body.idToken).then(function (decodedToken) {
        req.session.user = decodedToken;
        res.json({response: 'User authorized in server'});
    }).catch(function (error) {
        res.json({error: error});
    });
};

module.exports = loginController;
