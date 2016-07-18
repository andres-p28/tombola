// VENDOR LIBS
var classNames = require('classnames');
var React = require('react');
var Utils = require('services/utils')

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
        return (
            <div {...this.getProps()}>
                <Title titleType="videoTitle">{this.props.result.title}</Title>
                <Thumbnail {...this.getThumbnailProps(this.props.result.thumbnails.medium)} />
                {this.renderVoteButton()}
                <div className="video-result--duration">
                    {Utils.parseISO8601ToString(this.props.result.duration)}
                </div>
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

    getProps: function () {
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
        this.props.onSelect(this.props.result.id);
    },

    handleVote: function () {
        this.props.onVote(this.props.result.id);
    }
});

module.exports = VideoResult;
