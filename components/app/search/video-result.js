// VENDOR LIBS
var classNames = require('classnames');
var React = require('react');

// CORE COMPONENTS
var Thumbnail = require('components/core/thumbnail');
var Title = require('components/core/title');
var VoteButton = require('components/app/common/vote-button');

var VideoResult = React.createClass({

    propTypes: {
        isSelected: React.PropTypes.bool.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        onVote: React.PropTypes.func.isRequired,
        result: React.PropTypes.object.isRequired,
        showVoteButton: React.PropTypes.bool.isRequired
    },

    render: function () {
        //TODO: make a second call to youtube api to get the duration of each video.
        var video = this.parseResult(this.props.result);
        
        return (
            <div {...this.getProps()}>
                <Title titleType="videoTitle">{video.title}</Title>
                <Thumbnail {...this.getThumbnailProps(video.thumbnail)} />
                {this.renderVoteButton()}
                <div className="video-result__duration">5:31</div>
            </div>
        );
    },

    renderVoteButton: function () {
        var voteButton = null;

        if (this.props.isSelected && this.props.showVoteButton) {
            voteButton = <VoteButton onClick={this.handleVote} buttonType="secondary" className="video-result__vote-button"/>;
        }

        return voteButton;
    },

    getProps: function() {
        return {
            className: this.getClass(),
            onClick: this.handleClick
        };
    },

    getClass: function () {
        return classNames({
            'video-result': true,
            'video-result--selected': this.props.isSelected
        });
    },

    getThumbnailProps: function (thumbnail) {
        return {
            height: thumbnail.height,
            src: thumbnail.url,
            width: thumbnail.width
        };
    },

    handleClick: function () {
        this.props.onSelect(this.props.result.id.videoId);
    },

    handleVote: function () {
        this.props.onVote(this.props.result.id.videoId);
    },

    parseResult: function (result) {
        var snippet = result.snippet;

        return {
            title: snippet.title,
            thumbnail: snippet.thumbnails.medium
        };
    }
});

module.exports = VideoResult;
