var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema(
  {
    movie_id: Number,
    title: String,
    genres: String
  },
  {
    strict: false
  }
);
mongoose.model('Movie', MovieSchema);

module.exports = mongoose.model('Movie');
