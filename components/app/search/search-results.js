var React = require('react');

//Components
var Title = require('components/core/title');
var VideoResult = require('components/app/search/video-result');

var SearchResults = React.createClass({

    propTypes: {
        isVoteAllowed: React.PropTypes.bool.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        onVote: React.PropTypes.func.isRequired,
        searchResults: React.PropTypes.array
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
            <VideoResult isSelected={this.isSelected(videoId)} key={videoId} result={result} onSelect={this.handleSelect} showVoteButton={this.props.isVoteAllowed} onVote={this.props.onVote} />
        ); 
    },

    handleSelect: function (videoId) {
        this.setState({
            selectedVideoId: videoId
        });
        this.props.onSelect(videoId);
    },

    isSelected: function (videoId) {
        return this.state.selectedVideoId === videoId;
    }

});

module.exports = SearchResults;
