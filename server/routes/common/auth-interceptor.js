// VENDOR LIBS
var express = require('express');

var authInterceptor = function (req, res, next) {
    if (req.session.accessToken) {
        res.append('Set-Cookie', 'access_token='+req.session.accessToken);
    } else {
        res.append('Set-Cookie', 'access_token=');
    }

    next();
};

module.exports = authInterceptor;
