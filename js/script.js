"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 function rememberMyFilms() {
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
 }

 rememberMyFilms();

function detectPersonalLevel () {
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
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);