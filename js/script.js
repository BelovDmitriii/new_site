let numberOfFilms = prompt("Сколько фильмов Вы посмотрели?", "");




let personalMovieDB = {
    cont: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let one = prompt("Один изпоследних просмотренных фильмов?", "");
let two = prompt("На сколько оцените его?", "");
let three = prompt("Один изпоследних просмотренных фильмов?", "");
let four = prompt("На сколько оцените его?", "");

personalMovieDB.movies[one] = two;
personalMovieDB.movies[three] = four;

console.log (personalMovieDB);
