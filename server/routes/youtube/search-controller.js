var Youtube = require('./youtube');

var searchController = function(req, res){
    Youtube.search(req.body.q, function(err, results){
        if (err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
};

module.exports = searchController;
