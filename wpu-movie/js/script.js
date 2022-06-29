function searchMovie() {
    $('#movie-list').html('');

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '642790e6',
            's' : $('#search-input').val()
        },
        success: function (result) { 
            if (result.Response == 'True') {
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-3">
                        <div class="card mb-3">
                            <img src=`+ data.Poster +` class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <p class="card-text">`+ data.Year +`</p>
                                <a href="#" class="btn btn-primary see-more" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See more</a>
                            </div>
                        </div>
                    </div>
                    `)
                })

                $('#search-input').val('');
            } else {
                $('#movie-list').html(`<h2 class="text-center">`+ result.Error +`</h2>`);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if(e.keyCode == 13) {
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-more', function () {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '642790e6',
            'i' : $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response == 'True') {
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src=`+ movie.Poster +` class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                <li class="list-group-item">`+ movie.Year +`</li>
                                <li class="list-group-item">`+ movie.Type +`</li>
                                <li class="list-group-item">`+ movie.Runtime +`</li>
                                <li class="list-group-item">`+ movie.Genre +`</li>
                                <li class="list-group-item">`+ movie.Director +`</li>
                                <li class="list-group-item">`+ movie.Actors +`</li>
                                <li class="list-group-item">`+ movie.Plot +`</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `)
            } else {
                
            }
        }
    })
});