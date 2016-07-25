// VENDOR LIBS
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

// CORE LIBS
var AppDispatcher = require('dispatcher/app-dispatcher');

var CHANGE_EVENT = 'change';

var BaseStore = function BaseStore () {

};

inherits(BaseStore, EventEmitter);

BaseStore.prototype.addChangeListener = function (callback) {
    this.on(CHANGE_EVENT, callback);
};

BaseStore.prototype.removeChangeListener = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
};

BaseStore.prototype.emitChange = function () {
    this.emit(CHANGE_EVENT);
};

module.exports = BaseStore;
