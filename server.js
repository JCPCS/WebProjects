var express = require('express');

var app = express();
var port = process.env.PORT || 1337;

// serve static files
app.use(express.static('www'));

// register routes
require('./routes')(app);

var server = app.listen(port);