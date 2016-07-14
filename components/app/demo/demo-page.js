// VENDOR
var React = require('react');
var classNames = require('classnames');

// CORE COMPONENTS
var Input = require('components/core/input');

// APP COMPONENTS
var ButtonDemoPage = require('components/app/demo/button-demo-page');
var DemoHeaderControls = require('components/app/demo/demo-header-controls');
var IconDemoPage = require('components/app/demo/icon-demo-page');

var DemoPage = React.createClass({

    getInitialState: function () {
        return {
            selectedColor: 'default'  
        };
    },

    render: function () {
        return(
            <div className="demo-page">
                <div className="demo-page--header">
                    <div className="demo-header">
                        <div className="demo-header--title">
                            <h1>TOMBOLA DEMO PAGE</h1>
                        </div>
                        <DemoHeaderControls onChange={this.handleBackgroundColorChange} />
                    </div>
                </div>
                <div className={this.getContentClass()}>
                    <h2 className="demo-page--title">Buttons</h2>
                    <ButtonDemoPage />
                </div>
                <div className={this.getContentClass()}>
                    <h2 className="demo-page--title">Inputs</h2>
                    <Input onChange={this.handleChange}/>
                </div>
                <div className={this.getContentClass()}>
                    <h2 className="demo-page--title">Icons</h2>
                    <IconDemoPage />
                </div>
            </div>
        );
    },

    getContentClass: function () {
        return classNames({
            'demo-page--content': true,
            'demo-page--content_alternative': (this.state.selectedColor === 'alternative')
        });
    },

    handleBackgroundColorChange: function (color) {
        this.setState({
            selectedColor: color
        });
    },

    handleChange: function (event) {
        console.log(event.target.value)
    }

});

module.exports = DemoPage;
