/**
 * Created by Shawn on 8/25/15.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
});

var server = app.listen(process.env.PORT || 3000, function () {
	var port = server.address().port;
});