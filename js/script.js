"use strict";

let numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 for (let i = 0; i < 2; i++){
     let a = prompt("Один из последних просмотренных фильмов?", "");
     let b = prompt("На сколько оцените его?", "");

     if(a != null && b != null && a != "" && b != "" && a.length <= 10){
         personalMovieDB.movies[a] = b;
     } else {
         console.log('Error');
         i--;
     }
 }


let counter = personalMovieDB.count;

if (counter < 10) {
    console.log ("Просмотрено мало фильмов");
} else if (counter >= 10 && counter < 30) {
    console.log ("Вы классический зритель");
} else if (counter >=30) {
    console.log ("Вы киноман");
} else {
    console.log ("Ошибка!!!");
}

console.log (personalMovieDB);