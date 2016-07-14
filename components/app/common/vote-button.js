// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Button = require('components/core/button');
var Icon = require('components/core/icon');

var VoteButton = React.createClass({

    render: function () {
        return (
            <Button isRounded>
                <Icon icon="thumbs-up" />
            </Button>
        );
    }
});

module.exports = VoteButton;
