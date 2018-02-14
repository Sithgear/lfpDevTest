$(document).ready(function() {
    var movieCount = 0;
    $.ajax({
        type: 'GET',
        url: "./movie",
        success: function(data) {
            movieCount = data.length;
            $('#movie-span-count').text(movieCount);
        }
    });
    $('#movie-form').load('/movieViews/landingView.html');
    $('#movie-form').load('/movieViews/landingView.html');
    $('#movie-form').load('/movieViews/landingView.html');
    $('#create-movie').on('click', function() {
        $('#movie-form').load('/movieViews/createMovie.html');
        var currentNumber = 0;
        $.ajax({
            type: 'GET',
            url: "./movie",
            success: function(data) {
                currentNumber = data.length;
                $('#movie-count-id').text(currentNumber + 1);
            }
        });
    });
    $('#delete-movie').on('click', function() {
        $('#movie-form').load('/movieViews/deleteMovie.html');
    });
    $('#find-movie').on('click', function() {
        $('#movie-form').load('/movieViews/findMovie.html');
    });
    $('#update-movie').on('click', function() {
        $('#movie-form').load('/movieViews/updateMovie.html');
    });
    $(document).on('click', '#create-movie-button', function() {
        var movieTitle = $('#moveTitle-create').val();
        var movieID = $('#movie-count-id').html();
        var movieGenres = $('#moveGenres-create').val();
        $.ajax({
            type: 'POST',
            url: "./movie",
            data: {
                movie_id: movieID,
                title: movieTitle,
                genres: movieGenres
            },
            success: function() {
                alert('Movie ' + movieTitle + ' added to database.');
                $('#movie-count-id').text(parseInt(movieID) + 1);
                $('#moveTitle-create').val("");
                $('#moveGenres-create').val("");
            }
        });
    });
    $(document).on('click', '#movie-id-find-button', function(e) {
        e.preventDefault();
        var movieID = $('#moveID-find').val();
        $('#search-result-find tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findID/" + movieID,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-find').append('<tr><td>' + data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#move-title-find', function(e) {
        e.preventDefault();
        var title = $('#movieTitle-find').val();
        $('#search-result-find tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findTitle/" + title,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-find').append('<tr><td>' + data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#move-genres-find', function(e) {
        e.preventDefault();
        var genre = $('#movieGenre-find').val();
        $('#search-result-find tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findGenre/" + genre,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-find').append('<tr><td>' + data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#movie-selection-delete', function() {
        var movieID = $('#movie-id-selection-delete').val();
    });
    //
    $(document).on('click', '#find-by-id', function(e) {
        e.preventDefault();
        var movieID = $('#moveID-delete').val();
        $('#search-result-delete tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findID/" + movieID,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-delete').append('<tr><td>' + data[i]._id + '</td><td>' + data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
                $('#movie-delete-form').removeClass('invisible');
                $('#delete-results-table').removeClass('invisible');
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#move-title-find', function(e) {
        e.preventDefault();
        var title = $('#moveTitle-delete').val();
        $('#search-result-delete tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findTitle/" + title,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-delete').append('<tr><td>' + data[i]._id +'</td><td>'+ data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
                $('#movie-delete-form').removeClass('invisible');
                $('#delete-results-table').removeClass('invisible');
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#move-genres-find', function(e) {
        e.preventDefault();
        var genre = $('#moveGenres-delete').val();
        $('#search-result-delete tbody').empty();
        $.ajax({
            type: 'GET',
            url: "./movie/findGenre/" + genre,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    $('#search-result-delete').append('<tr><td>' + data[i]._id + '</td><td>' + data[i].movie_id + '</td><td>' + data[i].title + '</td><td>' + data[i].genres + '</td>');
                }
                $('#movie-delete-form').removeClass('invisible');
                $('#delete-results-table').removeClass('invisible');
            }
        });
        e.preventDefault();
    });
    $(document).on('click', '#movie-selection-delete', function(e) {
      var table = $('#search-result-delete td').html();
      $.ajax({
        type: 'DELETE',
        url: './movie/' + table,
        success: function(){
          alert('movie deleted');
        }
      });
    });
});
