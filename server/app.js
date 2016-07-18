// VENDOR LIBS
var argv = require('yargs').argv
var bodyParser = require('body-parser');
var cors = require('cors')
var express = require('express');
var path = require('path');
var youtubeApi = require('./routes/youtube/index');

var app = express();

var port;
console.log(argv);
if (argv.production) {
    port = process.env.PORT || 8080;
} else {
    port = 3000;
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../build')));
app.use('/api', youtubeApi);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, function() {
    console.log('App listening on port', port);
});
