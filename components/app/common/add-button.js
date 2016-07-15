// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var AddButton = React.createClass({

    render: function () {
        return (
            <Button buttonType="primary">
                <Icon icon="add" />
            </Button>
        );
    }
});

module.exports = AddButton;
