// VENDOR LIBS
var express = require('express');


// CORE LIBS
var authInterceptor = function (req, res, next) {

    if (req.session.accessToken) {
        res.append('Set-Cookie', 'access_token='+req.session.accessToken);
    }

    next();
};

module.exports = authInterceptor;
