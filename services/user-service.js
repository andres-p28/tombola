// VENDOR LIBS
var firebase = require('firebase/app');
require("firebase/auth");

// CORE LIBS

var FirebaseService = require('./firebase-service');

var UserService = function () {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.googleProvider.addScope('profile');
    this.googleProvider.addScope('email');
};

UserService.prototype.loginWithGoogle = function (callback) {
    firebase.auth().signInWithPopup(this.googleProvider).then(function (result) {
        callback(null, result);
    }).catch(function (error) {
        callback(error, null);
    });
};

UserService.prototype.logout = function (callback) {
    firebase.auth().signOut().then(function (result) {
        callback(null, result);
    }).catch(function (error) {
        callback(error, null);
    });
}

module.exports = new UserService();
