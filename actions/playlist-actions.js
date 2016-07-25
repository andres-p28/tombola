var AppDispatcher = require('dispatcher/app-dispatcher');
var PlaylistConstants = require('constants/playlist-constants');

var PlaylistActions = {
    addSong: function (video) {
        AppDispatcher.handleViewAction({
            actionType: PlaylistConstants.ADD_SONG,
            video: video
        });
    }
};

module.exports = PlaylistActions;
