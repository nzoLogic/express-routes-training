// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();
var numbers = 8;
var artwork = [
  {artist: 'artist',
  title: 'title',
  description: 'art'
  }
]

// MIDDLEWARE
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
  // app.use('/index.html', express.static(path.join(__views) + 'public'));
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
// Root Route
app.get('/',function(req, res){
  res.sendFile('views/index.html', {root: __dirname});
})
app.get('/pick-a-number',function(req, res){
  var pickedNum = req.query.number;
  pickedNum = parseInt(pickedNum);
  if(pickedNum === numbers){
    res.send('got it!');
  }
  else if(pickedNum > numbers){
    res.send('too high');
  }
  else {
    res.send('too low');
  }
});
// Gallery View Route


// The Number Guessing Game
app.post('/pick-a-number',function(req, res){
  pickedNum = req.body.number;
  console.log(pickedNum);
  res.send(pickedNum);
});

// Gallery
app.get('/art-gallery', function(req, res){
  res.sendFile('views/artgallery.html', {root: __dirname});

  // res.json(artwork);
});
app.post('/art-gallery', function(req, res){
  artwork.push(req.body);


  res.json(artwork);

});

// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
