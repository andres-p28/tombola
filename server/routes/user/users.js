// VENDOR LIBS
var firebase = require('firebase');
var path = require('path');

var Users = function () {
    //this.db =
};

firebase.initializeApp({
  serviceAccount: path.join(__dirname, '../../config/firebase.json'),
  databaseURL: "https://tombola-jdiaz.firebaseio.com"
});

Users.prototype.addUser = function (user) {
    firebase.database().ref('tombola').set(user, function (error) {
        console.log(error);
    });
};

module.exports = new Users();
