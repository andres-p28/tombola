var React = require('react');

var Icon = require('components/core/icon');
var Button = require('components/core/button');

var CleanButton = React.createClass({

    render: function () {
        return(
            <Button {...this.getProps()}>
                <Icon icon="times" iconSize="small"/>
            </Button>
        )
    },

    getProps: function () {
        return _.assign({}, this.props, {
            isInputButton: true
        });
    },

});

module.exports = CleanButton;
