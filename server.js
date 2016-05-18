var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middlewear = require('./middlewear.js');

app.use(middlewear.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello Express');
// });

app.use(express.static(__dirname + '/public'));

app.get('/about', middlewear.requireAuth ,function (req, res) {
	res.send('About Us!');
});

app.listen(port, function (){
	console.log('Listening to port '+ port +'...')
});
