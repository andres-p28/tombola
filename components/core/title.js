var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');
var clamp = require('clamp-js');

var titleTypes = ['primary', 'secondary', 'tertiary'];
var block = 'title'

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
            tertiary: 'h3'
        }

        return tagsByType[this.props.titleType];
    },

    getProps: function () {
        return {
            className: this.getClass(),
            ref: this.getReference
        };
    },

    getClass: function () {
        return classNames(block, block + '--' + this.props.titleType, this.props.className)
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
