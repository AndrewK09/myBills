var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

const routes = require('./routes/routes.js');

app.use('/', routes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
