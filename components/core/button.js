var classNames = require('classnames');
var React = require('react');

var types = ['primary', 'secondary', 'tertiary'];

var Button = React.createClass({

    propTypes: {
        buttonType: React.PropTypes.oneOf(types),
        isInputButton: React.PropTypes.bool,
        isRounded: React.PropTypes.bool
    },

    render: function () {
        return (
            <button {...this.getProps()} >{this.props.children}</button>
        );
    },

    getProps: function () {
        return {
            className: this.getClass(),
            disabled: this.props.disabled,
            onClick: this.props.onClick
        };
    },

    getClass: function () {
        return classNames({
            'button': true,
            'button-primary': (this.props.buttonType === 'primary'),
            'button-secondary': (this.props.buttonType === 'secondary'),
            'button-tertiary': (this.props.buttonType === 'tertiary'),
            'button--rounded': (this.props.isRounded),
            'button--input-button': (this.props.isInputButton),
        }, this.props.className);
    }

});

module.exports = Button;
