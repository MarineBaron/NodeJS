var http = require('http');
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message) {
	console.log(message);
});

game.emit('gameover', 'Vous avez perdu !');
