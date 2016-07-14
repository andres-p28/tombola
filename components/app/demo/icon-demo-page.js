// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Icon = require('components/core/icon');

var IconDemoPage = React.createClass({

    render: function () {
        return (
            <div className="icon-demo-page">
                <h3>Thumbs</h3>
                <div className="icon-demo-page--thumbs">
                    <Icon icon="thumbs-up" />
                    <Icon icon="thumbs-up" iconSize="medium" />
                    <Icon icon="thumbs-up" iconSize="small" />
                </div>
                <h3>Times</h3>
                <div className="icon-demo-page--times">
                    <Icon icon="times" />
                    <Icon icon="times" iconSize="medium" />
                    <Icon icon="times" iconSize="small" />
                </div>
            </div>
        );
    }
});

module.exports = IconDemoPage;
