var React = require('react');
var YoutubeApi = require('services/youtube-api');

var SearchVideo = require('components/app/search-video');
var ResultList = require('components/app/result-list');
var Button = require('components/core/button');

var SearchBox = React.createClass({

    propTypes: {
        onAddedVideo: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="search-box">
                {this.state.selectedVideo != '' ? this.renderAddButton() : null}
                <SearchVideo handleSearch={this.handleSearch}/>
                <ResultList handleVideoSelection={this.handleVideoSelection} searchResults={this.state.searchResults} />
            </div>
        );
    },

    getInitialState: function() {
        return {
            searchValue: '',
            searchResults: [],
            selectedVideo: ''
        };
    },

    handleSearch: function(searchValue) {
        this.setState({
            searchValue: searchValue
        }, this.conditionallyDoSearch)
    },

    conditionallyDoSearch: function() {
        if (this.state.searchValue){
            this.doSearch();
        } else {
            this.setState({
                searchResults: [],
                selectedVideo: ''
            });
        }
    },

    doSearch: function() {
        YoutubeApi.search(this.state.searchValue, function(error, results){
            this.setState({
                searchResults: results.items
            })
        }.bind(this));
    },

    handleVideoSelection: function(selectedVideo){
        this.setState({
            selectedVideo: selectedVideo
        })
    },

    handleAddVideo: function(){
        this.props.onAddedVideo(this.state.selectedVideo);
    },

    renderAddButton: function(){
        return (
            <Button onClick={this.handleAddVideo}>Add video</Button>
        )
    }

});

module.exports = SearchBox;
