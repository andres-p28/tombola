// VENDOR
var React = require('react');

// COMPONENTS
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var AddButtonDemo = React.createClass({

    render: function () {
        return (
            <Button buttonType="primary">
                <Icon icon="add" />
            </Button>
        );
    }
});

module.exports = AddButtonDemo;
