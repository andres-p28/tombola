// VENDOR LIBS
var argv = require('yargs').argv

var credentials = {
    development: {
        googleAuth: {
            clientID: '909125657001-edklbidnpdeng6fnr86pqlftssa275q0.apps.googleusercontent.com',
            clientSecret: '7i8vceLRyn60YcS9Xi91CoHF',
            callbackURL: 'http://127.0.0.1:5000/api/auth/google/callback'
        }
    },
    staging: {
        googleAuth: {
            clientID: '909125657001-0iikf1i0nbodvvkch4e073g1rbhe453k.apps.googleusercontent.com',
            clientSecret: 'vHqc6BeTCRO6uAkRFlTz6S6K',
            callbackURL: 'https://tombola-dev.herokuapp.com/api/auth/google/callback'
        }
    }
};

var currentCredentials = null;

if (argv.production) {
    currentCredentials = credentials.staging;
} else {
    currentCredentials = credentials.development;
}

module.exports = currentCredentials;
