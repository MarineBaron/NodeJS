var http = require('http');
var url = require('url');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) => {
	var page = url.parse(req.url).pathname;
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	if (page == '/') {
		res.write('<p>Accueil</p>');
	}
	else if (page == '/sous-sol') {
		res.write('<p>Sous-sol</p>');
	}
	else if (page == '/etage1/chambre') {
		res.write('<p>Chambre 1</p>');
	}
	else {
		res.statusCode = 403;
	}
	res.end();
});

server.listen(port, hostname, () => {
	//console.log(`Server running at http://${hostname}:${port}/`);
});
