var React = require('react');
var classNames = require('classnames');

var block = 'input';

var Input = React.createClass({

    render: function () {
        return (
            <input {...this.getProps()}/>
        );
    },

    getClass: function () {
        return classNames(block);
    },

    getProps: function () {
        return {
            className: this.getClass(),
            onChange: this.props.onChange
        }
    }

});

module.exports = Input;
