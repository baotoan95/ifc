const express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(session({
    secret: 'ifc',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.session());
var server = app.listen(8080, () => {
    console.log('Server is running on port ' + server.address().port);
});

// Import routers
require('./controller')(app);