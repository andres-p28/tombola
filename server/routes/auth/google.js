// VENDOR LIBS
var argv = require('yargs').argv
var express = require('express');
var google = require('googleapis');

// CORE LIBS
var credentials = require('../../config/credentials');

var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(credentials.googleAuth.clientID, credentials.googleAuth.clientSecret, credentials.googleAuth.callbackURL);
var scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
];
var router = express.Router();

router.get('/auth/google/generate', function (req, res) {
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        hd: 'globant.com',
        email_verified: true
    })
    res.json({url: url});
});

router.get('/auth/google/callback', function (req, res) {
    oauth2Client.getToken(req.query.code, function(err, tokens) {
     // Now tokens contains an access_token and an optional refresh_token. Save them.
     if(!err) {
       oauth2Client.setCredentials(tokens);
       google.oauth2("v2").userinfo.v2.me.get({auth: oauth2Client}, function(err, profile) {
           //Save this on db and return user created id
           req.session.accessToken = tokens.access_token;
           res.redirect('/');
       });
     }
    });
});

router.get('/auth/google/logout', function (req, res) {
    req.session.accessToken = null;
    res.redirect('/');
});

module.exports = router;
