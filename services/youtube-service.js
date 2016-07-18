// VENDOR LIBS
var request = require('reqwest');

//This url will change if we're in development and we're using Browsersync's proxy
var url = '/api/search';

var YoutubeService = function () {

};

YoutubeService.prototype.search = function (searchValue, callBack) {
    request({
        url: url,
        method: 'POST',
        data: {
            q: searchValue
        },
        success: callBack
    });
};

module.exports = new YoutubeService();
