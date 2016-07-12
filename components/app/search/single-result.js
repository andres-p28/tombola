var React = require('react');

//Components
var Title = require('components/core/title');
var Thumbnail = require('components/core/thumbnail');

var SingleResult = React.createClass({

    propTypes: {
        result: React.PropTypes.object.isRequired
    },

    render: function () {
        //TODO: make a second call to youtube api to get the duration of each video.
        var video = this.parseResult(this.props.result)
        return (
            <div className="single-result">
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

    parseResult: function (result) {
        var snippet = result.snippet;
        return {
            title: snippet.title,
            thumbnail: snippet.thumbnails.medium
        }
    }

});

module.exports = SingleResult;
