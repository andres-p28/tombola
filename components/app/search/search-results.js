var React = require('react');

//Components
var Title = require('components/core/title');
var VideoResult = require('components/app/search/video-result');

var SearchResults = React.createClass({

    propTypes: {
        searchResults: React.PropTypes.array,
        onSelect: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            selectedVideoId: ''
        };
    },

    render: function () {
        return (
            <div className="search-results">
                {this.props.searchResults.map(this.renderResult)}
            </div>
        );
    },

    renderResult: function (result, key) {
        videoId = result.id.videoId;
        return (
            <VideoResult isSelected={this.isSelected(videoId)} key={videoId} result={result} onSelect={this.handleSelect}/>
        );
    },

    handleSelect: function (videoId) {
        this.setState({
            selectedVideoId: videoId
        }, this.props.onSelect);
    },

    isSelected: function (videoId) {
        return this.state.selectedVideoId === videoId;
    }

});

module.exports = SearchResults;
