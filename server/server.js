var express = require('express');
var app = express();
var path = require('path');
var kappens = require('./public/assets/data/kappens.json')
var port = process.env.PORT || 3004;


app.get("/kappens", function(req,res){
    res.send(kappens);
});

app.get('/*', function(req, res){
  var filename = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public/', filename));
});

app.listen(port, function(){
  console.log('Listening for requests on port', port);
});
