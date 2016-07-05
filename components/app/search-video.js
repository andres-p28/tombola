var React = require('react');
var SearchVideo = require('components/core/input');
var Input = require('components/core/input');

var SearchVideo = React.createClass({

    propTypes: {
        handleSearch: React.PropTypes.func.isRequired
    },


    render: function(){
        return(
            <div className='search-video'>
                <span onClick={this.clearSearch} className='search-video__clear-icon'>X</span>
                <Input className='search-video__input' type='text' placeholder='Videos name' value={this.state.inputValue} onChange={this.handleChange}/>
            </div>
        );
    },

    getInitialState: function () {
        return {
            inputValue: ''
        };
    },

    handleChange: function(event){
        var value = event.target.value;

        this.setState({
            inputValue: value
        }, this.props.handleSearch.bind(null, value));
    },

    clearSearch: function(){
        this.setState({
            inputValue: ''
        }, this.props.handleSearch.bind(null, ''));
    }

});

module.exports = SearchVideo;
