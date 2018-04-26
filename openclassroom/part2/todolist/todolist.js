var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

var app = express();

app

.set('views', __dirname + '/views')

.use(session({secret: 'secret'}))

.use(function (req, res, next) {
	if (typeof(req.session.todoList) == 'undefined') {
		req.session.todoList = [];
	}
	next();
})

.get('/todo', function(req, res) {
	res.render('todo.ejs', {todoList: req.session.todoList});
})

.get('/todo/delete/:id', function (req, res) {
	
	var len = req.session.todoList.length;
	
	if (len && req.params.id != '') {
		
		var id = parseInt(req.params.id);
		
		if (!isNaN(id) && id > -1 && id < len) {
			req.session.todoList.splice(id, 1);
		}
	}
	res.redirect('/todo');
})

.post('/todo/add', parser, function (req, res) {
	if (parser.body.newTodo != '') {
		req.session.todoList.push(parser.body.newTodo);
	}
	res.redirect('/todo');
})

.use(function (req, res, next) {
	res.redirect('/todo');
})

.listen(3000, '127.0.0.1');
