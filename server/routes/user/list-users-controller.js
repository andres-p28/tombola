// CORE LIBS
var Users = require('./users');

var listUsersController = function (req, res) {
    Users.getUsers(function (snapshot) {
        res.json(snapshot.val());
    });
};

module.exports = listUsersController;
