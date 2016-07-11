var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var block = 'input';

var Input = React.createClass({

    propTypes: {
        onChange: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <input {...this.getProps()}/>
        );
    },

    getProps: function () {
        return _.assign({}, this.props, {
            className: this.getClass()
        });
    },

    getClass: function () {
        return classNames(block, this.props.className);
    }

});

module.exports = Input;
