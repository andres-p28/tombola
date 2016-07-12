var React = require('react');

//Components
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
        return _.assign({}, this.props, {
            isInputButton: true
        });
    },

});

module.exports = ClearButton;
