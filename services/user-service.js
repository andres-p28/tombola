// VENDOR LIBS
var firebase = require('firebase/app');
require("firebase/auth");
var request = require('reqwest');

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
};

UserService.prototype.authorizeInServer = function () {
    var url = '/api/login';
    firebase.auth().currentUser.getToken(true).then(function (idToken) {
        request({
            url: url,
            method: 'POST',
            data: {
                idToken: idToken
            },
            success: function (results) {
                console.log(results);
            }
         });
    });
};

UserService.prototype.logoutInServer = function () {
    var url = '/api/logout';
    request({
        url: url,
        method: 'GET',
        success: function (results) {
            console.log(results);
        }
     });
}

module.exports = new UserService();
