var YoutubeNode = require('youtube-node');
var Youtube = new YoutubeNode();

var config = {
    apiKey: 'AIzaSyCyDslI4E40H9dYE_V_18dDlhTCCWOzt4Q',
    type: 'video',
    videoDuration: 'short',
    videoLicense: 'youtube',
    order: 'viewCount',
    searchQuantity: 12
}

var YoutubeApi = function(){
    this.youtube = Youtube;
    this.youtube.setKey(config.apiKey);
    this.youtube.addParam('type', config.type);
    this.youtube.addParam('videoDuration', config.videoDuration);
    this.youtube.addParam('videoLicense', config.videoLicense);
    this.youtube.addParam('order', config.order);
}

YoutubeApi.prototype.setAPIKey = function(apiKey) {
    this.youtube.setKey(apiKey);
};

YoutubeApi.prototype.search = function(searchValue, callBack) {
    this.youtube.search(searchValue, config.searchQuantity, callBack);
}

module.exports = new YoutubeApi();
