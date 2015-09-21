var socketio = require('socket.io');
var submissions = require('../models/submissions');

var events = require('../utils/events');

module.exports = function (http) {

	var io = socketio(http);

	io.on('connection', function(socket){

	    console.log('User connected');

	    /* Server Events */

	    function submissionAddHandler(id) {
	    	submissions.get(id,function(err,doc) {
		        socket.emit('submissions:added',{data: doc});
		    });
	    }

	    events.on('submissions:add', submissionAddHandler);

	    /* Event handlers */

	    socket.on('submissions:list', function() {
	    	submissions.list(function(err,docs) {
		        socket.emit('submissions:list',{data: docs});
		    });
	    });

	    socket.on('submissions:get', function(id) {
	    	submissions.get(id,function(err,doc) {
		        socket.emit('submissions:get',{data: doc});
		    });
	    });

	    /* Clean up after disconnect */

	    socket.on('disconnect', function(){
	        console.log('User disconnected');

	        events.removeListener('submissions:add',submissionAddHandler);
	    });

	});

};