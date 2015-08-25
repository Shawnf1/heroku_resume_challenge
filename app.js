/**
 * Created by Shawn on 8/25/15.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
	//res.send('Hello express world!');
});

var server = app.listen(3000, function () {
	var port = server.address().port;

	//console.log("Testing listening on port ", port);
});


//var http = require('http');
//
//http.createServer(function (req, res) {
//	res.writeHead(200);
//	res.write('Hello world!');
//	res.end();
//}).listen(process.env.PORT || 3000);