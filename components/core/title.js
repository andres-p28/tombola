var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var titleTypes = ['primary', 'secondary', 'tertiary'];
var block = 'title'

var Title = React.createClass({

    propTypes: {
        titleType: React.PropTypes.oneOf(titleTypes).isRequired
    },

    render: function () {
        var Tag = this.getTitleType();
        return(
            <Tag {...this.getProps()}>
                {this.props.children}
            </Tag>
        )
    },

    getTitleType: function () {
        if (this.props.titleType === 'primary') return 'h1';
        if (this.props.titleType === 'secondary') return 'h2';
        if (this.props.titleType === 'tertiary') return 'h3';
    },

    getProps: function () {
        return {
            className: this.getClass()
        };
    },

    getClass: function () {
        return classNames(block, block + '--' + this.props.titleType, this.props.className)
    }

});

module.exports = Title;
