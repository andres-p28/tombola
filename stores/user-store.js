// VENDOR LIBS
var _ = require('lodash');
var inherits = require('inherits');

// CORE LIBS
var AppDispatcher = require('dispatcher/app-dispatcher');
var BaseStore = require('stores/base-store');
var UserConstants = require('constants/user-constants');
var Utils = require('services/utils');
var UserService = require('services/user-service');

var currentUser = null;

var UserStore = function UserStore () {
    this.currentUser = currentUser;
    AppDispatcher.register(this.handleAction.bind(this));
};

inherits(UserStore, BaseStore);

UserStore.prototype.handleAction = function (payload) {
    var action = payload.action;

    if (action.actionType == UserConstants.LOGIN_USER) {
        this.loginUser();
    }

    return true;
};

UserStore.prototype.loginUser = function loginUser () {
    if (!currentUser) {
        var accessTokenCookie = Utils.getCookie('access_token');
        if (accessTokenCookie) {
            UserService.getUserProfile(accessTokenCookie, function (profile) {
                this.currentUser = profile;
                this.emitChange();
            }.bind(this));
        } else {
            this.currentUser = null;
            this.emitChange();
        }
    }
};

UserStore.prototype.getCurrentUser = function getCurrentUser () {
    return this.currentUser;
}

module.exports = new UserStore();
