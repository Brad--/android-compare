var express = require('express');
var app     = express();
var path    = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

var json = require('./app/config.json');
var PORT = json.PORT;

var users = 0;

app.listen(PORT, function(){
    console.log('Server listening on port ' + PORT +" . . .");
});