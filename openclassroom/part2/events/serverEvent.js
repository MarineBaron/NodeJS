var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('Salut tout le monde');
});

server.on('close', function() {
	console.log('bye, bye');
})

server.listen(port, hostname);

server.close();
