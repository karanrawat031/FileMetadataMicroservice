var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var port    = process.env.PORT || 8080;

app.set('view engine','ejs');

//landing route
app.get('/',function(req,res){
   res.redirect('/home');
});

//index route
app.get('/home',function(req,res){
   res.render('index');
});

//new form
app.get('/home/new',function(req,res){
  res.render('new');
});

//Post route for calculating Size
app.post('/home/fileSize',upload.single('file'),function(req,res){
  var file = req.file.size;
  res.json({size:file});
});
app.listen(port);
console.log('The magic happens on port ' + port);
