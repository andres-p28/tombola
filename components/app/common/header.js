// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Link = require('components/core/link');
var UserService = require('services/user-service');

var Header = React.createClass({

    propTypes: {
        currentUser: React.PropTypes.object
    },

    getInitialState: function () {
        return {
            googleAuthUrl: ''
        };
    },

    componentDidMount: function () {
        UserService.generateAuthUrl(function (response) {
            this.setState({
                googleAuthUrl: response.url
            });
        }.bind(this));
    },

    render: function () {
        return (
            <div className="header">
                {this.renderUserMenu()}
            </div>
        );
    },

    renderUserMenu: function () {
        var userMenu = <Link href={this.state.googleAuthUrl}>Login</Link>;

        if (this.props.currentUser) {
            userMenu = <div>Bienvenido {this.props.currentUser.name}</div>
        }

        return userMenu
    }
})

module.exports = Header;
