// VENDOR LIBS
var express = require('express');
var google = require('googleapis');
var path = require('path');
var request = require('reqwest');
var router = express.Router();

var auth = require('../../config/auth');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(auth.googleAuth.clientID, auth.googleAuth.clientSecret, auth.googleAuth.callbackURL);

var scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
];

router.get('/auth/google/generate', function (req, res) {
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    })
    res.json({url: url});
});

router.get('/auth/google/callback', function (req, res) {
    request({
        url: 'https://accounts.google.com/o/oauth2/token',
        method: 'post',
        data: {
            code: req.query.code,
            client_id : '909125657001-edklbidnpdeng6fnr86pqlftssa275q0.apps.googleusercontent.com',
            client_secret: '7i8vceLRyn60YcS9Xi91CoHF',
            grant_type : 'authorization_code',
            redirect_uri: 'http://127.0.0.1:3000/api/auth/google/callback'
        },
        success: function (resp) {
            //Save this on db and return user created id
            req.session.accessToken = resp.access_token;
            res.redirect('/');
        }
    });
    // oauth2Client.getToken(req.query.code, function(err, tokens) {
    //  // Now tokens contains an access_token and an optional refresh_token. Save them.
    //  if(!err) {
    //    oauth2Client.setCredentials(tokens);
    //    google.oauth2("v2").userinfo.v2.me.get({auth: oauth2Client}, function(err, profile) {
    //        //console.log(profile);
    //        //Save this on db and return user created id
    //        req.session.accessToken = tokens.access_token;
    //        res.redirect('/');
    //    });
    //  }
    // });
});

module.exports = router;
