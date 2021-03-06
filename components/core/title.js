// VENDOR LIBS
var _ = require('lodash');
var clamp = require('clamp-js');
var classNames = require('classnames');
var React = require('react');

var titleTypes = ['primary', 'secondary', 'tertiary','videoTitle'];

var Title = React.createClass({

    propTypes: {
        titleType: React.PropTypes.oneOf(titleTypes).isRequired
    },

    componentDidMount: function () {
        this.doEllipsis(this.componentReference);
    },

    componentDidUpdate: function () {
        this.doEllipsis(this.componentReference);
    },

    render: function () {
        var Tag = this.getTitleType();

        return (
            <Tag {...this.getProps()}>
                {this.props.children}
            </Tag>
        );
    },

    getTitleType: function () {
        var tagsByType = {
            primary: 'h1',
            secondary: 'h2',
            tertiary: 'h3',
            videoTitle: 'h2'
        };

        return tagsByType[this.props.titleType];
    },

    getProps: function () {
        return {
            className: this.getClass(),
            ref: this.getReference
        };
    },

    getClass: function () {
        var titleType = this.props.titleType;

        return classNames({
            'title': true,
            'title--primary': (titleType === 'primary'),
            'title--secondary': (titleType === 'secondary'),
            'title--tertiary': (titleType === 'tertiary'),
            'title--videoTitle': (titleType === 'videoTitle')
        }, this.props.className)
    },

    getReference: function (reference) {
        this.componentReference = reference;
    },

    doEllipsis: function (component) {
        clamp(component, {
            clamp: 'auto'
        });
    }
});

module.exports = Title;
