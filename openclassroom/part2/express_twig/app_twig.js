
var Twig = require('twig'),
    express = require('express'),
	app = express();
	
var port = 3000;
var hostname = '127.0.0.1';

app.get('/', function(req, res) {
	res.render('default.twig', {location: "accueil"});
})
.get('/sous-sol', function(req, res) {
	res.render('default.twig', {location: "sous-sol"});
})
.get('/etage/:etagenum/chambre', function(req, res) {
	res.render('etage.twig', {etage: req.params.etagenum});
})
.use(function(req, res, next) {
	res.setHeader("Content-Type", 'text/html');
	res.status(404). send('<p>Page introuvable</p>');
});

app.listen(port, hostname);
