// VENDOR LIBS
var _ = require('lodash');
var inherits = require('inherits');

// CORE LIBS
var AppDispatcher = require('dispatcher/app-dispatcher');
var BaseStore = require('stores/base-store');
var PlaylistConstants = require('constants/playlist-constants');

var playlist = [];

var PlaylistStore = function PlaylistStore () {
    this.playlist = playlist;
    AppDispatcher.register(this.handleAction.bind(this));
};

inherits(PlaylistStore, BaseStore);

PlaylistStore.prototype.handleAction = function (payload) {
    var action = payload.action;

    if (action.actionType == PlaylistConstants.ADD_SONG) {
        this.addSong(action.video);
    }

    return true;
};

PlaylistStore.prototype.addSong = function (video) {
    this.playlist.push(video);
    this.emitChange();
};

PlaylistStore.prototype.getSongsInPlaylist = function () {
    console.log(this.playlist);
    return this.playlist;
};

PlaylistStore.prototype.isVideoOnPlaylist = function (selectedVideoId) {
    return _.some(this.playlist, {videoId: selectedVideoId});
};

module.exports = new PlaylistStore();
