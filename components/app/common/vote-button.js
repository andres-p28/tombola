var React = require('react');
var Icon = require('components/core/icon');
var Button = require('components/core/button');

var VoteButton = React.createClass({

    render: function () {
        return(
            <Button isRounded>
                <Icon icon="thumbs-up" />
            </Button>
        )
    }
});

module.exports = VoteButton;
