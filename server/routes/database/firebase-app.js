// VENDOR LIBS
var firebaseApp = require('firebase');
var path = require('path');

firebaseApp.initializeApp({
  serviceAccount: path.join(__dirname, '../../config/firebase.json'),
  databaseURL: "https://tombola-jdiaz.firebaseio.com"
});

module.exports = firebaseApp;
