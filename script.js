
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    
const lastFilm = prompt('Один из последних фильмов?', ''),
      filmScore = prompt('На сколько оцените его?', ''), 
      lastFilm1 = prompt('Один из последних фильмов?', ''),
      filmScore2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = filmScore;
personalMovieDB.movies[lastFilm1] = filmScore2;

console.log(personalMovieDB);