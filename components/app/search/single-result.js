var React = require('react');
var classNames = require('classnames');

//Components
var Title = require('components/core/title');
var Thumbnail = require('components/core/thumbnail');

var SingleResult = React.createClass({

    propTypes: {
        result: React.PropTypes.object.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired
    },

    render: function () {
        //TODO: make a second call to youtube api to get the duration of each video.
        var video = this.parseResult(this.props.result)
        return (
            <div {...this.getProps()}>
                <Title className="single-result__title" titleType="secondary">{video.title}</Title>
                <Thumbnail
                    src={video.thumbnail.url}
                    width={video.thumbnail.width}
                    height={video.thumbnail.height}>
                </Thumbnail>
                <div className="single-result__duration">5:31</div>
            </div>
        );
    },

    getProps: function() {
        return {
            className: this.getClass(),
            onClick: this.handleClick
        }
    },

    getClass: function () {
        return classNames({
            'single-result': true,
            'single-result--selected': this.props.isSelected
        });
    },

    handleClick: function () {
        this.props.onSelect(this.props.result.id.videoId)
    },

    parseResult: function (result) {
        var snippet = result.snippet;
        return {
            title: snippet.title,
            thumbnail: snippet.thumbnails.medium
        }
    }

});

module.exports = SingleResult;
