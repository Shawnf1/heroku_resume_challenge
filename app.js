/**
 * Created by Shawn on 8/25/15.
 */
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200);
	res.write('Hello world!');
	res.end();
}).listen(process.env.PORT || 3000);