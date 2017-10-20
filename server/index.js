'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

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

app.listen(1312, function() {
	console.log('Example app listening on port 1312!');
});
