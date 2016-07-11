var React = require('react');

//Components
var Title = require('components/core/title');
var SingleResult = require('components/app/search/single-result');

var SearchResults = React.createClass({

    propTypes: {
        searchResults: React.PropTypes.array
    },

    render: function () {
        return (
            <div className="search-results">
                {this.props.searchResults.map(this.renderResult)}
            </div>
        )
    },

    renderResult: function (result, key) {
        return (
            <SingleResult key={result.id.videoId} result={result}/>
        );
    }
});

module.exports = SearchResults;
