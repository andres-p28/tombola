// VENDOR LIBS
var React = require('react');

// APP COMPONENTS
var Header = require('components/app/common/header');
var UserActions = require('actions/user-actions');
var UserStore = require('stores/user-store');

var Layout = React.createClass({

    getInitialState: function () {
        return {
            currentUser: null
        };
    },

    componentDidMount: function () {
        UserStore.addChangeListener(this.onLoggedUser);
        UserActions.loginUser();
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onLoggedUser);
    },

    render: function () {
        return (
            <div className="app">
                <Header currentUser={this.state.currentUser} />
                {React.cloneElement(this.props.children)}
            </div>
        );
    },

    onLoggedUser: function () {
        this.setState({
            currentUser: UserStore.getCurrentUser()
        });
    }

});

module.exports = Layout;
