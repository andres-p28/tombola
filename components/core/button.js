var React = require('react');
var classNames = require('classnames');

var types = ['primary', 'secondary', 'tertiary'];

var Button = React.createClass({

    propTypes: {
        isRounded: React.PropTypes.bool,
        buttonType: React.PropTypes.oneOf(types)
    },

    render: function () {
        return (
            <button {...this.getProps()} >{this.props.children}</button>
        );
    },

    getProps: function () {
        return {
            className: this.getClass(),
            onClick: this.props.onClick
        };
    },

    getClass: function () {
        return classNames({
            'button': true,
            'button-primary': (this.props.buttonType === 'primary'),
            'button-secondary': (this.props.buttonType === 'secondary'),
            'button-tertiary': (this.props.buttonType === 'tertiary'),
            'button--rounded': (this.props.isRounded)
        });
    }

});

module.exports = Button;
