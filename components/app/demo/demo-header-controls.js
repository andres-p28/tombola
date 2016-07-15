// VENDOR LIBS
var React = require('react');

// CORE COMPONENTS
var Input = require('components/core/input');

var DemoHeaderControls = React.createClass({

    propTypes: {
        onChange: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            selectedColor: 'default'
        };
    },

    render: function () {
        return (
            <div className="demo-header-controls">
                <strong>Background color:</strong>
                <Input {...this.getRadioProps('alternative')} /> Alternative
                <Input {...this.getRadioProps('default')} /> Default
            </div>
        );
    },

    getRadioProps: function (color) {
        return {
            defaultChecked: (this.state.selectedColor === color),
            inputType: 'radio',
            name: 'backgroundColor',
            onChange: this.handleBackgroundChangeClick.bind(null, color),
            value: color
        };
    },

    handleBackgroundChangeClick: function (color) {
        this.setState({
            color: color
        }, this.props.onChange.bind(null, color));
    }
});

module.exports = DemoHeaderControls;
