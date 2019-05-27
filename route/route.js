var express = require('express');
var route = express.Router();
var controller = require('../lib/controller');
// var views = require('../views/pages')

route.get('/', (req, res, next) => {
    res.render('../views/address');
});

route.post('/address', (req, res, next) => {
    console.log(req.body)
    controller.search(req.body.address).then((data)=>{
        res.send(data);
    }, err =>{
        res.send("500 Internal server error");
    });
   
});

module.exports = route;