/*
 * Requring an express module 
 */
var express = require('express');
var port = 3200;
var app = express();

/*
 * Registering the app controllers & ejecting the app
 * in the controllers file.
 */
var appController = require('./public/controllers/app-controller');
appController(app);

/**
 * Setting view engine as ejs.
 */
app.set('view engine',"ejs");

/*
 *   serving static files like CSS files    
 */
app.use(express.static('./public'));

app.listen(port,() => console.log("Your server is listening at port",port));