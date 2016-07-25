var AppDispatcher = require('dispatcher/app-dispatcher');
var UserConstants = require('constants/user-constants');

var UserActions = {
    loginUser: function () {
        AppDispatcher.handleViewAction({
            actionType: UserConstants.LOGIN_USER,
        });
    }
};

module.exports = UserActions;
