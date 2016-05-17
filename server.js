var express = require('express');
var app = express();
var port = 3000;

var middlewear = {
	requireAuth: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middlewear.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello Express');
// });

app.use(express.static(__dirname + '/public'));

app.get('/about', middlewear.requireAuth ,function (req, res) {
	res.send('About Us');
});

app.listen(port, function (){
	console.log('Listening to port '+ port +'...')
});
