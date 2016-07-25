// VENDOR LIBS
var React = require('react');
var request = require('reqwest');

// APP COMPONENTS
var SearchBar = require('components/app/search/search-bar');
var SearchResults = require('components/app/search/search-results');

// SERVICES
var YoutubeService = require('services/youtube-service');

// STORES
var PlaylistStore = require('stores/playlist-store');

// ACTIONS
var PlaylistActions = require('actions/playlist-actions');

var SearchBox = React.createClass({

    getInitialState: function () {
        return {
            isAddAllowed: false,
            searchResults: [],
            searchValue: '',
            selectedVideoId: '',
            songsInPlaylist: []
        };
    },

    componentDidMount: function () {
        this.getSongsInPlaylist();
        PlaylistStore.addChangeListener(this.onAddedSong);
    },

    componentWillUnmount: function () {
        PlaylistStore.removeChangeListener(this.onAddedSong);
    },

    render: function () {
        return (
            <div className="search-box">
                <SearchBar onSearch={this.handleSearch} allowAdd={this.state.isAddAllowed} onAddSong={this.handleAddSong} />
                <SearchResults onVote={this.handleVote} searchResults={this.state.searchResults} onSelect={this.handleSelect} isVoteAllowed={!this.state.isAddAllowed} />
            </div>
        );
    },

    getSongsInPlaylist: function () {
        this.setState({
            songsInPlaylist: PlaylistStore.getSongsInPlaylist()
        })
    },

    onAddedSong: function () {
        this.getSongsInPlaylist();
        this.setState({
            isAddAllowed: false
        })
    },

    handleAddSong: function () {
        PlaylistActions.addSong({
            videoId: this.state.selectedVideoId
        });
    },

    handleSearch: function (value) {
        this.setState({
            searchValue: value
        }, this.conditionallyDoSearch);
    },

    handleSelect: function (videoId) {
        if (this.state.selectedVideoId !== videoId) {
            this.setState({
                selectedVideoId: videoId
            }, this.isAddAllowed);
        }
    },

    handleVote: function (videoId) {
        console.log('Voted! ', videoId);
    },

    isAddAllowed: function () {
        var allowed = false;
        var isVideoOnPlaylist = this.isVideoOnPlaylist(this.state.selectedVideoId);

        if (this.state.selectedVideoId !== '' && !isVideoOnPlaylist) {
            allowed = true;
        }

        this.setState({
            isAddAllowed: allowed
        });
    },

    isVideoOnPlaylist: function () {
        return PlaylistStore.isVideoOnPlaylist(this.state.selectedVideoId);
    },

    conditionallyDoSearch: function () {
        if (this.state.searchValue) {
            this.doSearch();
        } else {
            this.setState({
                searchResults: [],
                isAddAllowed: false
            });
        }
    },

    doSearch: function () {
        YoutubeService.search(this.state.searchValue, function(results){
            this.setState({
                searchResults: results
            });
        }.bind(this));
    }
});

module.exports = SearchBox;
