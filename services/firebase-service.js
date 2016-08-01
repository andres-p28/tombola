// VENDOR LIBS
var firebase = require('firebase/app');

var config = {
    apiKey: "AIzaSyBAPS_po_ByeXZvEyWkxpmNPELdhIZtW-Q",
    authDomain: "tombola-jdiaz.firebaseapp.com",
    databaseURL: "https://tombola-jdiaz.firebaseio.com",
    storageBucket: "tombola-jdiaz.appspot.com",
};

var FirebaseService = function () {
    this.firebaseApp = firebase.initializeApp(config)
};

module.exports = new FirebaseService();
