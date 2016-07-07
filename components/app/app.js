var React = require('react');


var Button = require('components/core/button');
var Input = require('components/core/input');

var App = React.createClass({

    render: function () {
        return(
            <div className="app">
                <div>
                    <Button onClick={this.handleClick}>Default props</Button>
                    <br/>
                    <Button color="primary">Btn color primary</Button>
                    <Button color="secondary">Btn color secondary</Button>
                    <Button color="tertiary">Btn color tertiary</Button>
                    <br/>
                    <Button>Btn big</Button>
                    <Button size="medium" color="secondary">Btn medium</Button>
                    <Button size="small" color="tertiary">Btn small</Button>
                    <br/>
                    <Button buttonType="rounded">R</Button>
                    <Button buttonType="rounded" size="medium" color="secondary">RM</Button>
                    <Button buttonType="rounded" size="small" color="tertiary">RS</Button>
                </div><br/><br/>
                <div>
                    <Input />
                </div>
            </div>
        );
    },

    handleClick: function () {
        console.log('Click!');
    }

});

module.exports = App;
