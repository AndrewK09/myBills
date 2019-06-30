var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

const routes = require('./routes/routes.js');

app.use('/', routes);

let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
