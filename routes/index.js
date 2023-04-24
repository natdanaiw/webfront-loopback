var express = require('express');
var router = express.Router();

const configure = require('../config.json');


var baseurl = configure.baseurl;
var apiurl = configure.apiurl;
var itemapi = configure.itemapi;


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { baseurl: baseurl, apiurl: apiurl,itemapi: itemapi });
});



module.exports = router;
