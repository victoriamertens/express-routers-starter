console.log('Hello');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery ready!');

  // Anonomous functions for click handlers
  $('#add-book').on('click', function(event) {
        event.preventDefault();
        addBook();
      });
  $('#add-movie').on('click', function(event) {
        event.preventDefault();
        addMovie();
      })
  
  // Get existing data from server
  getBooks();
  getMovies();
}

function getBooks() {
  console.log('Getting books...');
  $.ajax({
    method: 'GET',
    url: '/book'
  }).then( function(response) {
    renderBooks( response );
  }).catch( function(error) {
    console.log('Error getting books', error);
    alert('Sorry. Something bad happened. Try again later.');
  })
}

function getMovies() {
  console.log('Getting movies...');
  $.ajax({
    method: 'GET',
    url: '/movie'
  }).then( function(response) {
    renderMovies( response );
  }).catch( function(error) {
    console.log('Error getting movies', error);
    alert('Sorry. Something bad happened. Try again later.');
  })
}

function renderBooks( books ) {
  console.log('rendering books to the DOM', books);
  $('#out-books').empty();
  for ( let item of books ){ 
    $('#out-books').append(`
          <li>
            ${item.title} by ${item.author}
          </li>`
        );
  }
}

function renderMovies( movies ) {
  console.log('rendering movies to the DOM', movies);
  $('#out-movies').empty();
  for ( let item of movies ){ 
    $('#out-movies').append(`
          <li>
            ${item.title} directed by ${item.director}
          </li>`
        );
  }
}

function addBook() {
  let newBook = {
    title: $('#book-title').val(),
    author: $('#book-author').val()
  }
  console.log('Sending book to server...', newBook);
  
  $.ajax({
    method: 'POST',
    url: '/book',
    data: newBook
  }).then( function(response) {
    console.log('Book added');
    $('.book-input').val('');
    getBooks();
  })
}

function addMovie() {
  let newMovie = {
    title: $('#movie-title').val(),
    director: $('#movie-director').val()
  }
  console.log('Sending movie to server...', newMovie);
  
  $.ajax({
    method: 'POST',
    url: '/movie',
    data: newMovie
  }).then( function(response) {
    console.log('Movie added');
    $('.movie-input').val('');
    getMovies();
  })
}