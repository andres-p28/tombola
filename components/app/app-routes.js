var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Layout = require('components/app/layout');
var SearchPage = require('components/app/search/search-page');
var DemoPage = require('components/app/demo/demo-page');

var appRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={DemoPage} />

            <Route path="/index.html" component={SearchPage} />
            <Route path="/demo.html" component={DemoPage} />
        </Route>
    </Router>
);

module.exports = appRoutes;
