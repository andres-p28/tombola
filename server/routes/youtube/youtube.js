var google = require('googleapis');
var _ = require('lodash');

var config = {
    apiKey: 'AIzaSyCyDslI4E40H9dYE_V_18dDlhTCCWOzt4Q',
    params: {
        order: 'viewCount',
        searchQuantity: 12,
        part: 'id, snippet',
        type: 'video',
        videoDuration: 'short',
        videoLicense: 'youtube'
    } 
};

var Youtube = function(){
    this.api = google.youtube({
        version: 'v3',
        auth: config.apiKey
    });
}

Youtube.prototype.search = function (q, callBack) {
    this.initialSearch(q, function(err, videos){
        if (err) {
            callBack(err, null);
        } else {
            this.getExtraInformation(videos, function(err, videosWithDetails){
                if (err) {
                    callBack(err, null);
                } else {
                    callBack(null, videosWithDetails);
                }
            })
        }
    }.bind(this));
};

Youtube.prototype.initialSearch = function (searchValue, callBack) {
    this.api.search.list({
        maxResults: config.params.searchQuantity,
        order: config.params.order,
        part: config.params.part,
        q: searchValue,
        type: config.params.type,
        videoDuration: config.params.videoDuration
    }, callBack);
};

Youtube.prototype.getExtraInformation = function (videos, callBack) {
    this.api.videos.list({
        id: getVideosIdList(videos),
        part: 'contentDetails'
    }, function(err, videosWithDetails){
        if (err) {
            callBack(err, null);
        } else {
            callBack(null, addExtraInformationToVideos(videos, videosWithDetails));
        }
    });
};

var getVideosIdList = function (videos) {
    var idList = [];

    videos.items.forEach(function(video){
        idList.push(video.id.videoId);
    });

    return idList.join();
};

var addExtraInformationToVideos = function (videos, videosWithDetails) {
    var mergedVideos = [];

    for (i = 0; i < videos.items.length; i++){
        mergedVideos.push(_.merge(videos.items[i], videosWithDetails.items[i]));
    }

    return mergedVideos.map(filterVideoData);
};

var filterVideoData = function (video) {
    return {
        id: video.id,
        duration: video.contentDetails.duration,
        title: video.snippet.title,
        thumbnails: video.snippet.thumbnails
    }
};

module.exports = new Youtube();
