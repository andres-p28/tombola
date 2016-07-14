var express = require('express');
var searchController = require('./search-controller.js');

var router = express.Router();
router.post('/search', searchController);

module.exports = router;
