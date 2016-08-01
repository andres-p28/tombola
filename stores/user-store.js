// VENDOR LIBS
var _ = require('lodash');
var inherits = require('inherits');

// CORE LIBS
var AppDispatcher = require('dispatcher/app-dispatcher');
var BaseStore = require('stores/base-store');
var UserConstants = require('constants/user-constants');

var currentUser = null;

var UserStore = function UserStore () {
    this.currentUser = currentUser;
    AppDispatcher.register(this.handleAction.bind(this));
};

inherits(UserStore, BaseStore);

UserStore.prototype.handleAction = function (payload) {
    var action = payload.action;

    if (action.actionType == UserConstants.LOGIN) {
        this.login(action.user);
    }

    if (action.actionType == UserConstants.LOGOUT) {
        this.logout();
    }

    return true;
};

UserStore.prototype.login = function (user) {
    this.currentUser = user;
    this.emitChange();
};

UserStore.prototype.getCurrentUser = function () {
    return this.currentUser;
};

UserStore.prototype.logout = function () {
    this.currentUser = null;
    this.emitChange();
}

module.exports = new UserStore();
