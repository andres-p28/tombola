// VENDOR
var React = require('react');

// APP COMPONENTS
var AddButton = require('components/app/common/add-button');
var VoteButton = require('components/app/common/vote-button');

// CORE COMPONENTS
var Button = require('components/core/button');

var ButtonDemoPage = React.createClass({

    render: function () {
        return (
            <div className="button-demo-page">
                <h3>Default</h3>
                <div className="button-demo-page--default">
                    <Button onClick={this.handleClick}>Default props</Button>
                    <Button buttonType="primary">Btn color primary</Button>
                    <Button buttonType="secondary">Btn color secondary</Button>
                    <Button buttonType="tertiary">Btn color tertiary</Button>
                </div>
                <h3>Rounded</h3>
                <div className="button-demo-page--rounded">
                    <Button isRounded buttonType="primary">R</Button>
                    <Button isRounded buttonType="secondary">RM</Button>
                    <Button isRounded buttonType="tertiary">RS</Button>
                </div>
                <h3>Vote Button</h3>
                <div className="button-demo-page--vote">
                    <VoteButton />
                </div>
                <h3>Add Button</h3>
                <div className="button-demo-page--add">
                    <AddButton />
                </div>
            </div>
        );
    },

    handleClick: function () {
        console.log('Button Clicked!');
    }
});

module.exports = ButtonDemoPage;
