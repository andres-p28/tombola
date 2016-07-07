var React = require('react');
var classNames = require('classnames');

const block = 'input';

var Input = React.createClass({
    render: function () {
        return (
            <input className={this.getClass()}/>
        );
    },

    getClass: function () {
        return classNames(block);
    }

});

module.exports = Input;
