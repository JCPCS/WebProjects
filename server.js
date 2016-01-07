var express = require('express');

var app = express();

// serve static files
app.use(express.static('www'));

// register routes
require('./routes')(app);

var server = app.listen(1337);