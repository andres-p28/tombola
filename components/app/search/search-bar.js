// VENDOR
var React = require('react');

// APP COMPONENTS
var ClearButton = require('components/app/common/clear-button');

// CORE COMPONENTS
var Input = require('components/core/input');

var SearchBar = React.createClass({

    propTypes: {
        onSearch: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            searchValue: ''
        };
    },

    render: function () {
        return (
            <div className="search-bar">
                <div className="search-bar--input">
                    <Input value={this.state.searchValue} className="search" onChange={this.handleSearch} placeholder="Search for a song..."/>
                    {this.renderClearButton()}
                </div>
                <div className="search-bar--button">
                </div>
            </div>
        );
    },

    renderClearButton: function () {
        var clearButton = null;

        if (this.state.searchValue) {
            clearButton = <ClearButton onClick={this.handleCleanSearch}/>;
        }

        return clearButton;
    },

    handleSearch: function (event) {
        var value = event.target.value;
        this.setState({
            searchValue: value
        }, this.props.onSearch(value));
    },

    handleCleanSearch: function () {
        this.setState({
            searchValue: ''
        }, this.props.onSearch(''));
    }

});

module.exports = SearchBar;
