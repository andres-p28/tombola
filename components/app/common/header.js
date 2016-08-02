// VENDOR LIBS
var React = require('react');

// CORE LIBS
var UserService = require('services/user-service');
var UserActions = require('actions/user-actions');
var UserStore = require('stores/user-store');

var Header = React.createClass({

    getInitialState: function () {
        return {
            currentUser: null
        };
    },

    componentDidMount: function () {
        UserStore.addChangeListener(this.onUserloggedIn);
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onUserloggedIn);
    },

    render: function () {
        return (
            <div className="header">
                {this.renderUserInfo()}
                {this.renderUserActions()}
            </div>
        );
    },

    renderUserInfo: function () {
        var UserInfo = null;

        if (this.state.currentUser) {
            UserInfo = (
                <div className="header--user-info">
                    {this.state.currentUser.displayName}
                </div>
            );
        } else {
            UserInfo = (
                <div className="header--user-info" />
            );
        }

        return UserInfo;
    },

    renderUserActions: function () {
        var UserActions = null;

        if (this.state.currentUser) {
            UserActions = (
                <div className="header--user-actions" onClick={this.logout}>
                    Logout
                </div>
            );
        } else {
            UserActions = (
                <div className="header--user-actions" onClick={this.loginWithGoogle}>
                    Login with google
                </div>
            );
        }

        return UserActions;
    },

    onUserloggedIn: function () {
        this.setState({
            currentUser: UserStore.getCurrentUser()
        });
    },

    loginWithGoogle: function () {
        UserService.loginWithGoogle(function (err, result) {
            if (!err) {
                UserActions.login(result.user);
                UserService.authorizeInServer();
            }
        });
    },

    logout: function () {
        UserService.logout(function (err, result) {
            if (!err) {
                UserActions.logout();
                UserService.logoutInServer();
            }
        });
    }

});

module.exports = Header;
