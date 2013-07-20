var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString('utf-8');
    response.send(html);
});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/static/css'));
app.use(express.static(__dirname + '/static/fonts'));
app.use(express.static(__dirname + '/static/images'));
app.use(express.static(__dirname + '/static/javascript'));
app.use(express.static(__dirname + '/static/media'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
