// VENDOR LIBS
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

// APP COMPONENTS
var DemoPage = require('components/app/demo/demo-page');
var Layout = require('components/app/layout');
var SearchPage = require('components/app/search/search-page');

var appRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={SearchPage} />
            <Route path="/index.html" component={SearchPage} />
            <Route path="/demo.html" component={DemoPage} />
        </Route>
    </Router>
);

module.exports = appRoutes;
