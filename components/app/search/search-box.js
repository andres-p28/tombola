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
            searchResults: []
        }
    },

    render: function () {
        return (
            <div className="search-box">
                <SearchBar onSearch={this.handleSearch} /> 
                <SearchResults searchResults={this.state.searchResults} />
            </div>
        );
    },

    handleSearch: function (value) {
        this.setState({
            searchValue: value
        }, this.conditionallyDoSearch)
    },

    conditionallyDoSearch: function () {
        if (this.state.searchValue) {
            this.doSearch()
        } else {
            this.setState({
                searchResults: []
            })
        }
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
