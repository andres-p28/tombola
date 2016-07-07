var React = require('react');

var Button = React.createClass({
    render: function () {
        return (
            <button>{this.props.children}</button>
        );
    }
});

module.exports = Button;
