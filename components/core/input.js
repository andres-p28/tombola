var React = require('react');

const inputTypes = ['button', 'color', 'checkbox', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'submit', 'text', 'time', 'url', 'week'];

var Input = React.createClass({

    propTypes: {
        type: React.PropTypes.oneOf(inputTypes),
        placeholder: React.PropTypes.string,
        handleChange: React.PropTypes.func,
        onChange: React.PropTypes.func
    },
    
    getDefaultProps: function(){
        return {
            type: 'text',
            placeholder: ''
        }
    },

    render: function(){
        return (<input {...this.props} />);
    }

});

module.exports = Input;
