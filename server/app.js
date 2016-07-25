// VENDOR LIBS
var argv = require('yargs').argv
var bodyParser = require('body-parser');
var cors = require('cors')
var express = require('express');
var session = require('express-session');
var path = require('path');
var youtubeApi = require('./routes/youtube/index');
var googleAuth = require('./routes/google');
var cookieParser = require('cookie-parser');
var authInterceptor = require('./routes/common/auth-interceptor');

var app = express();
var port;

if (argv.production) {
    port = process.env.PORT || 8080;
} else {
    port = 3000;
}

app.use(cors());
app.use(session({secret: 'asd'}));
app.use(authInterceptor);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../build')));
app.use('/api', youtubeApi);
app.use('/api', googleAuth);
app.get('/', function (req, res) {

    if (req.session.accessToken) {
        res.append('Set-Cookie', 'access_token='+req.session.accessToken);
    }

    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, function() {
    console.log('App listening on port', port);
});
