// VENDOR LIBS
var React = require('react');

// APP COMPONENTS
var Header = require('components/app/common/header');

var Layout = React.createClass({

    render: function () {
        return (
            <div className="app">
                <Header />
                {React.cloneElement(this.props.children)}
            </div>
        );
    }
});

module.exports = Layout;
