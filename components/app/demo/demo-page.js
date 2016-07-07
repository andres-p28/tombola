var React = require('react');

var Button = require('components/core/button');
var Input = require('components/core/input');
var Icon = require('components/core/icon');

var DemoPage = React.createClass({

    render: function () {
        return(
            <div className="app">
                <div>
                    <Button onClick={this.handleClick}>Default props</Button>
                    <br/>
                    <Button buttonType="primary">Btn color primary</Button>
                    <Button buttonType="secondary">Btn color secondary</Button>
                    <Button buttonType="tertiary">Btn color tertiary</Button>
                    <br/>
                    <Button isRounded buttonType="primary">R</Button>
                    <Button isRounded buttonType="secondary">RM</Button>
                    <Button isRounded buttonType="tertiary">RS</Button>
                </div><br/><br/>
                <div>
                    <Input onChange={this.handleChange}/>
                </div>
                <div>
                    <Icon />
                    <Icon icon="times"/>
                </div>
            </div>
        );
    },

    handleClick: function () {
        console.log('Click!');
    },

    handleChange: function (event) {
        console.log(event.target.value)
    }

});

module.exports = DemoPage;
