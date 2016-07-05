var React = require('react');
var ResultItem = require('components/app/result-item');
var Row = require('components/core/row');

var ResultList = React.createClass({

    propTypes: {
        searchResults: React.PropTypes.array,
        handleVideoSelection: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="result-list">
                {this.renderResults()}
            </div>
        );
    },

    getInitialState: function(){
        return {
            selectedVideo: ''
        }
    },

    renderResults: function(){
        return (
            <Row>
                {this.props.searchResults.map(this.mapItem)}
            </Row>
        );
    },

    onVideoSelection: function(selectedVideo){
        this.setState({
            selectedVideo: selectedVideo
        }, this.props.handleVideoSelection(selectedVideo));
    },

    isVideoSelected: function(item){
        return item.id.videoId === this.state.selectedVideo;
    },

    mapItem: function(item, index){
        return (
            <ResultItem item={item} key={index} layout="grid" handleSelect={this.onVideoSelection} isSelected={this.isVideoSelected(item)}/>
        );
    }

});

module.exports = ResultList;
