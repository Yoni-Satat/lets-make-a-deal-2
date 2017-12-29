var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  // console.log('Example app listening at http://%s:%s', host, port);
});
