var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./lib/controller');
var route = require('./route/route');
var PORT = process.env.PORT || 4115;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.set('view engine', 'ejs');
    
app.use('/', route);

controller.init().then(() => {

    app.listen(PORT, () => {
        console.log("Server Running on port "+PORT);
    });

}, err =>{
    console.log("Failed to init app");
});


