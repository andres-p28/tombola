// VENDOR
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var Input = React.createClass({

    propTypes: {
        inputType: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            inputType: 'input'  
        };
    },

    render: function () {
        return (
            <input {...this.getProps()} />
        );
    },

    getProps: function () {
        return _.extend({}, this.props, {
            className: this.getClass(),
            type: this.props.inputType
        });
    },

    getClass: function () {
        return classNames({
            'input': true,
            'input--radio': (this.props.inputType === 'radio')
        }, this.props.className);
    }

});

module.exports = Input;
