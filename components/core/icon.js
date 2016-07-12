var _ = require('lodash');
var classNames = require('classnames');
var React = require('react');

var icons = ['thumbs-up', 'times'];
var sizes = ['medium', 'small'];

var Icon = React.createClass({

    propTypes: {
        icon: React.PropTypes.oneOf(icons).isRequired,
        iconSize: React.PropTypes.oneOf(sizes)
    },

    render: function () {
        return (
            <img {...this.getProps()} />
        );
    },

    getProps: function () {
        return _.assign({}, {
            className: this.getClass(),
            src: this.getIcon(),
        }, this.getSize());
    },

    getClass: function () {
        return classNames({
            'icon': true,
        }, this.props.className);
    },

    getIcon: function () {
        var iconFolder = 'images/icons/';
        var extension = '.svg';
        
        return iconFolder + this.props.icon + extension;
    },

    getSize: function () {
        var defaultSize = 32;
        var size = {
            height: defaultSize + 'px',
            width: defaultSize + 'px'
        };

        if (this.props.iconSize == 'small') {
            size = {
                height: defaultSize/2 + 'px',
                width: defaultSize/2 + 'px'
            };
        }

        if (this.props.iconSize == 'medium') {
            size = {
                height: defaultSize/1.5 + 'px',
                width: defaultSize/1.5 + 'px'
            };
        }

        return size;
    }

});

module.exports = Icon;
