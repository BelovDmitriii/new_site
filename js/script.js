"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
     },
     detectPersonalLevel: function() {
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
    },
    showMyDB: function (hidden) {
        if (!hidden){
            console.log (personalMovieDB);
        }
    },
    toggleVisibileMyDb: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat  = true;
        }
    },
    writeYourGenres: function () {
    
        // for (let i = 1; i <= 3; i++){
        //     let genre = prompt (`Ваш любимый жанр под номером ${i}`);
        //     if (genre == "" || genre == null){
        //         console.log("Вы ввели некорректные данные или ничего не ввели");
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        // }

        // personalMovieDB.genres.forEach( (item, i ) => {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });

        for (let i = 1; i <2; i++) {
            let genre = prompt("Введите любимые жанры через запятую").toLowerCase();
            if  (genre == "" || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMovieDB.genres = genre.split(", ");
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach( (item, i ) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    }
};
