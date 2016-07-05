var React = require('react');
var classNames = require('classnames');

var Column = React.createClass({

    propTypes: {
        width: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className={this.getClass()}>{this.props.children}</div>
        );
    },

    getClass: function(){
        return classNames('grid__column--' + this.props.width);
    }
});

module.exports = Column;
