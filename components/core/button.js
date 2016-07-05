var React = require('react');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function() {
        return (
            <button {...this.props}>{this.props.children}</button>
        );
    }

});

module.exports = Button;
