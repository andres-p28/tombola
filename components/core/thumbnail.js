var React = require('react');
var _ = require('lodash');
var classNames = require('classnames');

var block = 'thumbnail';

var Thumbnail = React.createClass({

    getInitialState: function () {
        return {
            loaded: false
        }
    },

    render: function () {
        return (
            <img {...this.getProps()} />
        )
    },

    getProps: function () {
        return _.assign({}, this.props, {
            className: this.getClass(),
            onLoad: this.handleImageLoaded
        });
    },

    getClass: function () {
        return classNames(block, this.props.className, {
            'thumbnail--loading': !this.state.loaded
        });
    },

    handleImageLoaded: function () {
        this.setState({
            loaded: true
        });
    }

});

module.exports = Thumbnail;
