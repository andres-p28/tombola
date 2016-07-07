var React = require('react');
var classNames = require('classnames');

const block = 'input';

var Input = React.createClass({

    render: function () {
        return (
            <input {...this.getProps()} className={this.getClass()}/>
        );
    },

    getClass: function () {
        return classNames(block);
    },

    getProps: function () {
        return {
            onChange: this.props.onChange
        }
    }

});

module.exports = Input;
