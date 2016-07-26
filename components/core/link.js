// VENDOR LIBS
var classNames = require('classnames');
var React = require('react');
var _ = require('lodash');

var types = ['sign-in-out'];

var Link = React.createClass({

    propTypes: {
        linkType: React.PropTypes.oneOf(types)
    },

    render: function () {

        return (
            <a {...this.getProps()} >
                {this.props.children}
            </a>
        );
    },

    getProps: function () {
        return {
            className: this.getClass(),
            href: this.props.href
        };
    },

    getClass: function () {
        return classNames({
            'link' : true,
            'link--sign-in-out': (this.props.linkType === 'sign-in-out')
        }, this.props.className)
    }

});

module.exports = Link;
