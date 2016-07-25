// VENDOR LIBS
var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

var AppDispatcher = _.assign(new Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
