var array = [
    {"Name":"李丹阳", "Chinese":80, "Math":80},
    {"Name":"曹蓉","Chinese":90, "Math":80},
    {"Name":"潘晨", "Chinese":80, "Math":90},
    {"Name":"宋建华","Chinese":82, "Math":70},
    {"Name":"孙恬静", "Chinese":87, "Math":79}
];

var express = require('express');
var app = new express();
var hbs = require('hbs');
app.use(express.static('public'));//000
app.set('view engine','html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.render('index',{str:array});
});

app.listen(3000);
