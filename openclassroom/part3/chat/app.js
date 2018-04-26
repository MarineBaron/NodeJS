var	app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent');

app
.set('views', __dirname + '/views')
.get('/', function(req, res) {
	res.render('index.ejs');
});

io.sockets.on('connection', function (socket, pseudo) {
	socket.on('new_client', function (pseudo) {
		pseudo = ent.encode(pseudo);
		socket.pseudo = pseudo;
		socket.broadcast.emit('new_client', pseudo);
	});
	socket.on('message', function(message) {
		message = ent.encode(message);
		socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
	});
});

server.listen(3000, '127.0.0.1');
