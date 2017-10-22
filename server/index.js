'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let port = 3000;

//EXPRESS CONFIG
app.use(express.static('.'));
app.use(bodyParser.urlencoded({
	extended: false,
	limit: '5mb'
}));
app.use(bodyParser.json({
	limit: '5mb'
}));
//END EXPRESS CONFIG

app.listen(port, function() {
	console.log(process.env.NODE_ENV);
	console.log('App listening on port 3000!');
});
