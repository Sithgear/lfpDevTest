var express = require('express');
var movieRouter = express.Router();
var bodyParser = require('body-parser');

movieRouter.use(bodyParser.urlencoded({extended: true}));
var Movie = require('./../MovieModels/Movie');

movieRouter.post('/',function(request,response){
  Movie.create({
    movie_id : request.body.movie_id,
    title : request.body.title,
    genres : request.body.genres
  },
  function(err,movie){
    if(err) return response.status(500).send("post error " + err);
      response.status(200).send(movie);
  });
});

movieRouter.get('/', function(request,response){
  Movie.find({},function(err,movie){
    if(err) return response.status(500).send('get error ' + err);
      response.status(200).send(movie);
  });
});

movieRouter.get('/findID/:id',function(request,response){
  Movie.find({ "movie_id": request.params.id},function(err,movie){
    if(err) return response.status(500).send('get movie id error ' + err);
    if(!movie) return response.status(404).send('No movie with ID found');
    response.status(200).send(movie);
  });
});

movieRouter.get('/findTitle/:title',function(request,response){
  Movie.find({ "title": new RegExp(request.params.title, 'i')},function(err,movie){
    if(err) return response.status(500).send('get movie title error ' + err);
    if(!movie) return response.status(404).send('No movie with title found');
    response.status(200).send(movie);
  });
});

movieRouter.get('/findGenre/:genres',function(request,response){
  Movie.find({ "genres": new RegExp(request.params.genres, 'i')},function(err,movie){
    if(err) return response.status(500).send('get movie genre error ' + err);
    if(!movie) return response.status(404).send('No movie with genre found');
    response.status(200).send(movie);
  });
});


movieRouter.get('/:id',function(request,response){
  Movie.findById(request.params.id,function(err,movie){
    if(err) return response.status(500).send('get by id error ' + err);
    if(!movie) return response.status(404).send('No movie found.');
    response.status(200).send(movie);
  });
});

movieRouter.delete('/:id',function(request,response){
  Movie.find(request.params.id,function(err,movie){
    if(err) return response.status(500).send('delete error ' + err);
    response.status(200).send('Movie ' + movie.title + " was deleted.");
  });
});

movieRouter.put('/:id',function(request,response){
  Movie.findByIdAndUpdate(request.params.id,request.body,{new: true},function(err,movie){
    if(err) return response.status(500).send('put error ' + err);
    response.status(200).send(movie);
  });
});



module.exports = movieRouter;
