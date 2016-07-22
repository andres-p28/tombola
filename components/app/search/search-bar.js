// VENDOR
var React = require('react');

// APP COMPONENTS
var AddButton = require('components/app/common/add-button');
var ClearButton = require('components/app/common/clear-button');

// CORE COMPONENTS
var Button = require('components/core/button');
var Input = require('components/core/input');

var SearchBar = React.createClass({

    propTypes: {
        addDisabled: React.PropTypes.bool.isRequired,
        onAddSong: React.PropTypes.func.isRequired,
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
                    <Input {...this.getInputProps()} />
                    {this.renderClearButton()}
                </div>
                <div className="search-bar--button">
                    <AddButton {...this.getAddButtonProps()} />
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

    getInputProps: function () {
        return {
            className: 'search',
            onChange: this.handleSearch,
            placeholder: 'Search for a song...',
            value: this.state.searchValue
        };
    },

    getAddButtonProps: function () {
        return {
            disabled: (this.props.addDisabled),
            onClick: this.props.onAddSong
        };
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
