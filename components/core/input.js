// VENDOR LIBS
var classNames = require('classnames');
var React = require('react');

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
        return {
            className: this.getClass(),
            defaultChecked: this.props.defaultChecked,
            defaultValue: this.props.defaultValue,
            name: this.props.name,
            onChange: this.props.onChange,
            type: this.props.inputType,
            value: this.props.value
        };
    },

    getClass: function () {
        return classNames({
            'input': true,
            'input--radio': (this.props.inputType === 'radio')
        }, this.props.className);
    }

});

module.exports = Input;
