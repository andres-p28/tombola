var React = require('react');
var YoutubePlayer = require('react-youtube-player');

var VideoPlayer = React.createClass({

    propTypes: {
        videoId: React.PropTypes.string
    },

    render: function() {
        return (
            <YoutubePlayer videoId={this.props.videoId} width="640" height="390"/>
        );
    }
});

module.exports = VideoPlayer;
