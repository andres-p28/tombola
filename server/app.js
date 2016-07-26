// VENDOR LIBS
var argv = require('yargs').argv
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var express = require('express');
var path = require('path');
var session = require('express-session');

// CORE LIBS
var authInterceptor = require('./routes/common/auth-interceptor');
var googleAuth = require('./routes/auth/google');
var youtubeApi = require('./routes/youtube/index');

var app = express();
var port;

if (argv.production) {
    port = process.env.PORT || 8080;
} else {
    port = 3000;
}

app.use(cors());
app.use(session({
        secret: 'thisIsASecretString',
        resave: false,
        saveUninitialized: true
    }
));
app.use(authInterceptor);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../build')));
app.use('/api', youtubeApi);
app.use('/api', googleAuth);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, function() {
    console.log('App listening on port', port);
});
