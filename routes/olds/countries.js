var express = require('express');
var router = express.Router();

var fs = require('fs');
var json_countries = JSON.parse(fs.readFileSync("countries.json", 'utf8'));

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('countries', {data: json_countries});
});

module.exports = router;