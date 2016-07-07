var React = require('react');

var Layout = React.createClass({

    render: function () {
        return (
            <div className="app">
                {React.cloneElement(this.props.children)}
            </div>
        );
    }
});

module.exports = Layout;
