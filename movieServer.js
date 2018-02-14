var movieApp = require('./movieApp');
var port = process.env.PORT || 8080;

var movieServer = movieApp.listen(port,function(){
  console.log('Movie api server listening on port ' + port);
});
