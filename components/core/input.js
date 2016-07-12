var classNames = require('classnames');
var React = require('react');

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
        return {
            className: this.getClass(),
            onChange: this.props.onChange
        };
    },

    getClass: function () {
        return classNames({
            'input': true,
        }, this.props.className);
    }

});

module.exports = Input;
