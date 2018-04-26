var http = require('http');
var myModule1 = require('./myModule1');
var myModule2 = require('myModule2');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('Coucou');
	myModule1.sayHello();
	myModule2.sayByebye();
	res.end();
});

server.listen(port, hostname);
