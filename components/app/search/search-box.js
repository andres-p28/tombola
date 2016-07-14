var React = require('react');

//Components
var SearchBar = require('components/app/search/search-bar');
var SearchResults = require('components/app/search/search-results');

//Services
var YoutubeService = require('services/youtube-service');

var SearchBox = React.createClass({

    getInitialState: function () {
        return {
            isAddAllowed: false,
            mockedVideoSelected: 0,
            searchResults: [],
            searchValue: '',
            selectedVideoId: ''
        };
    },

    render: function () {
        return (
            <div className="search-box">
                <SearchBar onSearch={this.handleSearch} allowAdd={this.state.isAddAllowed} onAddSong={this.handleAddSong} />
                <SearchResults onVote={this.handleVote} searchResults={this.state.searchResults} onSelect={this.handleSelect} isVoteAllowed={!this.state.isAddAllowed} />
            </div>
        );
    },

    handleAddSong: function () {
        //Mocked: song added to list
        console.log('Added!');
    },

    handleSearch: function (value) {
        this.setState({
            searchValue: value
        }, this.conditionallyDoSearch);
    },

    handleSelect: function (videoId) {
        if (this.state.selectedVideoId !== videoId) {
            this.setState({
                mockedVideoSelected: this.state.mockedVideoSelected + 1,
                selectedVideoId: videoId
            }, this.isAddAllowed);
        }
    },

    handleVote: function (videoId) {
        console.log('Voted! ', videoId);
    },

    isAddAllowed: function () {
        var allowed = false;
        //TODO: check this on a store
        var isVideoOnPlaylist = false;

        //Mocked: this simulates a video in the playlist
        if (this.state.mockedVideoSelected % 2 === 0) {
            isVideoOnPlaylist = true;
        }

        if (this.state.selectedVideoId !== '' && !isVideoOnPlaylist) {
            allowed = true;
        }

        this.setState({
            isAddAllowed: allowed
        });
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
