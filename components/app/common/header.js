// VENDOR LIBS
var React = require('react');

// APP COMPONENTS
var UserMenu = require('components/app/common/user-menu');

var Header = React.createClass({

    render: function () {
        return (
            <div className="header">
                <UserMenu />
            </div>
        );
    }
})

module.exports = Header;
