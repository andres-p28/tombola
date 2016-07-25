// VENDOR LIBS
var request = require('reqwest');

var UserService = function () {

};

UserService.prototype.getUserProfile = function (accessToken, callBack) {
    request({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + accessToken,
        method: 'get',
        success: callBack
    })
};

UserService.prototype.generateAuthUrl = function (callBack) {
    request({
        url: '/api/auth/google/generate',
        method: 'get',
        success: callBack
    })
};

module.exports = new UserService();
