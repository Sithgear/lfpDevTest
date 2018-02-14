var express = require('express');
var movieApp = express();
var movieDb = require('./movieDb');
var jsFiles = express.static(__dirname + '/JS');
var movieViews = express.static(__dirname + '/movieViews');

var MovieController = require('./movieControllers/MovieController');
movieApp.use('/JS', jsFiles);
movieApp.use('/movieViews',movieViews);
movieApp.use('/movie', MovieController);

movieApp.get('/',function(request,response){
  response.sendFile(__dirname + '/movieViews/simpleView.html');
});





module.exports = movieApp;
