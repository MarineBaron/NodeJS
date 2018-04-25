var http = require('http');
var url = require('url');
var querystring = require('querystring');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	if ('prenom' in params && 'nom' in params) {
		res.write('<p>Hello ' + params['prenom'] + ' ' + params['nom'] + '</p>');
	}
	else {
		res.write('<p>What\'s your name ?</p>');
	}
	res.end();
});

server.listen(port, hostname, () => {
	//console.log(`Server running at http://${hostname}:${port}/`);
});
