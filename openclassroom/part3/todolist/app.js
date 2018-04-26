/* Recuperation des modules */
var	app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent');
	
/* Initialisation d'une variable globale vide qui contiendra les todos*/
var	todoList = [];

/* Fonctions sur app (url = todo + redirection vers todo sinon) */
app
.set('views', __dirname + '/views')
.get('/todo', function(req, res) {
	res.render('todo.ejs', {todoList: todoList});
})
.use(function (req, res, next) {
	res.redirect('/todo');
});

/* Actions sur reception message client + reemission a tous les auters clients */
io.sockets.on('connection', function (socket, pseudo) {
	socket.on('todo_add', function(todo) {
		todo = ent.encode(todo);
		todoList.push(todo);
		socket.broadcast.emit('todo_add', todo);
	});
	socket.on('todo_delete', function(index) {
		todoList.splice(index, 1);
		socket.broadcast.emit('todo_delete', index);
	});
});

/* Ecoute du serveur */
server.listen(8080);
