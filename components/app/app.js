var React = require('react');
var SearchBox = require('components/app/search-box');
var VideoPlayer = require('components/app/video-player');

var App = React.createClass({

    render: function (){
        return (
            <div className="app">
                <h1 className="app__title">Tómbola</h1>
                {this.state.selectedVideo != '' ? this.renderVideoPlayer() : null}
                <SearchBox onAddedVideo={this.onAddedVideo}/>
            </div>
        );
    },

    getInitialState: function(){
        return{
            selectedVideo: ''
        }
    },

    onAddedVideo: function(selectedVideo){
        this.setState({
            selectedVideo: selectedVideo
        })
    },

    renderVideoPlayer: function(){
        return(
            <VideoPlayer videoId={this.state.selectedVideo} />
        );
    }

})

module.exports = App;
