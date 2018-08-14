var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('/routes')
	.then('config/dbConnection.js')
	.then('/models')
	.then('/controllers')
	.into(app);

module.exports = app;