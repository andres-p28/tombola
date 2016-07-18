// VENDOR LIBS
var request = require('reqwest');

var url = 'http://localhost:3000/api/search';

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
