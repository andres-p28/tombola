var React = require('react');

var icons = ['thumbs-up', 'times'];

var Icon = React.createClass({

    propTypes: {
        icon: React.PropTypes.oneOf(icons)
    },

    render: function () {
        return (
            <img {...this.getProps()} />
        );
    },

    getProps: function () {
        return {
            src: this.getIcon()
        }
    },

    getIcon: function () {
        var iconFolder = 'images/icons/'
        switch (this.props.icon) {
            case icons[0]:
                return iconFolder + 'thumbs-up.svg'
                break;
            case icons[1]:
                return iconFolder + 'times.svg'
                break;
        }
        return iconFolder + 'thumbs-up.svg';
    }

});

module.exports = Icon;
