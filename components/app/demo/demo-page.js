// VENDOR LIBS
var React = require('react');

// COMPONENTS CORE
var Button = require('components/core/button');
var Icon = require('components/core/icon');
var Input = require('components/core/input');
var VoteButton = require('components/app/common/vote-button');

var DemoPage = React.createClass({

    render: function () {
        return (
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
                    <Icon icon="thumbs-up" />
                    <Icon icon="thumbs-up" iconSize="medium" />
                    <Icon icon="thumbs-up" iconSize="small" />
                    <Icon icon="times" />
                    <Icon icon="times" iconSize="medium" />
                    <Icon icon="times" iconSize="small" />
                    <VoteButton />
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
