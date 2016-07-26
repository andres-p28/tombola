// VENDOR LIBS
var React = require('react');

// CORE LIBS
var UserService = require('services/user-service');
var UserStore = require('stores/user-store');


// CORE COMPONENTS
var Link = require('components/core/link');

var UserMenu = React.createClass({

    getInitialState: function () {
        return {
            currentUser: null,
            googleAuthUrl: ''
        };
    },

    componentDidMount: function () {
        UserService.generateAuthUrl(function (response) {
            this.setState({
                googleAuthUrl: response.url
            });
        }.bind(this));
        UserStore.addChangeListener(this.onLoggedUser);
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onLoggedUser);
    },

    render: function () {
        return (
            <div className="user-menu">
                <div className="user-menu--user-info">
                    {this.renderUserInfo()}
                </div>
                <div className="user-menu--user-auth">
                    {this.renderSingInOut()}
                </div>
            </div>
        );
    },

    renderUserInfo: function () {
        var userInfo = '';

        if (this.state.currentUser) {
            userInfo = 'Welcome, ' + this.state.currentUser.name;
        }

        return userInfo;
    },

    renderSingInOut: function () {
        var singInOut = <Link linkType="sign-in-out" href={this.state.googleAuthUrl}>Login with Google</Link>;

        if (this.state.currentUser) {
            singInOut = <Link linkType="sign-in-out" href="/api/auth/google/logout">Logout</Link>;
        }

        return singInOut;
    },

    onLoggedUser: function () {
        this.setState({
            currentUser: UserStore.getCurrentUser()
        });
    }

});

module.exports = UserMenu;
