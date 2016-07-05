var React = require('react');

var Row = React.createClass({
    render: function() {
        return (
            <div className="grid__row">{this.props.children}</div>
        );
    }
});

module.exports = Row;
