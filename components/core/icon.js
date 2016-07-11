var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var icons = ['thumbs-up', 'times'];
var sizes = ['medium', 'small'];
var block = 'icon';

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
        return classNames(block, this.props.className)
    },

    getIcon: function () {
        var iconFolder = 'images/icons/';
        var extension = '.svg';
        return iconFolder + this.props.icon + extension;
    },

    getSize: function () {
        var size = 16;
        if(this.props.iconSize == 'medium'){
            return {height: size*1.5 + 'px', width: size*1.5 + 'px'}
        }
        if(this.props.iconSize == 'small'){
            return {height: size + 'px', width: size + 'px'}
        }
        return {height: size*2 + 'px', width: size*2 + 'px'}
    }

});

module.exports = Icon;
