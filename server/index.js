'use strict';
let express = require('express');
//let httpsRedirect = require('express-https-redirect');
let app = express();
let bodyParser = require('body-parser');

let port = process.env.NODE_ENV === 'production' ? 443 : 3000;

//EXPRESS CONFIG
//app.use('/', httpsRedirect());
app.use(express.static('./dist'));
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
  console.log(`App listening on port ${port}!`);
});