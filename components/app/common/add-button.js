// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var AddButton = React.createClass({

    render: function () {
        return (
            <Button {...this.props} buttonType="add-button">
                <Icon iconType="iconInButton" iconSize="medium" icon="add" /> <span>Add to List</span>
            </Button>
        );
    }
});

module.exports = AddButton;
