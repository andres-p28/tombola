// VENDOR LIBS
var React = require('react');
var _ = require('lodash');

// APP COMPONENTS
var SearchBar = require('components/app/search/search-bar');
var SearchResults = require('components/app/search/search-results');

// SERVICES
var YoutubeService = require('services/youtube-service');

var SearchBox = React.createClass({

    getInitialState: function () {
        return {
            mockedVideoSelected: 0,
            searchResults: [],
            searchValue: '',
            selectedVideoId: null
        };
    },

    render: function () {
        return (
            <div className="search-box">
                <SearchBar onSearch={this.handleSearch} addDisabled={this.isAddDisabled()} onAddSong={this.handleAddSong} />
                <SearchResults onVote={this.handleVote} searchResults={this.state.searchResults} onSelect={this.handleSelect} isVoteAllowed={this.isAddDisabled()} />
            </div>
        );
    },

    handleAddSong: function () {
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
            });
        }
    },

    handleVote: function (videoId) {
        console.log('Voted! ', videoId);
    },

    isAddDisabled: function () {
        // TODO: Remove mockedVideoSelected when real store is created.
        return (_.isNull(this.state.selectedVideoId) || this.state.mockedVideoSelected % 2 === 0);
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
