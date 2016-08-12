// VENDOR LIBS
var firebase = require('firebase');
var path = require('path');
var firebaseApp = require('../database/firebase-app');

var Users = function () {

};

Users.prototype.addUser = function (user) {
    firebase.database().ref().child('users').push({
        name: user.name,
        email: user.email
    });
};

Users.prototype.findUser = function (userEmail, callback) {
    firebase.database().ref('users').orderByChild('email').equalTo(userEmail).once('value', callback);
};

Users.prototype.getUsers = function (callback) {
    firebase.database().ref('users').once('value', callback);
}

module.exports = new Users();
