// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var ClearButton = React.createClass({

    render: function () {
        return (
            <Button {...this.getProps()}>
                <Icon icon="times" iconSize="small"/>
            </Button>
        );
    },

    getProps: function () {
        return _.extend({}, this.props, {
            isInputButton: true
        });
    }
});

module.exports = ClearButton;
