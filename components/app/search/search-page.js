var React = require('react');

//Components
var SearchBox = require('components/app/search/search-box');

var SearchPage = React.createClass({

    render: function () {
        return (
            <div className="search-page">
                <SearchBox />
            </div>
        );
    }
});

module.exports = SearchPage;
