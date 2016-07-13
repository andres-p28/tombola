var _ = require('lodash');
var classNames = require('classnames');
var React = require('react');

var Thumbnail = React.createClass({

    getInitialState: function () {
        return {
            loaded: false
        };
    },

    render: function () {
        return (
            <img {...this.getProps()} />
        );
    },

    getProps: function () {
        return _.assign({}, this.props, {
            className: this.getClass(),
            onLoad: this.handleImageLoaded
        });
    },

    getClass: function () {
        return classNames({
            'thumbnail': true,
            'thumbnail--loading': !this.state.loaded
        }, this.props.className);
    },

    handleImageLoaded: function () {
        this.setState({
            loaded: true
        });
    }

});

module.exports = Thumbnail;
