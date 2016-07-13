var React = require('react');

//Components
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var AddButton = React.createClass({

    render: function () {
        return (
            <div>
                <Button buttonType="primary">
                    <Icon icon="add" />
                </Button>
                <Button buttonType="secondary">
                    <Icon icon="add" />
                </Button>
                <Button buttonType="tertiary">
                    <Icon icon="add" />
                </Button>
            </div>
        );
    }
});

module.exports = AddButton;
