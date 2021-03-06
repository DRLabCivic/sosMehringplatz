/*Define dependencies.*/

var express = require('express');
var app = express();
var http = require('http').Server(app);

var config = require('./config.js');

/* Load Sockets */

var sockets = require('./sockets')(http);

/* Load Router */

var router = require('./router')(app);

/* Error Handling */

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

/* Run the server */

http.listen(config.port,config.hostname,function(){
    console.log("Node Server listening on "+config.hostname+":"+config.port);
});