var React = require('react');
var Row = require('components/core/row');
var Column = require('components/core/column');
var Thumbnail = require('components/core/thumbnail');
var classNames = require('classnames');

var ResultItem = React.createClass({

    propTypes: {
        item: React.PropTypes.object,
        layout: React.PropTypes.oneOf(['grid', 'list']).isRequired,
        handleSelect: React.PropTypes.func,
        isSelected: React.PropTypes.bool
    },

    render: function(){
        var itemData = this.getItemData();
        return this.props.layout == 'grid' ? this.renderGrid(itemData) : this.renderList(itemData) ;
    },

    getItemData: function(){
        var itemData = this.props.item.snippet;
        return {
            title: itemData.title,
            thumbnail: itemData.thumbnails.medium,
        };
    },

    getThumbailProps: function(thumbnail, title){
        return {
            src: thumbnail.url,
            alt: title,
            height: thumbnail.height,
            width: thumbnail.width
        };
    },

    _onClick: function(){
        this.props.handleSelect(this.props.item.id.videoId);
    },

    renderList: function(itemData){
        var classes = classNames('result-item--list', {
            selected: this.props.isSelected
        });
        return (
            <div className={classes} onClick={this._onClick}>
                <Row>
                    <Column width="30">
                        <Thumbnail {...this.getThumbailProps(itemData.thumbnail, itemData.title)} />
                    </Column>
                    <Column width="70">
                        <h3 className="result-item__title">{itemData.title}</h3>
                    </Column>
                </Row>
            </div>
        );
    },

    renderGrid: function(itemData){
        var classes = classNames('result-item--grid', {
            selected: this.props.isSelected
        });
        return(
            <Column width="33">
                <div className={classes} onClick={this._onClick}>
                    <Thumbnail {...this.getThumbailProps(itemData.thumbnail, itemData.title)} />
                    <div className="result-item__title-wrapper--grid">
                        <h3 className="result-item__title--grid">{itemData.title}</h3>
                    </div>
                </div>
            </Column>
        )
    }

});

module.exports = ResultItem;
