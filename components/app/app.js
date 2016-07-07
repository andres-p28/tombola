var React = require('react');

var Button = require('components/core/button');

var App = React.createClass({
    render: function () {
        return(
            <div className="app">
                <Button>Click me!</Button>
            </div>
        );
    }
});

module.exports = App;
