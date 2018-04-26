var express = require('express');
var ejs = require('ejs');

var port =3000;
var hostname = '127.0.0.1';

var app = express();

app.get('/', function(req, res) {
	res.setHeader("Content-Type", 'text/html');
	res.send('<p>Vous êtes à l\'accueil</p>');
})
.get('/sous-sol', function(req, res) {
	res.setHeader("Content-Type", 'text/html');
	res.send('<p>Vous êtes au sous-sol</p>');
})
.get('/etage/:etagenum/chambre', function(req, res) {
	res.setHeader("Content-Type", 'text/html');
	res.render('etage.ejs', {etage: req.params.etagenum});
})
.use(function(req, res, next) {
	res.setHeader("Content-Type", 'text/html');
	res.status(404). send('<p>Page introuvable</p>');
});

app.listen(port, hostname);
