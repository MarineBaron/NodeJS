var http = require('http');
var markdown = require('markdown').markdown;

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write("Coucou Markdown");
	res.write(markdown.toHTML("Coucou **Markdown**"));
	res.end();
});

server.listen(port, host);
