var AppDispatcher = require('dispatcher/app-dispatcher');
var UserConstants = require('constants/user-constants');

var UserActions = {
    login: function (user) {
        AppDispatcher.handleViewAction({
            actionType: UserConstants.LOGIN,
            user: user
        });
    },
    logout: function () {
        AppDispatcher.handleViewAction({
            actionType: UserConstants.LOGOUT
        });
    }
};

module.exports = UserActions;
