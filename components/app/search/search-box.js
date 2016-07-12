var React = require('react');

//Components
var SearchBar = require('components/app/search/search-bar');
var SearchResults = require('components/app/search/search-results');

//Services
var YoutubeService = require('services/youtube-service');

var SearchBox = React.createClass({

    getInitialState: function () {
        return {
            searchValue: '',
            searchResults: [],
            selectedVideoId: '',
            isAddAllowed: false
        }
    },

    render: function () {
        return (
            <div className="search-box">
                <SearchBar onSearch={this.handleSearch} allowAdd={this.state.isAddAllowed}/>
                <SearchResults searchResults={this.state.searchResults} onSelect={this.handleSelect}/>
            </div>
        );
    },

    handleSearch: function (value) {
        this.setState({
            searchValue: value
        }, this.conditionallyDoSearch);
    },

    handleSelect: function (videoId) {
        this.setState({
            selectedVideoId: videoId,
            isAddAllowed: this.isAddAllowed()
        });
    },

    isAddAllowed: function () {
        //TODO: Check if video is not on the playlist with a store
        var allowed = false;
        var videoIsNotInPlaylist = true;

        if (this.state.selectedVideoId !== '' && videoIsNotInPlaylist) {
            allowed = true;
        }

        return allowed;

    },

    conditionallyDoSearch: function () {
        if (this.state.searchValue) {
            this.doSearch()
        } else {
            this.setState({
                searchResults: [],
                isAddAllowed: false
            })
        }

        this.isAddAllowed();

    },

    doSearch: function () {
        YoutubeService.search(this.state.searchValue, function(error, results){
            this.setState({
                searchResults: results.items
            })
        }.bind(this))
    }
});

module.exports = SearchBox;
