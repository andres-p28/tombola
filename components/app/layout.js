// VENDOR LIBS
var React = require('react');

// APP COMPONENTS
var Header = require('components/app/common/header');
var UserActions = require('actions/user-actions');

var Layout = React.createClass({

    componentDidMount: function () {
        UserActions.loginUser();
    },

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
