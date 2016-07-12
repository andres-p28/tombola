var React = require('react');

//Components
var Button = require('components/core/button');
var Input = require('components/core/input');
var CleanButton = require('components/app/common/clean-button');

var SearchBar = React.createClass({

    propTypes: {
        allowAdd: React.PropTypes.bool.isRequired,
        onSearch: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            searchValue: ''
        }
    },

    render: function () {
        return (
            <div className="search-bar">
                <div className="search-bar__input">
                    <Input value={this.state.searchValue} className="search" onChange={this.handleSearch} placeholder="Search for a song..."/>
                    {this.renderCleanButton()}
                </div>
                <div className="search-bar__button">
                    <Button disabled={!this.props.allowAdd}>ADD TO LIST</Button>
                </div>
            </div>
        )
    },

    renderCleanButton: function () {
        if (this.state.searchValue) {
            return (
                <CleanButton onClick={this.handleCleanSearch}/>
            );
        } else {
            return null;
        }
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
