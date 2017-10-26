let express = require('express');
let api = express.Router();

api.get('/', function(req,res){
    res.render('index')
});

module.exports = api
