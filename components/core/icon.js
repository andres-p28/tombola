var React = require('react');
var _ = require('lodash');

var icons = ['thumbs-up', 'times'];
var sizes = ['medium', 'small'];

var Icon = React.createClass({

    propTypes: {
        icon: React.PropTypes.oneOf(icons),
        iconSize: React.PropTypes.oneOf(sizes)
    },

    render: function () {
        return (
            <img {...this.getProps()} />
        );
    },

    getProps: function () {
        return _.assign({}, {
            className: 'icon',
            src: this.getIcon(),
        }, this.getSize());
    },

    getIcon: function () {
        var iconFolder = 'images/icons/';

        if(this.props.icon == 'thumbs-up') {
            return iconFolder + 'thumbs-up.svg';
        }

        if(this.props.icon == 'times') {
            return iconFolder + 'times.svg';
        }

        return iconFolder + 'thumbs-up.svg';
    },

    getSize: function () {
        if(this.props.iconSize == 'medium'){
            return {height: '24px', width: '24px'}
        }
        if(this.props.iconSize == 'small'){
            return {height: '16px', width: '16px'}
        }
        return {height: '32px', width: '32px'}
    }

});

module.exports = Icon;
