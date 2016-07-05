var React = require('react');

var Thumbnail = React.createClass({

    propTypes: {
        src: React.PropTypes.string,
        alt: React.PropTypes.string,
        height: React.PropTypes.number,
        width: React.PropTypes.number
    },

    render: function(){
        return (
            <img {...this.props}/>
        );
    },

    getDefaultProps: function(){
        return {
            src: '/images/placeholder/350x350.png',
            alt: 'Placeholder 350x350',
            height: 350,
            width: 350
        }
    }

});

module.exports = Thumbnail;
