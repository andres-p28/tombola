// VENDOR LIBS
var React = require('react');
var _ = require('lodash');

var Link = React.createClass({

    render: function () {

        return (
            <a {...this.getProps()} >
                {this.props.children}
            </a>
        );
    },

    getProps: function () {
        return {
            href: this.props.href
        };
    }

});

module.exports = Link;
