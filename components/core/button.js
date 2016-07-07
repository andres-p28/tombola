var React = require('react');
var classNames = require('classnames');

const colors = ['primary', 'secondary', 'tertiary'];
const types = ['squared', 'rounded'];
const sizes = ['big', 'medium', 'small'];
const block = 'button';

var Button = React.createClass({

    propTypes: {
        color: React.PropTypes.oneOf(colors),
        buttonType: React.PropTypes.oneOf(types),
        size: React.PropTypes.oneOf(sizes)
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
        return classNames(block, this.getButtonType(), this.getButtonColor(), this.getButtonSize());
    },

    getButtonType: function () {
        switch (this.props.buttonType) {
            case types[0]:
                return block + '--' + types[0]
                break;
            case types[1]:
                return block + '--' + types[1]
                break;
        }
        return '';
    },

    getButtonColor: function () {
        switch (this.props.color) {
            case colors[0]:
                return block + '--' + colors[0]
                break;
            case colors[1]:
                return block + '--' + colors[1]
                break;
            case colors[2]:
                return block + '--' + colors[2]
                break;
        }
        return '';
    },

    getButtonSize: function () {
        switch (this.props.size) {
            case sizes[0]:
                return block + '--' + sizes[0]
                break;
            case sizes[1]:
                return block + '--' + sizes[1]
                break;
            case sizes[2]:
                return block + '--' + sizes[2]
                break;
        }
        return '';
    }

});

module.exports = Button;
